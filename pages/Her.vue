<template>
  <!-- 外层颜色容器 -->
  <div
    class="min-h-screen transition-colors duration-500"
    :style="{
      background: currentBgColor,
      color: currentTextColor,
    }"
  >
    <!-- 进度条 -->
    <div class="fixed right-6 top-1/2 -translate-y-1/2 w-12 z-50">
      <svg :height="progressHeight" class="w-full">
        <!-- 进度条背景线 -->
        <path
          :d="`M6 0 V${progressHeight}`"
          stroke="currentColor"
          stroke-width="2"
          class="text-gray-600"
          fill="none"
        />
        <!-- 动态进度线 -->
        <path
          :d="`M6 0 V${currentProgress}`"
          stroke="currentColor"
          stroke-width="2"
          class="text-blue-500 transition-all duration-500"
          fill="none"
        />
        <!-- 进度节点 -->
        <circle
          v-for="(_, index) in galleryItems"
          :key="index"
          cx="6"
          :cy="nodePositions[index]"
          r="4"
          class="transition-all duration-300"
          :class="activeIndex >= index ? 'text-blue-500' : 'text-gray-500'"
          fill="currentColor"
        />
      </svg>
    </div>

    <!-- 内容容器 -->
    <div class="container mx-auto px-4 py-12 md:py-20">
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        class="gallery-item min-h-screen py-12 md:py-20"
        :ref="(el) => (itemRefs[index] = el)"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <!-- 图片容器 -->
          <div class="image-container overflow-hidden rounded-xl shadow-2xl">
            <img
              :src="item.img_src"
              :alt="item.title"
              class="w-full h-auto object-cover opacity-0 transform"
            />
          </div>

          <!-- 内容容器 -->
          <div class="content-container space-y-4 md:space-y-6">
            <h2 class="text-3xl md:text-5xl font-bold opacity-0 transform">
              {{ item.title }}
            </h2>
            <p class="text-base md:text-lg text-gray-400 opacity-0 transform">
              {{ item.date }}
            </p>
            <p class="text-lg md:text-xl opacity-0 transform">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 数据
const galleryItems = ref([
  {
    img_src: "https://source.unsplash.com/random/1200x800?childhood",
    title: "童年时光",
    description:
      "在家乡的小院里，每个周末都会和邻居家的小伙伴一起玩耍，那时的欢声笑语至今难忘。",
    date: "2000年 · 家乡",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?elementary-school",
    title: "小学时代",
    description:
      "第一次走进教室，认识了一群志同道合的朋友，开始了充满好奇的求知之旅。",
    date: "2006年 · 市区",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?teenager",
    title: "青春岁月",
    description: "初中时期的篮球场上，挥洒着我们的汗水，追逐着我们的梦想。",
    date: "2012年 · 省城",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?high-school",
    title: "高中时光",
    description: "备战高考的日子，图书馆里的点点灯光，见证了我们的努力与成长。",
    date: "2015年 · 重点中学",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?university",
    title: "大学生活",
    description:
      "在校园里探索未来的方向，参与各种社团活动，认识了来自全国各地的朋友。",
    date: "2018年 · 北京",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?internship",
    title: "实习经历",
    description: "第一次走进写字楼，开始职场生涯的探索，感受工作的挑战与乐趣。",
    date: "2020年 · 上海",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?startup",
    title: "创业尝试",
    description: "和几个志同道合的伙伴一起，在车库里开始了我们的创业梦想。",
    date: "2021年 · 深圳",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?travel-asia",
    title: "亚洲之旅",
    description: "背着包徒步东南亚，感受不同文化的魅力，遇见形形色色的人。",
    date: "2022年 · 东南亚",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?digital-nomad",
    title: "数字游民",
    description: "在巴厘岛的咖啡馆里远程工作，享受自由职业的lifestyle。",
    date: "2022年 · 巴厘岛",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?europe-adventure",
    title: "欧洲探险",
    description: "徒步阿尔卑斯山，在古老的城堡中感受历史的沧桑。",
    date: "2023年 · 欧洲",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?tech-conference",
    title: "技术会议",
    description: "在硅谷参加全球开发者大会，与世界各地的极客交流想法。",
    date: "2023年 · 旧金山",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?meditation",
    title: "冥想之旅",
    description: "在印度瑜伽圣地里沉淀心灵，寻找内心的平静。",
    date: "2023年 · 印度",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?arctic",
    title: "极光之旅",
    description: "在北极圈追逐极光，体验生命中最震撼的自然奇观。",
    date: "2023年 · 冰岛",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?volunteer",
    title: "志愿服务",
    description: "在非洲参与野生动物保护项目，为地球生态尽一份力。",
    date: "2024年 · 肯尼亚",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?remote-work",
    title: "远程办公",
    description: "在世界各地的咖啡馆和共享办公空间工作，享受数字游民的生活。",
    date: "2024年 · 全球",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?mountain",
    title: "登山挑战",
    description: "攀登珠穆朗玛峰大本营，挑战自己的极限。",
    date: "2024年 · 尼泊尔",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?sailing",
    title: "帆船之旅",
    description: "横渡太平洋，感受大海的壮阔与人类的渺小。",
    date: "2024年 · 太平洋",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?desert",
    title: "沙漠探险",
    description: "在撒哈拉沙漠露营，仰望璀璨的星空。",
    date: "2024年 · 摩洛哥",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?carnival",
    title: "狂欢节",
    description: "参加里约热内卢狂欢节，感受巴西人民的热情与活力。",
    date: "2024年 · 巴西",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?antarctic",
    title: "南极之旅",
    description: "探访世界尽头，与企鹅一起漫步在冰雪世界。",
    date: "2024年 · 南极",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?forest",
    title: "雨林探索",
    description: "在亚马逊雨林中探索，发现神秘的生态系统。",
    date: "2024年 · 亚马逊",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?city-life",
    title: "都市生活",
    description: "重返城市，开始新的工作和生活章节。",
    date: "2024年 · 纽约",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?farm",
    title: "田园生活",
    description: "在托斯卡纳的农场体验简单的乡村生活。",
    date: "2024年 · 意大利",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?temple",
    title: "寺院静修",
    description: "在日本古寺进行为期一月的禅修，寻找内心的平静。",
    date: "2024年 · 京都",
  },
  {
    img_src: "https://source.unsplash.com/random/1200x800?future",
    title: "未来展望",
    description: "站在人生的新起点，期待下一段精彩的旅程。",
    date: "2025年 · 未知",
  },
]);

// 颜色配置
const colorStops = ref([
  { progress: 0, bg: "#f59e0b", text: "#ffffff" }, // 橙色
  { progress: 0.3, bg: "#3b82f6", text: "#f59e0b" }, // 蓝色
  { progress: 0.6, bg: "#4b5563", text: "#e5e7eb" }, // 深灰
  { progress: 1, bg: "#1f2937", text: "#f9fafb" }, // 深蓝
]);

// 状态
const itemRefs = ref([]);
const progressHeight = ref(0);
const nodePositions = ref([]);
const activeIndex = ref(0);
const currentProgress = ref(0);
const currentBgColor = ref(colorStops.value[0].bg);
const currentTextColor = ref(colorStops.value[0].text);

// 动画配置
const animationSettings = {
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.15,
  offsets: {
    start: "top 80%",
    end: "bottom 20%",
  },
};

// 颜色插值计算
const interpolateColors = (progress) => {
  const stops = colorStops.value.sort((a, b) => a.progress - b.progress);
  let start = stops[0],
    end = stops[0];

  for (const stop of stops) {
    if (stop.progress <= progress) start = stop;
    if (stop.progress >= progress) {
      end = stop;
      break;
    }
  }

  const ratio = (progress - start.progress) / (end.progress - start.progress);
  return {
    bg: interpolateColor(start.bg, end.bg, ratio),
    text: interpolateColor(start.text, end.text, ratio),
  };
};

// 颜色插值工具函数
function interpolateColor(color1, color2, ratio) {
  const hexToRgb = (hex) =>
    hex.match(/[A-Za-z0-9]{2}/g).map((v) => parseInt(v, 16));

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const result = rgb1.map((v, i) => Math.round(v + (rgb2[i] - v) * ratio));

  return `rgb(${result.join(",")})`;
}

// 动画逻辑
function animateElements(elements, isEntering) {
  elements.forEach((element) => {
    const index = itemRefs.value.indexOf(element);
    if (index === -1) return;

    const targets = {
      image: element.querySelector("img"),
      title: element.querySelector("h2"),
      date: element.querySelector("p:nth-of-type(1)"),
      desc: element.querySelector("p:nth-of-type(2)"),
    };

    const tl = gsap.timeline({ defaults: animationSettings });

    if (isEntering) {
      tl.fromTo(
        targets.image,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.4 },
        0
      )
        .fromTo(targets.title, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, 0.2)
        .fromTo(targets.date, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, 0.4)
        .fromTo(targets.desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.6);
    } else {
      tl.to([targets.image, targets.title, targets.date, targets.desc], {
        opacity: 0,
        y: 20,
        duration: 0.6,
      });
    }
  });
}

// 初始化
onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);

    // 进度条计算
    const updateProgressBar = () => {
      progressHeight.value = window.innerHeight * 0.8;
      const step = progressHeight.value / (galleryItems.value.length - 1);
      nodePositions.value = galleryItems.value.map((_, i) => i * step);
    };

    updateProgressBar();
    window.addEventListener("resize", updateProgressBar);

    // 滚动监听
    ScrollTrigger.create({
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        currentProgress.value = progress * progressHeight.value;

        const colors = interpolateColors(progress);
        currentBgColor.value = colors.bg;
        currentTextColor.value = colors.text;

        activeIndex.value = Math.floor(progress * galleryItems.value.length);
      },
    });

    // 动画初始化
    ScrollTrigger.batch(itemRefs.value, {
      batchMax: 4,
      start: animationSettings.offsets.start,
      end: animationSettings.offsets.end,
      onEnter: (batch) => animateElements(batch, true),
      onLeave: (batch) => animateElements(batch, false),
      onEnterBack: (batch) => animateElements(batch, true),
      onLeaveBack: (batch) => animateElements(batch, false),
    });
  }
});
</script>

<style scoped>
.gallery-item {
  scroll-margin-top: 4rem;
  @apply transition-opacity duration-300;
}

.image-container {
  @apply relative transform transition-transform duration-500 hover:scale-[1.02];
}

.image-container img {
  @apply transition-transform duration-500 hover:scale-105;
}

.transform {
  backface-visibility: hidden;
  will-change: transform, opacity;
}

/* 优化进度条样式 */
circle {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* 响应式调整 */
@media (max-width: 768px) {
  .fixed.w-12 {
    right: 1rem;
    width: 2rem;
  }

  circle {
    r: 3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-item,
  .image-container,
  .transform {
    transition: none !important;
    animation: none !important;
  }
}
</style>

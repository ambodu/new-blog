import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs With My Logo',
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/base.css',
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});

import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  test: {
    include: ['tests/test_*.js'],
    browser: {
      provider: playwright({
        launchOptions: {
          executablePath: process.env.BROWSER_EXE || void 0,
          channel: 'chromium',
        },
        contextOptions: {
          locale: 'zh-TW',
          timezoneId: 'Asia/Taipei',
        },
      }),
      enabled: true,
      headless: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
});

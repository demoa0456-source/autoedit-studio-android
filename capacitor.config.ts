import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.autoeditstudio.app',
  appName: 'AutoEdit Studio',
  webDir: 'www',
  server: {
    url: 'https://autoedit-studio.higgsfield.app',
    cleartext: false
  },
  android: { allowMixedContent: false }
};
export default config;

import { TConfig } from './declarations'

export const CONFIG: TConfig = {
  parserOptions: {
    headless: false,
    devtools: true,
    args: [
      '--window-size=1600,900',
    ],
    defaultViewport: null,
    timeout: 0,
  },
}

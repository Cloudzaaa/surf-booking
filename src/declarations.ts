import { TTariff } from "./constants/declarations";

export type TConfig = {
  parserOptions: {
    headless: boolean,
    devtools: boolean,
    args: string[],
    defaultViewport: any,
    timeout: number,
  }
}

export type TBookingSetting = {
  url: string,
  date: {
    dayOfWeek: 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс' ,
    dayOfMonth: number,
    time: string,
  }
  person: number,
  tariff: TTariff
}

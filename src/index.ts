import * as puppeteer from 'puppeteer';

import { CONFIG } from './config'
import { TBookingSetting } from './declarations';
import { TARIFF } from "./constants/tariff";


(async () => {
    const bookingSetting: TBookingSetting = {
        url: 'https://volna.moscowflow.ru/booking',
        date: {
            dayOfWeek: 'Ср',
            dayOfMonth: 7,
            time: '20:00',
        },
        person: 2,
        tariff: TARIFF.BIG_WAVE,
    }
    const browser = await puppeteer.launch(CONFIG.parserOptions);
    const page = (await browser.pages())[0];
    await page.setDefaultNavigationTimeout(CONFIG.parserOptions.timeout);
    await page.goto(bookingSetting.url)

    //выбор волны
    await page.waitForSelector('.BookingOptions-tariff')
    await page.evaluate((bookingSetting) => {
        const tariffList = document.querySelectorAll('.BookingOptions-tariff .BookingOptions-item')
        const tariff: HTMLElement = tariffList[bookingSetting.tariff.order] as HTMLElement
        tariff.click()
    }, bookingSetting);


    //выбор количество персон
    await page.waitForSelector('.BookingDetails')
    await page.evaluate((bookingSetting) => {
        const personNumbers = document.querySelectorAll(`.BookingDetails button`)
        console.log(personNumbers)
        const personNumber: HTMLElement = personNumbers[bookingSetting.person - 1] as HTMLElement
        console.log(personNumber)
        personNumber.click()
    }, bookingSetting);

    // await browser.close();
})();

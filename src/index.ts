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
    const TARIFF_CLASS = '.BookingOptions-tariff'
    await page.waitForSelector(TARIFF_CLASS)
    await page.evaluate((bookingSetting) => {
        const tariffList = document.querySelectorAll(`${TARIFF_CLASS} .BookingOptions-item`)
        const tariff: HTMLElement = tariffList[bookingSetting.tariff.order] as HTMLElement
        tariff.click()
    }, bookingSetting);


    //выбор количество персон
    const BOOKING_DETAILS_CLASS = '.BookingDetails'
    await page.waitForSelector(BOOKING_DETAILS_CLASS)
    await page.evaluate((bookingSetting) => {
        const personNumbers = document.querySelectorAll(`${BOOKING_DETAILS_CLASS} button`)
        console.log(personNumbers)
        const personNumber: HTMLElement = personNumbers[bookingSetting.person - 1] as HTMLElement
        console.log(personNumber)
        personNumber.click()
    }, bookingSetting);

    //выбор даты и времени
    const TIME_TABLE_CLASS = '.wave_booking_timetable'
    await page.waitForSelector(TIME_TABLE_CLASS)
    await page.evaluate((bookingSetting) => {
        const tableBody: NodeListOf<Element> = document.querySelectorAll(`${TIME_TABLE_CLASS} tbody`)
        const timeCellIndex = [...tableBody].querySelectorAll('th')
        // findIndex(cell => cell.textContent === bookingSetting.date.time)
        console.log(timeCellIndex)
        // const personNumber: HTMLElement = personNumbers[bookingSetting.person - 1] as HTMLElement
        // personNumber.click()
    }, bookingSetting);

    // await browser.close();
})();

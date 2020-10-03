import { TTariffs } from "./declarations";

export const TARIFF: TTariffs = {
    FIRST_WAVE: {
        name: 'Первая волна',
        id: 'FIRST_WAVE',
        order: 0,
    },
    BIG_WAVE: {
        name: 'Большая волна',
        id: 'BIG_WAVE',
        order: 1,
    },
    WEEKEND: {
        name: 'Будни 10–18',
        id: 'WEEKEND',
        order: 2,
    },
    WEEKEND_AND_WEEKDAYS: {
        name: 'Выходные и будни 18–00',
        id: 'WEEKEND_AND_WEEKDAYS',
        order: 3,
    },
}
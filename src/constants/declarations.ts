export type TTariffType = 'FIRST_WAVE' | 'BIG_WAVE' | 'WEEKEND' | 'WEEKEND_AND_WEEKDAYS'
export type TTariffs = {
    [key in TTariffType]: TTariff
}

export type TTariff = {
    id: TTariffType
    name: string,
    order: number,
}


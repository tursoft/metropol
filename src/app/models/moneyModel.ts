export type MoneyColorType = 'pink' | 'darkblue' | 'lightblue' | 'red' | 'orange' | 'purple' | 'green'
export interface MoneyModel{
    value: number;
    color: MoneyColorType;
    count: number;
    text?: string;
}
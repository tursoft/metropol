export type DiceValueType = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceState = 'normal' | 'rolling' | 'disabled';

export interface DiceModel {
    value: DiceValueType;
}
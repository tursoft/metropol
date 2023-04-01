export type CardType = 'fine' | 'bonus' | 'transport' | 'other';
export type CardGroup = 'destiny' | 'bond';
 export interface CardModel {
    id: number;
    text: string;
    group: CardGroup;
    type: CardType;
    code?: string;
    fineAmount?: number;
    bonusAmount?: number;
}
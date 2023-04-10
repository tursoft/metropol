export type CardType = 'fine' | 'bonus' | 'transport' | 'other';
export type CardGroup = 'destiny' | 'bond';
export type CardSide = 'front' | 'back';

export interface CardModel {
    id: number;
    text: string;
    group: CardGroup;
    type: CardType;
    side: CardSide;
    code?: string;
    fineAmount?: number;
    bonusAmount?: number;
}
export type CardType = 'fine' | 'bonus' | 'move' | 'other';
export type CardGroup = 'destiny' | 'bond';
export type CardSide = 'front' | 'back';

export interface CardModel {
    id: number;
    text: string;
    group: CardGroup;
    type: CardType;
    side?: CardSide;
    money?: number;
    code?: string;
    tileCode?: string;
    tileCount?: number;
}
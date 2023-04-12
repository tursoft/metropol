import { CardModel } from "./cardModel";
import { DiceModel } from "./diceModel";
import { PlayerModel } from "./playerModel";
import { TileModel } from "./tileModel";

export type DialogType = 
        | 'land-buy-dialog'
        | 'corp-buy-dialog'
        | 'bond-dialog'
        | 'destiny-dialog'
        ;

export type BoardState = 
        | 'ready'
        | 'dice-rolling'
        | 'moving'
        | 'land-buy-dialog'
        | 'corp-buy-dialog'
        | 'bond-dialog'
        | 'destiny-dialog'
        | 'finished'
        ;

export interface BoardModel {
    state: BoardState;

    tiles: {
        all: TileModel[];
        bottom: TileModel[];
        left: TileModel[];
        top: TileModel[];
        right: TileModel[];
    }

    players: PlayerModel[];
    
    currentPlayer?: PlayerModel

    cards: {
        bondCards: CardModel[];
        destinyCards: CardModel[];
    };

    dices: DiceModel[];
}
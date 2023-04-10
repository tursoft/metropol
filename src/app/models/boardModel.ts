import { CardModel } from "./cardModel";
import { DiceModel } from "./diceModel";
import { MoneyModel } from "./moneyModel";
import { PlayerModel } from "./playerModel";
import { TileModel } from "./tileModel";

export interface BoardModel {
    monies: MoneyModel[];

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
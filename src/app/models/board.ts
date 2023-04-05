import { CardModel } from "./cardModel";
import { PlayerModel } from "./playerModel";
import { TileModel } from "./tileModel";

export interface BoardModel {
    tiles1: TileModel[];
    tiles2: TileModel[];
    tiles3: TileModel[];
    tiles4: TileModel[];
    players: PlayerModel[];

    bondCards: CardModel[];
    destinyCards: CardModel[];
}
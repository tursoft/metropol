import { TileModel } from "./tileModel";

export interface BoardModel {
    tiles1: TileModel[];
    tiles2: TileModel[];
    tiles3: TileModel[];
    tiles4: TileModel[];

    bondCards: BondCardModel[];
    destinyCards: DestinyCardModel[];
}
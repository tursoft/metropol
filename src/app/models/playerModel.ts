import { MoneyModel } from "./moneyModel";
import { TileModel } from "./tileModel";

export type ColorType = 'black' | 'red' | 'blue' | 'white' | 'green' | 'yellow';

export interface PlayerModel {
    id: number;
    name: string;
    initials: string;
    color: ColorType;
    currentTile: TileModel;
    money: MoneyModel[];
}

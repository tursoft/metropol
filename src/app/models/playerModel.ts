import { TileModel } from "./tileModel";

export type ColorType = 
            | 'orange'
            | 'darkTurquoise'
            | 'blue'
            | 'teal'
            | 'green'
            | 'darkKhaki'
            | 'magenta'
            ;

export interface PlayerModel {
    id: number;
    name: string;
    initials: string;
    color: ColorType;
    playing?: boolean;
    currentTile?: TileModel;
    money: number;
    lastMoneyChange?: number;
}

import { DeedModel } from "./deedModel";
import { PlayerModel } from "./playerModel";

export type TileColor = 
            | 'green'
            | 'teal'
            | 'brown'
            | 'red'
            | 'darkgreen'
            | 'darkblue'
            | 'blue'
            | 'purple'
            | 'black'
            | 'lightblue'
            ;
        
export type TileType = 
            | 'land'
            | 'corp'
            | 'bond'
            | 'destiny'
            | 'fine'
            | 'jail'
            | 'start'
            | 'free-area'
            ;

export interface TileModel {
    id: number;
    title: string;
    type: TileType;
    corner?: boolean;
    group?: string;
    color?: TileColor;
    price?: number;
    icon?: string;
    deed?: DeedModel; 

    ownerPlayer?: PlayerModel;
    players: PlayerModel[];
}
export type ColorType = 'black' | 'red' | 'blue' | 'white' | 'green' | 'yellow';

export interface PlayerModel {
    id: number;
    name: string;
    color: ColorType;
}

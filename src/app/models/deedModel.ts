export type DeedType = 'land' | 'corp';
export interface DeedModel{
    id: number;
    text: string;
    type: DeedType;
    price: number;
    homePrice: number;
    home1RendPrice: number;
    home2RendPrice: number;
    home3RendPrice: number;
    home4RendPrice: number;
    plazaRendPrice: number;
    depositPrice: number;
}
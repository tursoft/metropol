import { Subject } from "rxjs";

export interface DialogBoxModel {
    message: string;
    buttons: ButtonModel[];
    onClick: Subject<ButtonModel>;
}

export interface ButtonModel {
    text: string;
    code: string;
}
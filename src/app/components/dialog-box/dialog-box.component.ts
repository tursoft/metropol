import { Component, Input } from '@angular/core';
import { ButtonModel, DialogBoxModel } from 'src/app/models/dialogBoxModel';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  @Input() data!: DialogBoxModel;

  onClick(button: ButtonModel) {
    console.log('onclick:', button);
    this.data.onClick.next(button);
    this.data.onClick.complete();
  }
}

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CardModel, CardSide } from 'src/app/models/cardModel';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends BaseComponent implements OnInit {


  get data() { return this.getProperty<CardModel>('data', { group: 'bond', id: -1, side: 'front', type: 'bonus', text: '' }); };
  @Input() set data(value: CardModel) { this.setProperty<CardModel>('data', value); };

  @HostBinding('class.app-card') app_card: boolean = true;

  @HostBinding('class.destiny') app_destiny: boolean = true;
  @HostBinding('class.bond') app_bond: boolean = false;

  @HostBinding('class.front') app_front: boolean = true;
  @HostBinding('class.back') app_back: boolean = false;

  constructor() {
    super()
  }
  
  ngOnInit(): void {
    this.updateView();
  }

  override onPropertyChanged(name: string, value: any): void {
    this.updateView();
  }

  updateView() {
    this.app_destiny = this.data.group == 'destiny';
    this.app_bond = this.data.group == 'bond';

    this.app_front = this.data.side == 'front';
    this.app_back = this.data.side == 'back';
  }

  getCardLogo() {
    return '/assets/icons/' + this.data.group + '.png';
  }

  getCardTitle() {
    return this.data.group == 'bond' ? 'Hazine Bonosu' : 'Kader Çarkı';
  }
}

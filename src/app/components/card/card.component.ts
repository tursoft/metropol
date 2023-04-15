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
  @Input() set data(value: CardModel) { 
    this.setProperty<CardModel>('data', value, true); 
  };

  @HostBinding('class.app-card') app_card: boolean = true;

  @HostBinding('class.destiny') get destiny() { return this.data.group == 'destiny'; }
  @HostBinding('class.bond') get bond() { return this.data.group == 'bond'; }

  @HostBinding('class.front') get front() { return this.data.side == 'front'; }
  @HostBinding('class.back') get back() { return this.data.side == 'back'; }

  constructor() {
    super()
  }
  
  ngOnInit(): void {
  }

  override onPropertyChanged(name: string, value: any): void {
    console.log('onPropertyChanged:', { name, value } );
  }

  getCardLogo() {
    return 'assets/icons/' + this.data.group + '.png';
  }

  getCardTitle() {
    return this.data.group == 'bond' ? 'Hazine Bonosu' : 'Kader Çarkı';
  }
}

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: CardModel;

  @HostBinding('class.app-card') app_card: boolean = true;
  @HostBinding('class.destiny') app_destiny: boolean = true;
  @HostBinding('class.bond') app_bond: boolean = true;

  ngOnInit(): void {
    this.app_destiny = this.data.group == 'destiny';
    this.app_bond = this.data.group == 'bond';
  }

  getCardLogo() {
    return '/assets/icons/' + this.data.group + '.png';
  }

  getCardTitle() {
    return this.data.group == 'bond' ? 'Hazine Bonosu' : 'Kader Çarkı';
  }
}

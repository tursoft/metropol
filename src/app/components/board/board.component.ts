import { Component } from '@angular/core';
import { BoardModel } from 'src/app/models/boardModel';
import { DiceModel, DiceValueType } from 'src/app/models/diceModel';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  data: BoardModel = {
    tiles: { 
      bottom: [
        { id: 1, title: 'Start', type: 'start' },
        { id: 2, title: 'Erzurum', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 6000 },
        { id: 3, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png' },
        { id: 4, title: 'Ağrı', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 6000 },
        { id: 5, title: 'Kars', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 10000 },
        { id: 6, title: 'Stopaj Vergisi', type: 'fine', icon: 'tax.png' },
        { id: 7, title: 'Atatürk Barajı', type: 'corp', price: 20000, icon: 'dam.png' },
        { id: 8, title: 'Diyarbakır', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000 },
        { id: 9, title: 'Şanlıurfa', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000 },
        { id: 10, title: 'Malatya', type: 'land', 'color': 'brown', 'group': 'grup2', price: 12000 },
        { id: 11, title: 'Türk Telekom', type: 'corp', price: 20000, icon: 'turktelekom.png' },
        { id: 12, title: 'Gaziantep', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000 },
        { id: 13, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png' },
      ],

      left: [
        { id: 14, title: 'Hatay', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000 },
        { id: 15, title: 'Adana', type: 'land', 'color': 'red', 'group': 'grup3', price: 16000 },
        { id: 16, title: 'Mersin Limanı', type: 'corp', price: 20000 },
        { id: 17, title: 'Antalya', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000 },
        { id: 18, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png' },
        { id: 19, title: 'Manisa', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000 },
        { id: 20, title: 'Muğla', type: 'land', 'color': 'green', 'group': 'grup4', price: 20000 },
        { id: 21, title: 'Serbest Bölge', type: 'free-area' },
      ],

      top: [
        { id: 22, title: 'Zonguldak', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000 },
        { id: 23, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png' },
        { id: 24, title: 'Sinop', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000 },
        { id: 25, title: 'Trabzon', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 24000 },
        { id: 26, title: 'Samsun Limanı', type: 'corp', price: 20000 },
        { id: 27, title: 'Çanakkale', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000 },
        { id: 28, title: 'Kütahya', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000 },
        { id: 29, title: 'Türk Hava Yolları', type: 'corp', price: 20000 },
        { id: 30, title: 'İzmir', type: 'land', 'color': 'purple', 'group': 'grup6', price: 28000 },
        { id: 31, title: 'Konya', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000 },
        { id: 32, title: 'Eskişehir', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000 },
        { id: 33, title: 'Hapishane', type: 'jail', icon: 'jail.png' },
      ],
      
      right: [
        { id: 34, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png' },
        { id: 35, title: 'Ankara', type: 'land', 'color': 'black', 'group': 'grup7', price: 32000 },
        { id: 36, title: 'TCDD', type: 'corp', price: 20000 },
        { id: 37, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png' },
        { id: 38, title: 'Kocaeli', type: 'land', 'color': 'blue', 'group': 'grup8', price: 35000 },
        { id: 39, title: 'Peşin Vergini Öde', type: 'fine', icon: 'tax.png' },
        { id: 40, title: 'İstanbul', type: 'land', 'color': 'blue', 'group': 'grup8', price: 40000 },
      ]
    },

    cards: {
      bondCards: [],
      destinyCards: [],
    },

    monies: [
      { color: 'darkblue', value: 10000, count: 10 },
      { color: 'purple', value: 2000, count: 50 },
      { color: 'lightblue', value: 5000, count: 40 },
      { color: 'green', value: 50000, count: 20 },
    ],
  
    players: [
      {
        id: 1,
        color: 'black',
        name: 'Mehmet Çınar',
        money: [
          { color: 'darkblue', value: 10000, count: 3 },
          { color: 'purple', value: 2000, count: 5 },
          { color: 'lightblue', value: 5000, count: 3 },
          { color: 'green', value: 50000, count: 2 },
        ],
        currentTile: {
          id: 0,
          title: 'Start',
          type: 'start',
          color: 'black',
        },
      },

      {
        id: 2,
        color: 'red',
        name: 'Muhammet Turşak',
        money: [
          { color: 'darkblue', value: 10000, count: 1 },
          { color: 'purple', value: 2000, count: 2 },
          { color: 'lightblue', value: 5000, count: 3 },
          { color: 'green', value: 50000, count: 1 },
        ],
        currentTile: {
          id: 0,
          title: 'Start',
          type: 'start',
          color: 'black',
        },
      }
    ],

    dices: [
      { value: 1 },
      { value: 5 },
    ]
  }


  async diceClicked() {
    for(var i =0; i<20; i++) {
      for(var dice of this.data.dices) {
        dice.value = await this.getRandomDiceValue();
      }
    }
  }

  async getRandomDiceValue() {
    await this.sleep(50);
    const value = (Math.round((Math.random() * 5)) + 1) as DiceValueType;
    console.log('value:', value);
    return value;
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

import { Component } from '@angular/core';
import { BoardModel } from 'src/app/models/board';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  data: BoardModel = {
    tiles1: [],
    tiles2: [],
    tiles3: [],
    tiles4: [],

    bondCards: [],
  
    destinyCards: [],
  
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
          text: 'Start',
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
          text: 'Start',
          type: 'start',
          color: 'black',
        },
      }
    ]
  }
}

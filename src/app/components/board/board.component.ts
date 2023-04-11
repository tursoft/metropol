import { Component, HostBinding } from '@angular/core';
import { BoardModel } from 'src/app/models/boardModel';
import { CardModel } from 'src/app/models/cardModel';
import { DiceValueType } from 'src/app/models/diceModel';
import { PlayerModel } from 'src/app/models/playerModel';
import { TileModel } from 'src/app/models/tileModel';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @HostBinding('class.app-board') app_board: boolean = true;

  destinyCard: CardModel = { group: 'destiny', id: 0, text: '', type: 'other', side: 'front' };
  bondCard: CardModel = { group: 'bond', id: 0, text: '', type: 'other', side: 'front' };

  data: BoardModel = {
    tiles: { 
      all: [],
      bottom: [
        { id: 1, title: 'Start', type: 'start', icon: 'start.png', players: [] },
        { id: 2, title: 'Erzurum', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 6000, players: []  },
        { id: 3, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 4, title: 'Ağrı', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 6000, players: []  },
        { id: 5, title: 'Kars', type: 'land', 'color': 'lightgreen', 'group': 'grup1', price: 10000, players: []  },
        { id: 6, title: 'Stopaj Vergisi', type: 'fine', icon: 'tax.png', players: []  },
        { id: 7, title: 'Atatürk Barajı', type: 'corp', price: 20000, icon: 'dam.png', players: []  },
        { id: 8, title: 'Diyarbakır', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 9, title: 'Şanlıurfa', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 10, title: 'Malatya', type: 'land', 'color': 'brown', 'group': 'grup2', price: 12000, players: []  },
        { id: 11, title: 'Türk Telekom', type: 'corp', price: 20000, icon: 'turktelekom.png', players: []  },
        { id: 12, title: 'Gaziantep', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: [] },
        { id: 13, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
      ],

      left: [
        { id: 14, title: 'Hatay', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: []  },
        { id: 15, title: 'Adana', type: 'land', 'color': 'red', 'group': 'grup3', price: 16000, players: []  },
        { id: 16, title: 'Mersin Limanı', type: 'corp', price: 20000, icon: 'harbour.png', players: []  },
        { id: 17, title: 'Antalya', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 18, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 19, title: 'Manisa', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 20, title: 'Muğla', type: 'land', 'color': 'green', 'group': 'grup4', price: 20000, players: []  },
        { id: 21, title: 'Serbest Bölge', type: 'free-area', icon: 'passport.png', players: []  },
      ],

      top: [
        { id: 22, title: 'Zonguldak', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000, players: []  },
        { id: 23, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
        { id: 24, title: 'Sinop', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000, players: []  },
        { id: 25, title: 'Trabzon', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 24000, players: []  },
        { id: 26, title: 'Samsun Limanı', type: 'corp', price: 20000, icon: 'harbour.png', players: []  },
        { id: 27, title: 'Çanakkale', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000, players: []  },
        { id: 28, title: 'Kütahya', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000, players: []  },
        { id: 29, title: 'Türk Hava Yolları', type: 'corp', price: 20000, icon: 'plane.png', players: []  },
        { id: 30, title: 'İzmir', type: 'land', 'color': 'purple', 'group': 'grup6', price: 28000, players: []  },
        { id: 31, title: 'Konya', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000, players: []  },
        { id: 32, title: 'Eskişehir', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000, players: []  },
        { id: 33, title: 'Hapishane', type: 'jail', icon: 'jail.png', players: []  },
      ],
      
      right: [
        { id: 34, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 35, title: 'Ankara', type: 'land', 'color': 'black', 'group': 'grup7', price: 32000, players: []  },
        { id: 36, title: 'TCDD', type: 'corp', price: 20000, icon: 'tcdd.png', players: []  },
        { id: 37, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
        { id: 38, title: 'Kocaeli', type: 'land', 'color': 'blue', 'group': 'grup8', price: 35000, players: []  },
        { id: 39, title: 'Peşin Vergini Öde', type: 'fine', icon: 'tax.png', players: []  },
        { id: 40, title: 'İstanbul', type: 'land', 'color': 'blue', 'group': 'grup8', price: 40000, players: []  },
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
        initials: 'MÇT',
        money: [
          { color: 'darkblue', value: 10000, count: 3 },
          { color: 'purple', value: 2000, count: 5 },
          { color: 'lightblue', value: 5000, count: 3 },
          { color: 'green', value: 50000, count: 2 },
        ]
      },

      {
        id: 2,
        color: 'red',
        name: 'Muhammet Turşak',
        initials: 'MT',
        money: [
          { color: 'darkblue', value: 10000, count: 1 },
          { color: 'purple', value: 2000, count: 2 },
          { color: 'lightblue', value: 5000, count: 3 },
          { color: 'green', value: 50000, count: 1 },
        ]
      },

      {
        id: 3,
        color: 'green',
        name: 'Yağız Burak',
        initials: 'YB',
        money: [
          { color: 'darkblue', value: 10000, count: 1 },
          { color: 'purple', value: 2000, count: 2 },
          { color: 'lightblue', value: 5000, count: 3 },
          { color: 'green', value: 50000, count: 1 },
        ]
      }
    ],

    currentPlayer: undefined,

    dices: [
      { value: 1 },
      { value: 5 },
    ]
  }

  message1: string = 'Click dices to roll';
  message2: string = '';
  constructor() {
    const { tiles } = this.data;
    // init
    tiles.all=tiles.bottom.concat(tiles.left).concat(tiles.top).concat(tiles.right);

    this.data.currentPlayer = this.data.players[0];
    this.data.currentPlayer.playing=true;

    const tileStart = tiles.all.find(p => p.id == 1);
    for(const player of this.data.players) {
      player.currentTile =tileStart;
    }

    // update
    this.updateData();
  }

  cardClicked(comp: CardComponent) {
    const card = comp.data;
    card.side = (card.side == 'back' ? 'front' : 'back');
    comp.updateView();
  }

  async diceClicked() {
    this.message1 = 'dices are rolling, please wait...'
    for(var i =0; i<20; i++) {
      for(var dice of this.data.dices) {
        this.message2 = this.getDiceTotals().toString();
      }
    }

    // roll dice
    this.message1 = 'Dice total is ' + tileCount;

    await this.movePlayer(tileCount);
    this.message1 = 'Click dices to roll again...';
  }

  async movePlayer(tileCount: number) {
    const { currentPlayer: player } = this.data;
    if (!player) 
      return;

    // move player
    const currentTile = player?.currentTile!;
    let nextTile = currentTile;
    for(let i=0;i<tileCount;i++) {
      nextTile = this.getNextTile(nextTile);
      this.message2 = nextTile.title;
      this.movePlayerToTile(player, nextTile);
      await this.sleep(500);
    }
    player.playing = false;


    // switch to next player
    const playerIndex = this.data.players.indexOf(player);
    const nextPlayerIndex = (playerIndex + 1) % this.data.players.length;
    const nextPlayer = this.data.players[nextPlayerIndex];
    this.data.currentPlayer = nextPlayer;
    nextPlayer.playing = true;
  }

  movePlayerToTile(player: PlayerModel, nextTile: TileModel) {
    let currentTile = player.currentTile!;
    currentTile.players.splice(currentTile.players.indexOf(player),1);

    player.currentTile = nextTile;
    nextTile.players.push(player);
  }

  getNextTile(tile: TileModel) {
    const { tiles } = this.data;
    let tileIndex = tiles.all.indexOf(tile);
    tileIndex = (tileIndex + 1) % this.data.tiles.all.length;
    const nextTile = tiles.all[tileIndex];
    return nextTile;
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


  getTilePlayers(tile: TileModel) {
    return this.data.players.filter(p => p.currentTile?.id == tile.id);
  }

  updateData() {
    for(const tile of this.data.tiles.all) {
      tile.players = this.getTilePlayers(tile);
    }
  }
}

import { Component, HostBinding } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { BoardModel, DialogType } from 'src/app/models/boardModel';
import { CardModel } from 'src/app/models/cardModel';
import { ButtonModel, DialogBoxModel } from 'src/app/models/dialogBoxModel';
import { DiceState, DiceValueType } from 'src/app/models/diceModel';
import { PlayerModel } from 'src/app/models/playerModel';
import { TileModel, TileType } from 'src/app/models/tileModel';
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
    state : 'ready',
  
    tiles: { 
      all: [],
      bottom: [
        { id: 1, title: 'Start', type: 'start', icon: 'start.png', players: [], corner: true, price: 20000 },
        { id: 2, title: 'Erzurum', type: 'land', 'color': 'teal', 'group': 'grup1', price: 6000, players: []  },
        { id: 3, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 4, title: 'Ağrı', type: 'land', 'color': 'teal', 'group': 'grup1', price: 6000, players: []  },
        { id: 5, title: 'Kars', type: 'land', 'color': 'teal', 'group': 'grup1', price: 10000, players: []  },
        { id: 6, title: 'Stopaj Vergisi', type: 'fine', icon: 'tax.png', players: [], price: 20000 },
        { id: 7, title: 'Atatürk Barajı', type: 'corp', price: 20000, icon: 'dam.png', players: []  },
        { id: 8, title: 'Diyarbakır', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 9, title: 'Şanlıurfa', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 10, title: 'Malatya', type: 'land', 'color': 'brown', 'group': 'grup2', price: 12000, players: []  },
        { id: 11, title: 'Türk Telekom', type: 'corp', price: 20000, icon: 'turktelekom.png', players: []  },
        { id: 12, title: 'Gaziantep', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: [] },
        { id: 13, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: [], corner: true  },
      ],

      left: [
        { id: 14, title: 'Hatay', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: []  },
        { id: 15, title: 'Adana', type: 'land', 'color': 'red', 'group': 'grup3', price: 16000, players: []  },
        { id: 16, title: 'Mersin Limanı', type: 'corp', price: 20000, icon: 'harbour.png', players: []  },
        { id: 17, title: 'Antalya', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 18, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 19, title: 'Manisa', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 20, title: 'Muğla', type: 'land', 'color': 'green', 'group': 'grup4', price: 20000, players: []  },
        { id: 21, title: 'Serbest Bölge', type: 'free-area', icon: 'passport.png', players: [], corner: true  },
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
        { id: 33, title: 'Hapishane', type: 'jail', icon: 'jail.png', players: [], corner: true },
      ],
      
      right: [
        { id: 34, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 35, title: 'Ankara', type: 'land', 'color': 'black', 'group': 'grup7', price: 32000, players: []  },
        { id: 36, title: 'TCDD', type: 'corp', price: 20000, icon: 'tcdd.png', players: []  },
        { id: 37, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
        { id: 38, title: 'Kocaeli', type: 'land', 'color': 'blue', 'group': 'grup8', price: 35000, players: []  },
        { id: 39, title: 'Peşin Vergini Öde', type: 'fine', icon: 'tax.png', players: [], price: 10000 },
        { id: 40, title: 'İstanbul', type: 'land', 'color': 'blue', 'group': 'grup8', price: 40000, players: []  },
      ]
    },

    cards: {
      bondCards: [],
      destinyCards: [],
    },
  
    players: [
      {
        id: 1,
        color: 'orange',
        name: 'Mehmet Çınar',
        initials: 'MÇ',
        money: 250000
      },

      {
        id: 2,
        color: 'darkTurquoise',
        name: 'Muhammet Turşak',
        initials: 'MT',
        money: 250000
      },

      {
        id: 3,
        color: 'green',
        name: 'Yağız Burak',
        initials: 'YB',
        money: 250000
      },

      {
        id: 4,
        color: 'magenta',
        name: 'Özlem Turşak',
        initials: 'ÖT',
        money: 250000
      },

      {
        id: 5,
        color: 'darkKhaki',
        name: 'Bekir Alp',
        initials: 'BA',
        money: 250000
      }
    ],

    currentPlayer: undefined,

    dices: [
      { value: 1 },
      { value: 5 },
    ]
  }

  dialogData?: DialogBoxModel;

  get diceState(): DiceState {
    switch(this.data.state) {
      case 'ready': return 'ready';
      case 'dice-rolling': return 'rolling';
      default: return 'disabled';
    }
  }

  message1: string = 'Click dices to roll';
  message2: string = '';

  lastTile?: TileModel;

  constructor() {
    this.initData();
  }

  initData() {
    const { tiles } = this.data;

    // init
    tiles.all=tiles.bottom.concat(tiles.left).concat(tiles.top).concat(tiles.right);

    // move all players to start
    const tileStart = this.getTileByType('start');
    for(const player of this.data.players) {
      this.movePlayerToTile(player, tileStart, false, true);
    }

    // set initial player
    this.data.currentPlayer = this.data.players[0];
    this.data.currentPlayer.playing=true;
    this.lastTile = this.data.currentPlayer.currentTile;
  }

  getTileByType(type: TileType) {
    return this.data.tiles.all.find(p => p.type == type) as TileModel;
  }

  getDiceTotals() {
    return this.data.dices.reduce((t, d) => { return t + d.value; }, 0);
  }

  cardClicked(comp: CardComponent) {
    const card = comp.data;
    card.side = (card.side == 'back' ? 'front' : 'back');
    comp.updateView();
  }

  async diceClicked() {

    if (this.diceState != 'ready')
      return;

    // randomly set dice value for all dices on board (try 20 times)
    this.data.state = 'dice-rolling';
    this.message1 = 'Dices are rolling, please wait...'
    let sleepMs = 2.88;
    for(var i =0; i<20; i++) {
      sleepMs = sleepMs * 1.25;
      for(var dice of this.data.dices) {
        dice.value = await this.getRandomDiceValue(sleepMs);
        this.message2 = 'Dice Total: ' + this.getDiceTotals().toString();
      }
    }

    // roll dice
    const tileCount = this.getDiceTotals();
    this.message1 = 'Dice total is ' + tileCount;

    this.data.state = 'moving';
    await this.movePlayer(tileCount);
    this.data.state = 'ready';
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
      const isFinal = (i == (tileCount-1));
      await this.movePlayerToTile(player, nextTile, isFinal, false);
      await this.sleep(300);
    }

    // player stopped
    if (nextTile.type == 'free-area') {
      const tileStart = this.getTileByType('start');
      await this.movePlayerToTile(player, tileStart, true, false);
    }

    // switch to next player
    player.playing = false;
    const playerIndex = this.data.players.indexOf(player);
    const nextPlayerIndex = (playerIndex + 1) % this.data.players.length;
    const nextPlayer = this.data.players[nextPlayerIndex];
    this.data.currentPlayer = nextPlayer;
    nextPlayer.playing = true;

    this.lastTile = nextPlayer.currentTile;
  }

  async movePlayerToTile(player: PlayerModel, tile: TileModel, isFinal: boolean, isInitial: boolean) {
    let currentTile = player.currentTile;
    if (currentTile) {
      currentTile.players.splice(currentTile.players.indexOf(player),1);
    }

    player.currentTile = tile;
    tile.players.push(player);

    // handle start pass
    if (!isInitial) {
      this.lastTile = tile;
      if(tile.type == 'start') {
        const bonus = (tile.price ?? 0);
        this.changePlayerMoney(player, bonus);
        this.message1 = 'You get ' + bonus + ' TL since you passed START';
      }
    }

    // handle rules
    if (isFinal) {
      switch(tile.type) {
        case 'fine':
          const fine = (tile.price ?? 0);
          this.changePlayerMoney(player, -1 * fine);
          this.message1 = 'You paid ' + fine + ' TL FINE!';
          break;
        
        case 'bond': 
          this.message2 = 'Pick a BOND CARD!';
          break;

        case 'destiny':
          this.message2 = 'Pick a DESTINY CARD!';
          break;
        
        case 'corp':
        case 'land': {
          // pay to owner
          if (tile.ownerPlayer) {
            const price = tile.price ?? 0;
            this.message2 = 'Paid '+ price +' TL to owner ' + tile.ownerPlayer.name;
            this.changePlayerMoney(player, -1 * price);
            this.changePlayerMoney(tile.ownerPlayer, price);

          } else {
          
            // ask to buy
            let dialogType: DialogType = 'land-buy-dialog';
            let message = 'Do you buy <br/><strong>' + tile.title +'</strong>?';
            if (tile.type == 'corp') {
              dialogType = 'corp-buy-dialog';
            }

            const respone = await this.showDialog({
                message,
                buttons: [
                  { code: 'y', text: 'Yes' },
                  { code: 'n', text: 'No' }
                ],
                onClick: new Subject<ButtonModel>()
            }, dialogType);

            if (respone.code == 'y') {
              this.changePlayerMoney(player, -1 * (tile.price ?? 0));
              tile.ownerPlayer = player;
            }
          }

          break;
        }
        
        case 'jail': 
          this.message1 = 'You are in jail!';
          break;
      }

      this.data.state = 'ready';
    }
  }

  changePlayerMoney(player: PlayerModel, change: number) {
    player.money += change;
    player.lastMoneyChange = change;
  }

  getNextTile(tile: TileModel) {
    const { tiles } = this.data;
    let tileIndex = tiles.all.indexOf(tile);
    tileIndex = (tileIndex + 1) % this.data.tiles.all.length;
    const nextTile = tiles.all[tileIndex];
    return nextTile;
  }

  async getRandomDiceValue(sleepMs: number) {
    await this.sleep(sleepMs);
    const value = (Math.round((Math.random() * 5)) + 1) as DiceValueType;
    return value;
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  getTilePlayers(tile: TileModel) {
    return this.data.players.filter(p => p.currentTile?.id == tile.id);
  }

  async showDialog(dialogData: DialogBoxModel, dialogType: DialogType) {
    this.dialogData = dialogData;
    this.data.state = dialogType;

    const button = await lastValueFrom(dialogData.onClick.asObservable());
    console.log('showdialog.button:', button);
    this.dialogData = undefined;
    return button;
  }
}

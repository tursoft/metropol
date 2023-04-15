import { Component, HostBinding } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { BoardModel, DialogType } from 'src/app/models/boardModel';
import { CardModel, CardType } from 'src/app/models/cardModel';
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
        { id: 1, code: 'START', title: 'Start', type: 'start', icon: 'start.png', players: [], corner: true, price: 20000 },
        { id: 2, code: 'ERZURUM', title: 'Erzurum', type: 'land', 'color': 'teal', 'group': 'grup1', price: 6000, players: []  },
        { id: 3, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 4, code: 'AĞRI', title: 'Ağrı', type: 'land', 'color': 'teal', 'group': 'grup1', price: 6000, players: []  },
        { id: 5, code: 'KARS', title: 'Kars', type: 'land', 'color': 'teal', 'group': 'grup1', price: 10000, players: []  },
        { id: 6, title: 'Stopaj Vergisi', type: 'fine', icon: 'tax.png', players: [], price: 20000 },
        { id: 7, code: 'ATATÜRK BARAJI', title: 'Atatürk Barajı', type: 'corp', price: 20000, icon: 'dam.png', players: []  },
        { id: 8, code: 'DİYARBAKIR', title: 'Diyarbakır', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 9, code: 'ŞANLIURFA', title: 'Şanlıurfa', type: 'land', 'color': 'brown', 'group': 'grup2', price: 10000, players: []  },
        { id: 10, code: 'MALATYA', title: 'Malatya', type: 'land', 'color': 'brown', 'group': 'grup2', price: 12000, players: []  },
        { id: 11, code: 'TÜRK TELEKOM', title: 'Türk Telekom', type: 'corp', price: 20000, icon: 'turktelekom.png', players: []  },
        { id: 12, code: 'GAZİANTEP', title: 'Gaziantep', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: [] },
        { id: 13, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: [], corner: true  },
      ],

      left: [
        { id: 14, code: 'HATAY', title: 'Hatay', type: 'land', 'color': 'red', 'group': 'grup3', price: 14000, players: []  },
        { id: 15, code: 'ADANA', title: 'Adana', type: 'land', 'color': 'red', 'group': 'grup3', price: 16000, players: []  },
        { id: 16, code: 'MERSİN LİMANI', title: 'Mersin Limanı', type: 'corp', price: 20000, icon: 'harbour.png', players: []  },
        { id: 17, code: 'ANTALYA', title: 'Antalya', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 18, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 19, code: 'MANİSA', title: 'Manisa', type: 'land', 'color': 'green', 'group': 'grup4', price: 18000, players: []  },
        { id: 20, code: 'MUĞLA', title: 'Muğla', type: 'land', 'color': 'green', 'group': 'grup4', price: 20000, players: []  },
        { id: 21, code: 'SERBEST BÖLGE', title: 'Serbest Bölge', type: 'free-area', icon: 'passport.png', players: [], corner: true  },
      ],

      top: [
        { id: 22, code: 'ZONGULDAK', title: 'Zonguldak', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000, players: []  },
        { id: 23, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
        { id: 24, code: 'SİNOP', title: 'Sinop', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 22000, players: []  },
        { id: 25, code: 'TRABZON', title: 'Trabzon', type: 'land', 'color': 'darkblue', 'group': 'grup5', price: 24000, players: []  },
        { id: 26, code: 'SAMSUN LİMANI', title: 'Samsun Limanı', type: 'corp', price: 20000, icon: 'harbour.png', players: []  },
        { id: 27, code: 'ÇANAKKALE', title: 'Çanakkale', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000, players: []  },
        { id: 28, code: 'KÜTAHYA', title: 'Kütahya', type: 'land', 'color': 'purple', 'group': 'grup6', price: 26000, players: []  },
        { id: 29, code: 'TÜRK HAVA YOLLARI', title: 'Türk Hava Yolları', type: 'corp', price: 20000, icon: 'plane.png', players: []  },
        { id: 30, code: 'İZMİR', title: 'İzmir', type: 'land', 'color': 'purple', 'group': 'grup6', price: 28000, players: []  },
        { id: 31, code: 'KONYA', title: 'Konya', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000, players: []  },
        { id: 32, code: 'ESKİŞEHİR', title: 'Eskişehir', type: 'land', 'color': 'black', 'group': 'grup7', price: 30000, players: []  },
        { id: 33, code: 'HAPİSHANE', title: 'Hapishane', type: 'jail', icon: 'jail.png', players: [], corner: true },
      ],
      
      right: [
        { id: 34, title: 'Hazine Bonosu', type: 'bond', icon: 'bond.png', players: []  },
        { id: 35, code: 'ANKARA', title: 'Ankara', type: 'land', 'color': 'black', 'group': 'grup7', price: 32000, players: []  },
        { id: 36, code: 'TCDD', title: 'TCDD', type: 'corp', price: 20000, icon: 'tcdd.png', players: []  },
        { id: 37, title: 'Kader Çarkı', type: 'destiny', icon: 'destiny.png', players: []  },
        { id: 38, code: 'KOCAELİ', title: 'Kocaeli', type: 'land', 'color': 'blue', 'group': 'grup8', price: 35000, players: []  },
        { id: 39, title: 'Peşin Vergini Öde', type: 'fine', icon: 'tax.png', players: [], price: 10000 },
        { id: 40, code: 'İSTANBUL', title: 'İstanbul', type: 'land', 'color': 'blue', 'group': 'grup8', price: 40000, players: []  },
      ]
    },
  
    players: [
      {
        id: 1,
        color: 'orange',
        name: 'Player 1',
        initials: 'P1',
        money: 100000
      },

      {
        id: 2,
        color: 'darkTurquoise',
        name: 'Player 2',
        initials: 'P2',
        money: 100000
      },

      {
        id: 3,
        color: 'green',
        name: 'Player 3',
        initials: 'P3',
        money: 100000
      },

      {
        id: 4,
        color: 'magenta',
        name: 'Player 4',
        initials: 'P4',
        money: 100000
      },

      {
        id: 5,
        color: 'darkKhaki',
        name: 'Player 5',
        initials: 'P5',
        money: 100000
      }
    ],

    currentPlayer: undefined,

    dices: [
      { value: 1 },
      { value: 5 },
    ],

    cards: {
      bondCards: [
        { id: 1, group: 'bond', type: 'fine', money: 20000, text: 'Alkollü araç kullandın, 20.000 TL öde.' },
        { id: 2, group: 'bond', type: 'fine', money: 20000, text: 'Tebrikler, evlilik yıl dönümünüz. Eşine bi araba satın al. 20.000 TL öde!' },
        { id: 3, group: 'bond', type: 'fine', money: 0, code: 'TRASH_TAX', text: 'Çöp vergisini öde. Her ev için 3.000 TL, her plaza için 12.000 TL'},
        { id: 4, group: 'bond', type: 'move', tileCode: 'MERSİN LİMANI', text: 'Mersin limanında gezintiye çık! Start noktasından geçersen 20.000 TL al.'},
        { id: 5, group: 'bond', type: 'move', tileCode: 'TRABZON', text: 'Trabzona ilerle. Start noktasından geçersen 20.000 TL al.'},
        { id: 6, group: 'bond', type: 'bonus', money: 5000, text: 'Maaşına zam yapıldı. 5.000 TL al.'},
        { id: 7, group: 'bond', type: 'bonus', money: 15000, text: 'Yılbaşı geldi. Yeni yıl hediyen 15.000 TL.'},
        { id: 8, group: 'bond', type: 'bonus', money: 15000, text: 'Teşvik kredin onaylandı. 15.000 TL al.'},
        { id: 9, group: 'bond', type: 'fine', money: 1500, text: 'Kırmızı ışıkta geçtin. 1.500 TL öde.'},
        { id: 10, group: 'bond', type: 'fine', money: 15000, text: 'Sağlık sigortası primini öde. 15.000 TL'},
        { id: 11, group: 'bond', type: 'fine', money: 0, code: 'HOUSE-TAX', text: 'Deprem vergisini öde. Her ev için 2.500 TL, her plaza için 10.000 TL'},
        { id: 12, group: 'bond', type: 'move', money: 0, tileCode: 'HAPİSHANE', text: 'Bayrampaşa ceza evine git. Start noktasından geçersen 20.000 TL alma!'},
        { id: 13, group: 'bond', type: 'move', money: 0, tileCode: 'GAZİANTEP', text: 'Gaziantep\'e ilerle. Start noktasından geçersen 20.000 TL al.'},
        { id: 14, group: 'bond', type: 'fine', money: 20000, text: 'Paralarını yatırdığın banka battı. Kasaya 20.000 TL öde.'},
        { id: 15, group: 'bond', type: 'move', money: 0, tileCode: 'İSTANBUL', text: 'İstanbul\'a git.'},
        { id: 16, group: 'bond', type: 'move', money: 0, tileCode: 'START', text: 'Start noktasına git'},
        { id: 17, group: 'bond', type: 'move', money: 0, tileCount: -4, text: '4 hane geri git'},
        { id: 18, group: 'bond', type: 'other', money: 0, code: 'JAIL-PASS', text: 'Af çıktı serbestsin. Hapishanesen ücretsiz çık. Bu kart satılabilir ya da saklanabilir.'},
        { id: 19, group: 'bond', type: 'bonus', money: 5000, text: 'Borsadan 5.000 TL kazandın.'},
        { id: 20, group: 'bond', type: 'bonus', money: 20000, text: 'Loto\'da 6 tutturdun. 20.000 TL kazandın.'},
      ],

      destinyCards: [
        { id: 21, group: 'destiny', type: 'fine', money: 5000, text: 'Birikmiş nafaka borcu. 5000 TL öde.' },
        { id: 22, group: 'destiny', type: 'bonus', money: 1000, text: 'Milli piyango biletine amorti çıktı. 1000 TL al.' },
        { id: 23, group: 'destiny', type: 'bonus', money: 5000, text: 'Döviz yükseldi. 5000 TL al.'},
        { id: 24, group: 'destiny', type: 'fine', money: 1000, text: '1000 TL öde.'},
        { id: 25, group: 'destiny', type: 'bonus', money: 1000, text: 'İddiayı kazandın 1000 TL al.'},
        { id: 26, group: 'destiny', type: 'other', money: 0, code: 'JAIL-PASS', text: 'Hakkındaki iddialar asılsız çıktı. Hapishanesen ücretsiz çık. Bu kart satılabilir ya da saklanabilir.'},
        { id: 27, group: 'destiny', type: 'bonus', money: 10000, text: 'Şirket kar payı olarak 10000 TL al.'},
        { id: 28, group: 'destiny', type: 'bonus', money: 5000, text: 'Döviz yükseldi. 5000 TL al.'},
        { id: 29, group: 'destiny', type: 'move', money: 0,  tileCode: 'START', text: 'Start noktasına git.'},
        { id: 30, group: 'destiny', type: 'fine', money: 5000, text: 'Vergi oranları arttırıldı. Kasaya 5000 TL öde'},
        { id: 31, group: 'destiny', type: 'fine', money: 1000, text: '1000 TL öde.'},
        { id: 32, group: 'destiny', type: 'fine', money: 10000, text: 'Saç ektirme operasyonu. 10000 TL öde.'},
        { id: 33, group: 'destiny', type: 'fine', money: 5000, text: 'Karın yağlarını aldırdın. 5000 TL öde.'},
        { id: 34, group: 'destiny', type: 'move', money: 0,  tileCode: 'HAPiSHANE', text: 'Bayrampaşa ceza evine git. Start noktasından geçersen 20.000 TL alma!'},
        { id: 35, group: 'destiny', type: 'fine', money: 10000, text: 'Bedelli askerlik yapacaksın. Kasaya 10000 TL öde.'},
        { id: 36, group: 'destiny', type: 'fine', money: 5000, text: '5000 TL öde.'},
        { id: 37, group: 'destiny', type: 'move', money: 0, tileCode: 'Erzurum', text: 'Erzuruma geri git.'},
        { id: 38, group: 'destiny', type: 'bonus', money: 20000, text: 'Kasa fazlası. 20000 TL al.'},
        { id: 39, group: 'destiny', type: 'bonus', money: 5000, text: 'Repo geliri. 5000 TL al.'},
        { id: 40, group: 'destiny', type: 'bonus', money: 10000, text: 'Mısırdaki akrabandan 10000 TL miras kaldı.'},
      ],
    },
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

  getTileByCode(code: string) {
    return this.data.tiles.all.find(p => p.code == code) as TileModel;
  }

  getDiceTotals() {
    return this.data.dices.reduce((t, d) => { return t + d.value; }, 0);
  }

  async cardClicked(comp: CardComponent) {
    if (comp.data.side == 'back')
      return;

    // decide card list to pick
    let card: CardModel = comp.data;
    let cards: CardModel[] = [];
    if (card.group == 'bond') {
       cards = this.data.cards.bondCards;
    } else if (card.group == 'destiny') {
      cards = this.data.cards.destinyCards;
    }

    // pick random card
    card = this.pickRandomItem(cards);
    comp.data = card;

    // show card text
    card.side = 'back';

    // move card to the end of card list
    const index = cards.indexOf(card);
    cards.splice(index, 1);
    cards.push(card);

    console.log('card:', card);

    // run the card rules
    await this.sleep(2000);
    const player = this.data.currentPlayer!;
    let money = (card.money ?? 0);

    switch(card.type) {
      case 'bonus': {
        this.changePlayerMoney(player, money);
        this.message2 = 'You get ' + money + ' TL from '+ card.group +' card!';
        break;
      }

      case 'fine': {
        if (card.code == 'HOUSE-TAX') {
          money = 2000; // Todo: calculate by house count!
        
        } else if (card.code == 'TRASH-TAX') {
          money = 5000; // Todo: calculate by house count!
        }

        this.changePlayerMoney(player, money * -1);
        this.message2 = 'You paid ' + money + ' TL from '+ card.group +' card!';
        break;
      }
      
      case 'move': {
        if (card.tileCode) {
          const tile = this.getTileByCode(card.tileCode);
          await this.movePlayerToTile1by1(player, tile!, true, false);
        } else {
          this.movePlayer(card.tileCount ?? 0);
        }
        break;
      }
    }

    // turn card front back
    await this.sleep(2000);
    card.side = 'front';
    comp.data = card;

    this.switchToNextPlayer();
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

    await this.movePlayer(tileCount);
    this.data.state = 'ready';
    this.message1 = 'Click dices to roll again...';
  }

  async movePlayer(tileCount: number) {
    const { currentPlayer: player } = this.data;
    if (!player) 
      return;
    
    // move player
    this.data.state = 'moving';
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
    this.switchToNextPlayer();
    const nextPlayer = this.data.currentPlayer!;

    // mark last tile
    this.lastTile = nextPlayer.currentTile;
  }

  switchToNextPlayer() {
    const player = this.data.currentPlayer!;
    player.playing = false;
    const playerIndex = this.data.players.indexOf(player);
    const nextPlayerIndex = (playerIndex + 1) % this.data.players.length;
    const nextPlayer = this.data.players[nextPlayerIndex];
    this.data.currentPlayer = nextPlayer;
    nextPlayer.playing = true;
  }

  async movePlayerToTile1by1(player: PlayerModel, targetTile: TileModel, isFinal: boolean, isInitial: boolean) {
    this.data.state = 'moving';
    let tile = player.currentTile;
    if (!tile)
      tile = this.getTileByType('start');

    do {
      tile = this.getNextTile(tile);
      await this.movePlayerToTile(player, tile, false, false);
      await this.sleep(200);
    } while(tile != targetTile);

    await this.runMoveRules(false, true);
    this.data.state = 'ready';
  }

  async movePlayerToTile(player: PlayerModel, tile: TileModel, isFinal: boolean, isInitial: boolean) {

    let currentTile = player.currentTile;
    if (currentTile) {
      currentTile.players.splice(currentTile.players.indexOf(player),1);
    }

    player.currentTile = tile;
    tile.players.push(player);

    await this.runMoveRules(isInitial, isFinal);
    if (isFinal) {
      this.data.state = 'ready';
    }
  }

  async runMoveRules(isInitial: boolean, isFinal: boolean) {
    const player = this.data.currentPlayer!;
    let tile = player.currentTile!;

    // handle start pass
    this.lastTile = tile;
    if (isInitial) {
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
              this.message2 = player.name + ' buyed ' + tile.title;
            }
          }

          break;
        }
        
        case 'jail': 
          this.message2 = 'You are in jail!';
          break;
      }
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
    const value = (this.getRandomValue(6) + 1) as DiceValueType;
    return value;
  }

  getRandomValue(max: number) {
    const value = ((Math.round((Math.random() * max)) + 1) % max);
    return value;
  }

  pickRandomItem<T>(items: T[]) {
    const index = this.getRandomValue(items.length-1);
    return items[index];
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

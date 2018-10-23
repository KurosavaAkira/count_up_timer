import './card.sass';
import '../datePicker/datepickk.css';
import Datepickk from '../datePicker/Datepickk';
import timer from '../timer/timer';

let intervals = [];
let cards = [];

class Card {
  constructor(id, title, date = Card.todayDate(), time = Card.cardTime()) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.body = '<div class="card" id="' + this.id + '">\
                 <input type="text" autocomplete="off" placeholder="No title" value="' + this.title + '">\
                 <input class="card-date" value="' + this.date + '">\
                 <div class="card-timer"></div>\
                 <div class="save-cancel"><button>Save</button><button>Сancel</button></div>\
                 </div>';
  }
  
  static todayDate() {
    //let today = (new Date()).toString().split(' ').splice(1,3).join(' ');
    let today = new Date().toLocaleDateString();
    return today;
  }

  static cardTime() {
    let today = new Date();
    return today;
  }

  save(card) {
    let id = card.target.parentNode.parentNode.id;
    console.log('save ' + id);
  }

  cancel(card) {
    let id = card.target.parentNode.parentNode.id;
    console.log('cancel ' + id);
  }

  create() {
    const addCard = document.getElementById('addCard');
    const first_card = document.getElementsByClassName('card')[0];
    const new_card = new Card(this.getId(), '');
    if (first_card != undefined) first_card.insertAdjacentHTML('beforebegin', new_card.body);
    else addCard.insertAdjacentHTML('beforebegin', new_card.body);
    const new_card_date = document.getElementsByTagName('input')[1];
    new_card_date.addEventListener('click', e => this.datepick(e));
    const new_card_save = document.getElementsByTagName('button')[0];
    new_card_save.addEventListener('click', e => this.save(e));
    const new_card_cancel = document.getElementsByTagName('button')[1];
    new_card_cancel.addEventListener('click', e => this.cancel(e));
    cards.push(new_card);
    this.createTimer();
    this.focusInput();
    console.log(cards);
  }

  getId() {
    let id = document.getElementsByClassName('card').length;
    return id += 1;
  }

  parentElementId(element) {
    return element.target.parentElement.id;
  }

  datepick(date_input) {
      let datepicker = new Datepickk();
      datepicker.unselectAll();
      datepicker.closeOnSelect = true;
      datepicker.onSelect = function(checked){
        //date_input.target.value = this.toLocaleDateString();
        date_input.target.setAttribute('value', this.toLocaleDateString());
        let id = date_input.target.parentElement.id-1;
        cards[id].date = date_input.target.value;
        let new_date = new Date(cards[id].date);
        let old_time = new Date(cards[id].time);
        new_date.setHours(old_time.getHours(), old_time.getMinutes(), old_time.getSeconds());
        cards[id].time = new_date;
      };
      datepicker.onClose = function(){
        datepicker.closeOnSelect = false;
        datepicker.onClose = null;
      }
      datepicker.show();
    }

  addCurrentTimeToNewDate(date) {
    let time_now = new Date();
    return date.setHours(time_now.getHours(), time_now.getMinutes(), time_now.getSeconds());
  }

  createTimer() {
    intervals.forEach(clearInterval);
   /* const card_dates = document.getElementsByClassName('card-date').length;
    for(let i = 0; i < card_dates; i++) {
      const new_card_date = document.getElementsByClassName('card-date')[i].value;
      let new_timer = timer(new_card_date, i);
      intervals.push(new_timer);
    } */
    for(let i = 0; i < cards.length; i++) {
      let time = cards[i].time;
      let new_timer = timer(time, i);
      intervals.push(new_timer);
    }
  }

  updateTimer() {
    console.log('update timer');
  }

  focusInput() {
    const input = document.getElementsByTagName('input')[0];
    input.focus();
  }
}

const card = new Card();

export default card;

import './card.sass';

class Card {
  constructor() {
    this.title = 'No title';
    this.body = '<div class="card">\
                 <input type="text" autocomplete="off" placeholder="No title">\
                 <div class="card-date"></div>\
                 <div class="card-timer"></div>\
                 <button>Save</button>\
                 </div>';
  }
  
  save() {
    console.log('save');
  }

  create() {
    const addCard = document.getElementById('addCard');
    const first_card = document.getElementsByClassName('card')[0];
    if (first_card != undefined) first_card.insertAdjacentHTML('beforebegin', this.body);
    else addCard.insertAdjacentHTML('beforebegin', this.body);
    this.focusInput();
  }

  focusInput() {
    const input = document.getElementsByTagName('input')[0];
    input.focus();
  }
}

const card = new Card;

export default card;

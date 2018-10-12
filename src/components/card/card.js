import './card.sass';

class Card {
  constructor() {
    this.title = 'Empty';
    this.body = '<div class="card">asd</div>'
  }
  
  save() {
    console.log('save');
  }

  create() {
    console.log('create');
    const addCard = document.getElementById('addCard');
    addCard.insertAdjacentHTML('beforebegin', '<div class="card">No title</div>');
  }
}

const card = new Card;

export default card.create;

import './card.sass';
import '../datePicker/datepickk.css';
import Datepickk from '../datePicker/Datepickk';

class Card {
  constructor(id) {
    this.title = 'No title';
    this.body = '<div class="card" id="' + id + '">\
                 <input type="text" autocomplete="off" placeholder="No title">\
                 <input class="card-date">\
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
    const new_card = new Card(this.getId());
    if (first_card != undefined) first_card.insertAdjacentHTML('beforebegin', new_card.body);
    else addCard.insertAdjacentHTML('beforebegin', new_card.body);
    this.focusInput();
    //console.log(Datepickk);
  }

  getId() {
    let id = document.getElementsByClassName('card').length;
    console.log(id);
    return id += 1;
  }

  datepick() {
      let datepicker = new Datepickk();
      datepicker.unselectAll();
						datepicker.closeOnClick = false;
						datepicker.button = 'Close';
						datepicker.onSelect = function(checked){
              document.getElementsByClassName('card-date')[0].value = this.toLocaleDateString();
						};
						datepicker.onClose = function(){
							datepicker.closeOnClick = true;
							datepicker.button = null;
							datepicker.onClose = null;
						}
						datepicker.show();
  }

  focusInput() {
    const input = document.getElementsByTagName('input')[0];
    input.focus();
    this.datepick();
  }
}

const card = new Card();

export default card;

import './card.sass';
import '../datePicker/datepickk.css';
import Datepickk from '../datePicker/Datepickk';

class Card {
  constructor(id, title, date = Card.todayDate()) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.body = '<div class="card" id="' + this.id + '">\
                 <input type="text" autocomplete="off" placeholder="No title" value="' + this.title + '">\
                 <input class="card-date" value="' + this.date + '">\
                 <div class="card-timer"></div>\
                 <button>Save</button>\
                 </div>';
  }
  
  static todayDate() {
    //let today = (new Date()).toString().split(' ').splice(1,3).join(' ');
    let today = new Date().toLocaleDateString()
    return today;
  }

  save() {
    console.log('save');
  }

  create() {
    const addCard = document.getElementById('addCard');
    const first_card = document.getElementsByClassName('card')[0];
    const new_card = new Card(this.getId(), '');
    if (first_card != undefined) first_card.insertAdjacentHTML('beforebegin', new_card.body);
    else addCard.insertAdjacentHTML('beforebegin', new_card.body);
    const new_card_date = document.getElementsByClassName('card-date')[0];
    new_card_date.addEventListener('click', e => this.datepick(e));
    this.timer();
    this.focusInput();
  }

  getId() {
    let id = document.getElementsByClassName('card').length;
    return id += 1;
  }

  datepick(date_input) {
      let datepicker = new Datepickk();
      datepicker.unselectAll();
      datepicker.closeOnSelect = true;
      datepicker.onSelect = function(checked){
        date_input.target.value = this.toLocaleDateString();
      };
      datepicker.onClose = function(){
        datepicker.closeOnSelect = false;
        datepicker.onClose = null;
      }
      datepicker.show();
    }

  timer() {
    const new_card_date = document.getElementsByClassName('card-date')[0].value;
    console.log(new_card_date);
    console.log(new Date(new_card_date));
    let countDownDate = new Date("Oct 17, 2018 00:00:00").getTime();
    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      const card_timer = document.getElementsByClassName('card-timer')[0];
      card_timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);      
  }

  focusInput() {
    const input = document.getElementsByTagName('input')[0];
    input.focus();
  }
}

const card = new Card();

export default card;

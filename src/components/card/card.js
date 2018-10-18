import './card.sass';
import '../datePicker/datepickk.css';
import Datepickk from '../datePicker/Datepickk';

let intervals = [];

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
    intervals.forEach(clearInterval);
    const card_dates = document.getElementsByClassName('card-date').length;
    for(let i = 0; i < card_dates; i++) {
      const new_card_date = document.getElementsByClassName('card-date')[i].value;
      console.log(new_card_date);
      console.log(new Date(new_card_date));
      let countDownDate = new Date(new_card_date).getTime();
      // Update the count down every 1 second
      let x = setInterval(() => {
        // Get todays date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance
        let setMinus = '';
        if (now < countDownDate) distance = countDownDate - now;
        else {
          distance = now - countDownDate;
          setMinus = '-';
        }
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (60*60*1000*24)*1);
        let hours = Math.floor((distance % (60*60*1000*24))/(60*60*1000)*1);
        let minutes = Math.floor(((distance % (60*60*1000*24))%(60*60*1000))/(60*1000)*1);
        let seconds = Math.floor((((distance % (60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
        // Display the result in the element with id="demo"
        const card_timer = document.getElementsByClassName('card-timer')[i];
        card_timer.innerHTML = setMinus + days + 'd ' + setMinus + hours + 'h ' + setMinus + minutes + 'm ' + setMinus + seconds + 's ';
      }, 1000); 
      intervals.push(x);
      console.log(x);
    }     
  }

  focusInput() {
    const input = document.getElementsByTagName('input')[0];
    input.focus();
  }
}

const card = new Card();

export default card;

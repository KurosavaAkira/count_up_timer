const timer = (countDownDate, i) => {
  let time_now = new Date();
  //let countDownDate = date;
  //countDownDate.setHours(time_now.getHours(), time_now.getMinutes(), time_now.getSeconds());
  countDownDate.getTime();
  // Update the count down every 1 second
  let new_timer = setInterval(() => {
    let now = new Date();
    // Find the distance between now and the count down date
    let distance;
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
    // Display the result in the element
    const card_timer = document.getElementById(i + 1).getElementsByClassName('card-timer')[0];
    card_timer.innerHTML = setMinus + days + 'd ' + setMinus + hours + 'h ' + setMinus + minutes + 'm ' + setMinus + seconds + 's ';
  }, 1000); 
  return new_timer;

};

export default timer;
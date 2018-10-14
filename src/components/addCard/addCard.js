import './addCard.sass';
import card from '../card/card';

const addCard = buttonInnertext => {
  const button = document.createElement('button');
  button.id = 'addCard';
  button.innerText = buttonInnertext;
  button.addEventListener('click', e => card.create());
  return document.getElementById('container').appendChild(button);
};

export default addCard;

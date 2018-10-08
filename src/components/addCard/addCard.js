import card from "../card/card";

const addCard = buttonInnertext => {
  const button = document.createElement('button');
  button.innerText = buttonInnertext;
  button.addEventListener("click", e => card('Card test'));
  return document.body.appendChild(button);
};

export default addCard;

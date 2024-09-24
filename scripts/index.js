import {initialCards} from '../scripts/cards.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const templateItem = cardTemplate.querySelector('.places__item');

// @todo: Функция создания карточки
  function createCard(item, deleteItem) {
  const cardElement = templateItem.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__description');

  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', function () {
    deleteItem(cardElement)
  });

  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCardOnPage (addCard) {
  addCard.remove();
};

// @todo: Вывести карточки на страницу
for (let card of initialCards) {
  const addCard = createCard(card, deleteCardOnPage);
  cardList.append(addCard);
};
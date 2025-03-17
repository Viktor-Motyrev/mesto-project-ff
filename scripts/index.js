// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
const createCard = (title, srcImg) => {
    const card = template.querySelector('.card').cloneNode(true);
    const cardImg = card.querySelector('.card__image');
    
    cardImg.src = srcImg;
    cardImg.alt = title;
    card.querySelector('.card__title').textContent = title;
    
    return card;
};

// @todo: Функция удаления карточки
cardList.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('card__delete-button')) {
        evt.target.closest('.card').remove();
    }
});

// @todo: Вывести карточки на страницу
const renderCard = (name, link) => {
    cardList.prepend(createCard(name, link));
};

initialCards.forEach((cardData) => {
  renderCard(cardData.name, cardData.link);
});
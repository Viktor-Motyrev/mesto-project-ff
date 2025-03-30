// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
const createCard = (title, srcImg) => {
    const card = template.querySelector('.card').cloneNode(true);
    const cardImg = card.querySelector('.card__image');
    const deleteButton = card.querySelector('.card__delete-button');
    
    cardImg.src = srcImg;
    cardImg.alt = title;
    card.querySelector('.card__title').textContent = title;
    deleteButton.addEventListener("click", deleteCard);
    
    return card;
};

// @todo: Функция удаления карточки
function deleteCard(event) { 
    event.target.closest(".card").remove(); 
};

// @todo: Вывести карточки на страницу
const renderCard = (name, link) => {
    cardList.append(createCard(name, link));
};

initialCards.forEach((cardData) => {
    renderCard(cardData.name, cardData.link);
});
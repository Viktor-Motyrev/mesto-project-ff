export {
  closeModal,
  openModal,
  setModalWindowEventListeners
};

 const setModalWindowEventListeners = (modalWindow) => {
  modalWindow.classList.add("popup_is-animated");

  //  Добавить обработчик события click на кнопку закрытия
  const closeCross = modalWindow.querySelector('.popup__close');
  closeCross.addEventListener('click', () => {closeModal(modalWindow);});

  //  Добавить обработчик события для оверлея
  modalWindow.addEventListener('mousedown', (event) => { 
      if (!event.target.classList.contains(".popup__content")) {
        closeModal(event.target);
      }
  });
};

function openModal(popup, beforeFunction) {
  if (beforeFunction !== null) {
      beforeFunction();
  }
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) closeModal(openedPopup);
  }
}




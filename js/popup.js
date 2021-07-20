

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const TYPE_HOUSES_DICTIONARY = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createCardElement = (author, offer) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPE_HOUSES_DICTIONARY[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  const photoElement = cardElement.querySelector('.popup__photos');
  if (offer.photos) {
    offer.photos.forEach((photo) => {
      const photos = document.createElement('img');
      photos.src = photo;
      photos.classList.add('popup__photo');
      photos.width = 45;
      photos.height = 40;
      photos.alt = 'Фотография жилья';
      photos.appendChild(photoElement);
    });
  }

  const features = cardElement.querySelector('.popup__features');
  if (offer.features) {
    offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      features.appendChild(featureElement);
    });
  }


  return cardElement;
};

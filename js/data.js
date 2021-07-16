import {getRandomNumber, getRandomNumberFloat} from './util.js';

const QUANTITY_ADS = 10;

const TITLES = [
  'У каждого ребенка будет по комнате',
  'Компактность, практичность и экономия',
  'Вся инфраструктура в 5 минутах ходьбы от двери Вашей квартиры',
  'Для большой семьи',
  'Экологически благополучная обстановка',
  'Рядом с домом парк отличное место для отдыха и пеших прогулок',
  'Всего три минуты до большого озера',
  'Островок рая для свободного художника',
  'Легендарные стиль и качество',
  'Замечательное место для приема гостей и релакса',
];

const PRICES = [];
let maxPrice = 10000;
for (let i = 0; i <= maxPrice - 1; i++) {
  PRICES[i] = i + 1;
}


const TYPE_HOUSES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const ROOMS = [];
let maxRoom = 5;
for (let i = 0; i <= maxRoom - 1; i++) {
  ROOMS[i] = i + 1;
}

const GUESTS = [];
const maxGuest = 10;
for (let i = 0; i <= maxGuest - 1; i++) {
  GUESTS[i] = i + 1;
}

console.log(GUESTS);

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Можно дышать свежим воздухом не вдыхая смог проезжающего автотранспорта благодаря тому, что окна квартиры выходят на парк.',
  'Отсутствует проблема с парковкой. Всегда свободные парковочные места, можно удобно припарковаться рядом с домом.',
  'Улучшенная планировка и большая площадь. 44 кв.м. общей площади и 9 метровая кухня это гораздо больше, чем в стандартной 1-комнатной квартире.',
  'Мечтаете жить во дворце? Разрешите предложить Вам варианты лучше',
  'Генеральские дачи. Открывайте новый формат коллекционной недвижимости',
  'Квартира в 2-х уровнях, практически свой дом. 100 квадратных метров света и уюта. Живите и радуйтесь жизни в лучах солнца.',
  '2 ванны — это так удобно',
  'Квартира в 2-х уровнях, практически свой дом. Хотите что бы Вам завидовали?!',
  'Захватывающее ощущение раскрепощенности и легкости',
  'Каждый уголок квартиры освещен светом добра и любви',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LOCATION = {
  LAT: {
    MIN: 35.65000,
    MAX: 35.70000,
  },
  LNG: {
    MIN: 139.70000,
    MAX: 139.80000,
  },
};

const arrayAvatars = [];

for (let imageCounter = 1; imageCounter <= QUANTITY_ADS; imageCounter++) {
  if (imageCounter < 10) {
    arrayAvatars.push(`img/avatars/user0${imageCounter}.png`);
  } else {
    arrayAvatars.push(`img/avatars/user${imageCounter}.png`);
  }
}

const getRandomArrayElement = function (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const createOffer = function () {
  const locationX = getRandomNumberFloat(LOCATION.LAT.MIN, LOCATION.LAT.MAX, 5);
  const locationY = getRandomNumberFloat(LOCATION.LNG.MIN, LOCATION.LNG.MAX, 5);
  return {
    author: {
      avatar: getRandomArrayElement(arrayAvatars),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: [locationX, locationY],
      price: getRandomArrayElement(PRICES),
      type: getRandomArrayElement(TYPE_HOUSES),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(GUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

const listAds = new Array(QUANTITY_ADS).fill(null).map(() => createOffer());

export{listAds};

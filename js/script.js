/*---------------------*/
//books
/*---------------------*/

const books = [{
    title: "Bruja Moderna",
    pic: "img/tapa-bruja-moderna.jpg",
    desc: "Bruja Moderna es una guía práctica para aprender a manifestar tus deseos a través de la magia sagrada.",
    price: "$1499",
    url: 'https://www.tiendafe.com.ar/productos/bruja-moderna/'
  },
  {
    title: "El Tarot Como Llave",
    pic: "img/tapa-tarot-como-llave.jpg",
    desc: "El tarot es un mundo infinito y apasionante, y como aprendices nuestro trabajo es descubrir qué significa para cada uno.",
    price: "$849",
    url: 'https://www.tiendafe.com.ar/productos/el-tarot-como-llave/'
  },
  {
    title: "Agenda Lunar",
    pic: "img/tapa-agenda-lunar.jpg",
    desc: "La agenda lunar de bruja moderna es tu compañera ideal para atravesar el año con la bendición del pulso lunar.",
    price: "$1175",
    url: 'https://www.tiendafe.com.ar/productos/agenda-lunar-medianoche-bruja-moderna-2020/'
  },
];

/*---------------------*/
//tarot cards
/*---------------------*/

const cards = [{
    cardName: "El Margo",
    cardImg: "img/cards/el-mago.jpg",
    cardDesc: "Con los pies firmemente asentados en el suelo y con la cabeza inclinada hacia la izquierda, El Mago sugiere una acción directa predicha de suficiente reflexión.",
  },
  {
    cardName: "La Papisa",
    cardImg: "img/cards/la-papisa.jpg",
    cardDesc: "Se asocia con el cosmos, como pareja de dos universos gemelos, y con la carga eléctrica. Es una mujer madura, pero todavía hermosa. ",
  },
  {
    cardName: "La Emperatriz",
    cardImg: "img/cards/la-emperatriz.jpg",
    cardDesc: "Se asocia con la Vía Láctea, representada por el manantial, con la gravedad representada por el estado de gestación que la conmueve y con el proceso de estructuración representado por su cetro.",
  },
  {
    cardName: "El Emperador",
    cardImg: "img/cards/el-emperador.jpg",
    cardDesc: "Representa la solidez, cuatro puntos cardinales, cuatro estaciones del año, cuatro paredes del Templo. El cuatro es generalmente asociado con un ciclo entero y completo",
  },
  {
    cardName: "El Papa",
    cardImg: "img/cards/el-papa.jpg",
    cardDesc: "El Papa se asocia con los planetas, con el proceso de interacción y con el magnetismo.",
  },
  {
    cardName: "El Enamorado",
    cardImg: "img/cards/el-enamorado.jpg",
    cardDesc: "Asociado con la necesidad de elección, de los impulsos sexuales y románticos. El niño que deja de ser niño y madura impulsado por la curiosidad o el deber.",
  },
  {
    cardName: "El Carro",
    cardImg: "img/cards/el-carro.jpg",
    cardDesc: "El Carro representa el control de la mente humana sobre las pasiones animales y el instinto, o más esotéricamente, el Yo Superior sobre los bajos egos y agregados psicológicos.",
  },
  {
    cardName: "La Justicia",
    cardImg: "img/cards/la-justicia.jpg",
    cardDesc: "El sostén de la fuerza moral e integridad: equidad, sensatez, moderación, virtud virginidad, satisfacción por los éxitos alcanzados.",
  },
  {
    cardName: "El Ermitaño",
    cardImg: "img/cards/el-ermitaño.jpg",
    cardDesc: "El hombre parece estar haciendo una búsqueda en solitario. Representa la introspección, autoconocimiento, de retiro del mundo para entender mejor lo aprendido y asimilarlo.",
  },
  {
    cardName: "La Fortuna",
    cardImg: "img/cards/la-fortuna.jpg",
    cardDesc: "La Rueda de la Fortuna generalmente representa el vaivén de la vida, el Destino y el Karma.",
  },
  {
    cardName: "La Fuerza",
    cardImg: "img/cards/la-fuerza.jpg",
    cardDesc: "Usualmente simboliza que la voluntad que se antepone a cualquier problema, para encauzarlo y solucionarlo.",
  },
  {
    cardName: "El Ahorcado",
    cardImg: "img/cards/el-ahorcado.jpg",
    cardDesc: "El Colgado suele ser asociado con el autosacrificio y la paciencia ante las adversidades. Con el esfuerzo tesonero que requiere cualquier empresa difícil de llevar a cabo y cualquier causa noble.",
  },
  {
    cardName: "La Muerte",
    cardImg: "img/cards/la-muerte.jpg",
    cardDesc: "La Muerte presenta el cambio, el fin de un ciclo y el resurgimiento de otro. Por ende, la muerte no debe ser temida.",
  },
  {
    cardName: "La Templanza",
    cardImg: "img/cards/la-templanza.jpg",
    cardDesc: "A diferencia de otros seres, que son de corte espiritual, ella sí toca el suelo, pero con un pie morado, color poco frecuente en las imágenes que simboliza la máxima santidad.",
  },
  {
    cardName: "El Diablo",
    cardImg: "img/cards/el-diablo.jpg",
    cardDesc: "Representa al ser humano que está atado a los deseos materiales, los vicios y la materia. Suele representar el materialismo, la lujuria, la degradación y los excesos.",
  },
  {
    cardName: "La Torre",
    cardImg: "img/cards/la-torre.jpg",
    cardDesc: "Se asocia la Torre con el caos, la catástrofe y la ruina. Suele interpretarse que vaticina desastres.",
  },
  {
    cardName: "La Estrella",
    cardImg: "img/cards/la-estrella.jpg",
    cardDesc: "Es el símbolo de la armonía radiante y el equilibrio activo. Es la suma del diez, que representa el ciclo universal, y del siete, número sagrado por excelencia.",
  },
  {
    cardName: "El Sol",
    cardImg: "img/cards/el-sol.jpg",
    cardDesc: "Es una carta muy positiva en cuanto a interpretación de presente y futuro. Sus potentes rayos iluminan el mundo, es en este caso una luz física y espiritual. ",
  },
  {
    cardName: "El Juicio",
    cardImg: "img/cards/el-juicio.jpg",
    cardDesc: "El significado en el plano espiritual viene determinado por unión y separación, por principio y final, por lo relativo y lo absoluto, es un elemento donde confluyen contrarios y la conciencia del propio ser.",
  },
  {
    cardName: "El Mundo",
    cardImg: "img/cards/el-mundo.jpg",
    cardDesc: "Es una referencia englobadora del conocimiento de la Biblia, según el cristianismo, la palabra de Dios.",
  },
];

/*---------------------*/
//NAV BAR
/*---------------------*/

/*variables*/
const navBar = document.getElementById("nav-bar");
const heroHeight = document.getElementById("hero").scrollHeight;
const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.side-nav');

/*functions*/
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > heroHeight ||
    document.documentElement.scrollTop > heroHeight
  ) {
    navBar.classList.add('show-nav-bar');
    navBar.classList.remove('hide-nav-bar');
  } else {
    navBar.classList.remove('show-nav-bar');
    navBar.classList.add('hide-nav-bar');
    sideBar.classList.add('hide-sideNav');
  }
};

/*---------------------*/
//SIDE BAR
/*---------------------*/

hamburger.addEventListener('click', () => {

  if (sideBar.classList.contains('hide-sideNav')) {
    sideBar.classList.remove('hide-sideNav');
  } else {
    sideBar.classList.add('hide-sideNav');
  }

});

/*---------------------*/
//BOOKS
/*---------------------*/

/*variables*/
const booksContainer = document.querySelector(".books");
const bookInfo = document.querySelector(".book-info");
const bookCover = document.querySelector(".book-cover");
const totalBooks = books.length;
let currentBook = 0;
const bookCount = document.querySelector(".book-count");
const bookTitle = document.querySelector(".book-title");
const bookDesc = document.querySelector(".book-desc");
const bookPrice = document.querySelector(".price");
const bookPic = document.querySelector(".book-cover");
const bookBtn = document.querySelector('.book-button');

/*functions*/
const nextBook = (currentBook) => {
  bookCount.textContent = `${currentBook + 1}/${totalBooks}`;
  bookTitle.textContent = `${books[currentBook].title}`;
  bookDesc.textContent = `${books[currentBook].desc}`;
  bookPrice.textContent = `${books[currentBook].price}`;
  bookPic.src = `${books[currentBook].pic}`;
  bookBtn.href = `${books[currentBook].url}`;
};

const moveBook = (direction) => {
  if (direction == "forward") {
    bookInfo.style.transform = "translateX(-50px)";
    setTimeout(() => (bookInfo.style.transform = "translateX(50px)"), 350);
  } else {
    bookInfo.style.transform = "translateX(50px)";
    setTimeout(() => (bookInfo.style.transform = "translateX(-50px)"), 350);
  }

  bookInfo.style.opacity = 0;
  bookPic.style.opacity = 0;
  setTimeout(nextBook, 350, currentBook);
  setTimeout(() => (bookInfo.style.transform = "translateX(0px)"), 500);
  setTimeout(() => (bookInfo.style.opacity = 1), 500);
  setTimeout(() => (bookPic.style.opacity = 1), 500);
};

/*event listeners*/

nextBook(currentBook);

if (window.PointerEvent) {
  let move = false;
  let pointerInit = 0;
  let direction = null;

  booksContainer.addEventListener('pointerdown', (e) => {
    move = true;
    pointerInit = e.pageX;
  });

  booksContainer.addEventListener('pointermove', (e) => {
    if (move) {

      if (e.pageX < pointerInit) {
        direction = 'right';
      } else {
        direction = 'left';
      }

      if (direction == 'left' && currentBook > 0) {
        move = false;
        currentBook--;
        moveBook("backward");
      } else if (direction == 'right' && currentBook < totalBooks - 1) {
        move = false;
        currentBook++;
        moveBook("forward");
      }

    }

  });

  booksContainer.addEventListener('pointerup', () => {
    move = false;
  });

}



/*---------------------*/
//PODCASTS
/*---------------------*/

/*variables*/
const podcastContainer = document.querySelector(".podcasts-container");
const podcastArray = document.querySelectorAll(".podcast-card");
const podcastCard = podcastArray[0];
let currentPodcast = 0;
const totalPodcasts = podcastArray.length;


/*functions*/
const moveCard = (distance) => {
  podcastContainer.scrollBy({
    left: distance,
    behavior: "smooth",
  });
};

const highlight = (podcast, direction) => {
  podcastArray[podcast + direction].classList.add("faded");
  podcastArray[podcast].classList.remove("faded");
};

/*---------------------*/
//TAROT
/*---------------------*/

/*variables*/
const pickCards = document.getElementById("pick-cards");
let cardsCover = document.querySelectorAll(".tarot-card-img--cover");
let cardsTitle = document.querySelectorAll(".tarot-card-name");
let cardsImg = document.querySelectorAll(".tarot-card-img");
let cardsDesc = document.querySelectorAll(".tarot-card-desc");

/*functions*/
const buildDeck = (cards, arr) => {
  for (let i = 0; i < cards.length; i++) {
    arr.push(cards[i]);
  }
};

const revealCards = (index) => {
  cardsCover[index].style.opacity = 0;
  cardsTitle[index].style.transform = "translateY(0)";
  cardsDesc[index].style.transform = "translateY(0)";
  cardsTitle[index].style.opacity = 1;
  cardsDesc[index].style.opacity = 1;
};

/*event listeners*/
pickCards.addEventListener("click", () => {
  const deck = [];

  buildDeck(cards, deck);

  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * deck.length);

    cardsTitle[i].textContent = deck[randomNum].cardName;
    cardsImg[i].src = deck[randomNum].cardImg;
    cardsDesc[i].textContent = deck[randomNum].cardDesc;

    deck.splice(randomNum, 1);

    setTimeout(revealCards(i), 100);
  }
});

/*---------------------*/
//SLIDER
/*---------------------*/
/*variables*/
const slider = document.querySelectorAll(".scroll");
let isDown = false;
let startX;
let scrollLeft;
let startPoint = podcastCard.offsetWidth * 0.4;
let nextPoint = 0;
let highlightPoints = [startPoint];
let k = 0;
let oldX;
let direction = '';

for (let i = 0; i < podcastArray.length - 1; i++) {
  nextPoint += podcastCard.offsetWidth + 16;
  highlightPoints.push(nextPoint);
}

/*event listeners*/
for (let i = 0; i < slider.length; i++) {

  if (window.PointerEvent) {

    slider[i].addEventListener("pointerdown", (e) => {
      oldX = e.clientX;
      isDown = true;
      slider[i].classList.add("active");
      startX = e.clientX - slider[i].offsetLeft;
      scrollLeft = slider[i].scrollLeft;
    });

    /*slider[i].addEventListener("pointerleave", () => {
      isDown = false;
      slider[i].classList.remove("active");
    });*/
    slider[i].addEventListener("pointerup", () => {
      isDown = false;
      slider[i].classList.remove("active");
    });
    slider[i].addEventListener("pointermove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.clientX - slider[i].offsetLeft;
      const walk = x - startX;
      let scrollPos = slider[i].scrollLeft;
      slider[i].scrollLeft = scrollLeft - walk;

      if (slider[i].classList.contains('podcasts-container')) {

        if (oldX < e.clientX) {
          direction = 'left';
        } else {
          direction = 'right';
        }

        oldX = e.clientX;

        if (direction == 'right') {
          if (scrollPos > highlightPoints[k] && scrollPos < highlightPoints[k + 1]) {
            k++;
            podcastArray[k - 1].classList.add("faded");
            podcastArray[k].classList.remove("faded");
          }
        } else if (scrollPos < highlightPoints[k] * 0.8 && scrollPos > highlightPoints[k - 1] * 0.5) {
          k--;
          podcastArray[k + 1].classList.add("faded");
          podcastArray[k].classList.remove("faded");
        }

      }

    });

  } else {
    slider[i].addEventListener("mousedown", (e) => {
      oldX = e.clientX;
      isDown = true;
      slider[i].classList.add("active");
      startX = e.clientX - slider[i].offsetLeft;
      scrollLeft = slider[i].scrollLeft;
    });

    slider[i].addEventListener("mouseleave", () => {
      isDown = false;
      slider[i].classList.remove("active");
    });
    slider[i].addEventListener("mouseup", () => {
      isDown = false;
      slider[i].classList.remove("active");
    });
    slider[i].addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.clientX - slider[i].offsetLeft;
      const walk = x - startX;
      let scrollPos = slider[i].scrollLeft;
      slider[i].scrollLeft = scrollLeft - walk;

      if (slider[i].classList.contains('podcasts-container')) {

        if (oldX < e.clientX) {
          direction = 'left';
        } else {
          direction = 'right';
        }

        oldX = e.clientX;

        if (direction == 'right') {
          if (scrollPos > highlightPoints[k] && scrollPos < highlightPoints[k + 1]) {
            k++;
            podcastArray[k - 1].classList.add("faded");
            podcastArray[k].classList.remove("faded");
          }
        } else if (scrollPos < highlightPoints[k] * 0.8 && scrollPos > highlightPoints[k - 1] * 0.5) {
          k--;
          podcastArray[k + 1].classList.add("faded");
          podcastArray[k].classList.remove("faded");
        }

      }

    });
  }

}

/*---------------------*/
//canvasOne ARROWS
/*---------------------*/

/*arrow one*/
const arrowHeadOne = document.getElementById("arrow-head-one");
const canvasOne = document.getElementById("canvasOne");
const canvasContainerOne = document.getElementById("canvasContainerOne");
const ctxOne = canvasOne.getContext("2d");

canvasOne.width =
  canvasContainerOne.offsetWidth + canvasContainerOne.offsetWidth / 5;
canvasOne.height = canvasContainerOne.offsetHeight;
canvasOne.style.top = "-20%";

ctxOne.beginPath();
ctxOne.moveTo(canvasOne.width / 6, canvasOne.height / 12);
ctxOne.quadraticCurveTo(
  canvasOne.width / 3,
  canvasOne.height / 1.8,
  canvasOne.width - canvasOne.width / 10,
  canvasOne.height / 2 + canvasOne.height / 5
);
ctxOne.drawImage(
  arrowHeadOne,
  canvasOne.width - canvasOne.width / 10,
  canvasOne.height / 2 + canvasOne.height / 5 - 10
);

ctxOne.lineWidth = 3;
ctxOne.strokeStyle = "#b2b2b2";
ctxOne.stroke();

/*arrow two*/

const arrowHeadTwo = document.getElementById("arrow-head-two");
const canvasTwo = document.getElementById("canvasTwo");
//const canvasContainerTwo = document.getElementById("canvasContainerTwo");
const ctxTwo = canvasTwo.getContext("2d");

/*canvasTwo.width =
  canvasContainerTwo.offsetWidth + canvasContainerTwo.offsetWidth / 5;*/
canvasTwo.width = canvasContainerOne.offsetWidth;
canvasTwo.height = canvasContainerOne.offsetHeight * 0.65;
//canvasTwo.style.top = "-20%";

ctxTwo.beginPath();
ctxTwo.moveTo(canvasTwo.width / 2, canvasTwo.height / 10);
ctxTwo.quadraticCurveTo(
  canvasTwo.width * 0.75,
  canvasTwo.height * 0.55,
  canvasTwo.width * 0.2,
  canvasTwo.height * 0.9
);

ctxTwo.drawImage(
  arrowHeadTwo,
  canvasTwo.width * 0.2 - 18,
  canvasTwo.height * 0.9 - 14
);

ctxTwo.lineWidth = 3;
ctxTwo.strokeStyle = "#b2b2b2";
ctxTwo.stroke();

/*---------------------*/
//carousel
/*---------------------*/

const track = document.querySelector('.track');
const igCarousel = document.querySelector('.ig-carousel');
let mouseLastPosition = 0;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;

const gestureStart = (e) => {
  mouseLastPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
}

const gestureMove = (e) => {
  if (moving) {
    const diff = e.pageX - mouseLastPosition;
    if (e.pageX - lastPageX > 0) {
      if (transformValue > 0) {
        return;
      }
    } else {
      if (Math.abs(transformValue) > track.offsetWidth - 320) {
        return;
      }
    }
    transformValue = transform + diff;
    track.style.transform = `translateX(${transformValue}px)`;
  }
  lastPageX = e.pageX;
};

const gestureEnd = (e) => {
  moving = false;
}

if (window.PointerEvent) {
  igCarousel.addEventListener('pointerdown', gestureStart);

  igCarousel.addEventListener('pointermove', gestureMove);

  igCarousel.addEventListener('pointerup', gestureEnd);
} else {
  igCarousel.addEventListener('touchdown', gestureStart);

  igCarousel.addEventListener('touchmove', gestureMove);

  igCarousel.addEventListener('touchup', gestureEnd);

  igCarousel.addEventListener('mousedown', gestureStart);

  igCarousel.addEventListener('mousemove', gestureMove);

  igCarousel.addEventListener('mouseup', gestureEnd);
}
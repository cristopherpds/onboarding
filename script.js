let page = 0;
let img = document.querySelector('.img');
let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let nextButton = document.querySelector('.next');
let skipButton = document.querySelector('.skip');

const data = [
  {
    title: "Plant lover Community",
    subtitle: "Find gardening enthusiasts from all over the world",
    button: "Continue"
  },
  {
    title: "Get fast & safe delivery",
    subtitle: "Get good quality products for your plants",
    button: "Continue"
  },

  {

    title: "Buy & Sell Tools",
    subtitle: "Buy & sell good quality products for your beautiful plants",
    button: "Get started"
  },
];

const displayContent = (data) => {
  document.querySelector(`.point:nth-child(${page + 1})`).classList.add('selected');
  img.classList.add(`bg${page}`);
  console.log('data:', page);
  title.innerHTML = data[page].title;
  subtitle.innerHTML = data[page].subtitle;
  nextButton.innerHTML = data[page].button;
  if (page === 2) {
    skipButton.classList.add('hide');
  } else {
    skipButton.classList.remove('hide');
  }
}

const paginate = (ths, sno) => {
  document.querySelector(`.point:nth-child(${page + 1})`).classList.remove('selected');
  img.classList.remove(`bg${page}`);
  if (!isNaN(sno)) {
    page = sno;
  } else if (page === 2) {
    page = 0;
  } else {
    page += 1;
  }
  console.log("paginate", sno);
  displayContent(data);
}

document.addEventListener("DOMContentLoaded", function (e) {
  displayContent(data);
});




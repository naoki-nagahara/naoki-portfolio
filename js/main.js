const skill = document.querySelectorAll('.skill-container-inner');
const mainText = document.querySelectorAll('.main-text');
const work = document.querySelector('.work-container');
const headerText = document.querySelector('.header-container');
const loading = document.querySelector('.loading');
const body = document.querySelector('body');
const workItem = document.querySelectorAll('.work-container-img');
const book = document.querySelectorAll('.book-selection-inner');
const svg = document.querySelector('svg');
const textFloat = document.querySelectorAll('.textFloat');

document.addEventListener('scroll', () => {
  for (let i = 0; i < textFloat.length; i++) {
    let getTextFloat = textFloat[i].getBoundingClientRect().top;
    if (window.innerHeight > getTextFloat) {
      textFloat[i].classList.add('show');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    svg.classList.add('show');
  }, 4500);
});

document.addEventListener('scroll', () => {
  for (let i = 0; i < skill.length; i++) {
    let getSkill =
      skill[i].getBoundingClientRect().top + skill[i].clientHeight * 0.2;
    if (window.innerHeight > getSkill) {
      skill[i].classList.add('show');
    }
  }
});
document.addEventListener('scroll', () => {
  for (let i = 0; i < mainText.length; i++) {
    let getMainText =
      mainText[i].getBoundingClientRect().top + mainText[i].clientHeight * 0.2;
    if (window.innerHeight > getMainText) {
      mainText[i].classList.add('show');
    }
  }
});
document.addEventListener('scroll', () => {
  let getWork = work.getBoundingClientRect().top + work.clientHeight * 0.2;
  if (window.innerHeight > getWork) {
    work.classList.add('show');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    headerText.classList.add('show');
    body.classList.add('show');
  }, 5500);
});

document.addEventListener('scroll', () => {
  for (let i = 0; i < workItem.length; i++) {
    let getWorkItem =
      workItem[i].getBoundingClientRect().top + work.clientHeight * 0.2;
    if (window.innerHeight > getWorkItem) {
      workItem[i].classList.add('show');
    }
  }
});
document.addEventListener('scroll', () => {
  for (let i = 0; i < book.length; i++) {
    let getBook = book[i].getBoundingClientRect().top + work.clientHeight * 0.2;
    if (window.innerHeight > getBook) {
      book[i].classList.add('show');
    }
  }
});

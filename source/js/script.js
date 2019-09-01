/*-----Скрытие/раскрытие меню (index.html)-----*/
var popupMenu = function () {
  var btnOpen = document.querySelector('.btn-menu');
  var btnClose = document.querySelector('.btn-menu-close');

  var headerNav = document.querySelector('.header__nav');
  var headerFunctions = document.querySelector('.header__functions');

  btnOpen.classList.remove("btn-menu--hidden");
  btnClose.classList.add("btn-menu-close--hidden");
  headerNav.classList.add("nav--hide");
  headerFunctions.classList.add("functions--hide");

  btnOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    btnOpen.classList.add("btn-menu--hidden");
    btnClose.classList.remove("btn-menu-close--hidden");
    headerNav.classList.remove("nav--hide");
    headerFunctions.classList.remove("functions--hide");
  })

  btnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    btnOpen.classList.remove("btn-menu--hidden");
    btnClose.classList.add("btn-menu-close--hidden");
    headerNav.classList.add("nav--hide");
    headerFunctions.classList.add("functions--hide");
  })
}

/*-----Вызов скрытия/раскрытия меню (index.html)----- */
if (document.querySelector(".header") !== null) {
  popupMenu();
}

/*-----Скрытие/раскрытие модального окна заказа (index.html)-----*/
var modalQuickOrder = function () {

  var buttonOpen = document.querySelector(".week-card__order-link");
  var buttonClose = document.querySelector(".quick-order__close");
  var QuickOrder = document.querySelector(".quick-order");

  buttonOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    QuickOrder.classList.remove("quick-order--hide");
  })

  buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    QuickOrder.classList.add("quick-order--hide");
  })

}

/*-----Вызов скрытия/раскрытия модального окна заказа (index.html)----- */
if (document.querySelector(".week-product") !== null) {
  modalQuickOrder();
}

/*-----Переключение ревью (index.html)[опционально]-----*/
var changeReview = function () {
  var buttonNext = document.querySelector(".btn-review-next");
  var buttonPrev = document.querySelector(".btn-review-prev");
  var reviews = document.querySelectorAll(".reviews-list__item");
  var reviewCurrent;

  for (var i = 0; i < reviews.length; i++) {
    if (i !== 1) {
      reviews[i].classList.add("reviews-list__item--hide");
    } else {
      reviewCurrent = reviews[1];
    }
  }

  buttonNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (reviewCurrent.nextElementSibling) {
      reviewCurrent.classList.add("reviews-list__item--hide");
      reviewCurrent.nextElementSibling.classList.remove("reviews-list__item--hide");
      reviewCurrent = reviewCurrent.nextElementSibling;
    }
  })

  buttonPrev.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (reviewCurrent.previousElementSibling) {
      reviewCurrent.classList.add("reviews-list__item--hide");
      reviewCurrent.previousElementSibling.classList.remove("reviews-list__item--hide");
      reviewCurrent = reviewCurrent.previousElementSibling;
    }
  })

}

/*-----Вызов переключению ревью (index.html)[опционально]----- */
if (document.querySelector(".reviews-list") !== null) {
  changeReview();
}

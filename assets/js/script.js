"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// projects variables
const projectsItem = document.querySelectorAll("[data-projects-item]");
const projectModalContainer = document.querySelector(
  "[data-project-modal-container]"
);
const projectsOverlay = document.querySelector("[data-project-overlay]");
const projectsModalCloseBtn = document.querySelector(
  "[data-project-modal-close-btn]"
);
const projectsModalTitle = document.querySelector("[data-project-modal-title]");
const projectsModalText = document.querySelector("[data-project-modal-text]");
const projectsModalLink = document.querySelector("[data-project-modal-link]");
const projectsModalImg1 = document.querySelector("[data-project-modal-img-1]");
const projectsModalImg2 = document.querySelector("[data-project-modal-img-2]");
const projectsModalImg3 = document.querySelector("[data-project-modal-img-3]");

// modal toggle function
const modalFunc = function () {
  modalContainer.classList.toggle("active");
  projectModalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  projectsOverlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    modalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", modalFunc);
projectsModalCloseBtn.addEventListener("click", modalFunc);
overlay.addEventListener("click", modalFunc);
projectsOverlay.addEventListener("click", modalFunc);

// add click event to all modal items
for (let i = 0; i < projectsItem.length; i++) {
  projectsItem[i].addEventListener("click", function () {
    projectsModalTitle.innerHTML = this.querySelector(
      "[data-projects-title]"
    ).innerHTML;
    projectsModalText.innerHTML = this.querySelector(
      "[data-projects-text]"
    ).innerHTML;
    projectsModalLink.setAttribute(
      "href",
      this.querySelector("[data-projects-link]")
    );
    projectsModalImg1.src = this.querySelector("[data-projects-image-1]").src;
    projectsModalImg1.alt = this.querySelector("[data-projects-image-1]").alt;
    // projectsModalImg2.src = this.querySelector("[data-projects-image-2]").src;
    // projectsModalImg2.alt = this.querySelector("[data-projects-image-2]").alt;
    // projectsModalImg3.src = this.querySelector("[data-projects-image-3]").src;
    // projectsModalImg3.alt = this.querySelector("[data-projects-image-3]").alt;

    modalFunc();
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () {
//   elementToggleFunc(this);
// });
// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {
//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);
//   });
// }

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    // console.log(selectedValue);
    // console.log(this.innerText);
    //selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

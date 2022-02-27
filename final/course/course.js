let tabContent = document.querySelectorAll(".container__inner");
let tabItem = document.querySelectorAll(".container__item");

for (let i = 0; i < tabItem.length; i++) {

  tabItem[i].addEventListener("click", () => {

    tabContent.forEach((item) => {
      item.classList.add("container__inner_hidden");
    });

    tabItem.forEach((item) => {
      item.classList.remove("container__item_active");
    });

    tabContent[i].classList.remove("container__inner_hidden");
    tabItem[i].classList.add("container__item_active");
  });
}





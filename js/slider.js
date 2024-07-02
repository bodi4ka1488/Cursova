let pages = document.querySelectorAll(".page");
let currentPageIndex = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

const funct = () => {};
const f1 = function () {};
function changePage() {
  currentPageIndex = (currentPageIndex + 1) % pages.length;
  showPage(currentPageIndex);
}

setInterval(changePage, 5000);

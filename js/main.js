const year = document.getElementById('year');
const thisYear = new Date().getFullYear();

year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

// const links = document.querySelectorAll('.header__ul a');
// console.log(links)

// links.forEach((link) => {
//   if (link.href === window.location.href) {
//     link.classList.add('active');
//   }
// })

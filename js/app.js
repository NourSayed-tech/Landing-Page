// create the nav bar dynamically using only javaScript

const nav = document.querySelector('.navbar__menu');
nav.insertAdjacentHTML('afterbegin', '<h4>Navbar</h4>');

const services =document.createElement('li');
services.textContent = 'Services';
const team =document.createElement('li');
team.textContent = 'Team';
const portfolio =document.createElement('li');
portfolio.textContent = 'Portfolio';
const about =document.createElement('li');
about.textContent = 'About';

const list = document.querySelector('#navbar__list');
list.appendChild(services);
list.appendChild(team);
list.appendChild(portfolio);
list.appendChild(about);

services.classList.add('one');
team.classList.add('two');
portfolio.classList.add('three');
about.classList.add('four');

services.id = 'nav_links';
team.id = 'nav_links';
portfolio.id = 'nav_links';
about.id = 'nav_links';

services.setAttribute('data-link', 'section1');
team.setAttribute('data-link', 'section2');
portfolio.setAttribute('data-link', 'section3');
about.setAttribute('data-link', 'section4');

// highlight the section in the veiw port
// by activate the CSS sytle already applied on the project

const sections = document.querySelectorAll("section");
const options = {
  root: null,
  rootMargin: "-320px",
  threshold: 0.25
};
const observer = new IntersectionObserver(function
  (entries, observer){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('toggle');
    }
  else {
    entry.target.classList.remove('toggle');
  }
  });


}, options);

sections.forEach(section => {
  observer.observe(section);
});

// move to section by javascript

const links = document.querySelectorAll('#nav_links');
links.forEach((item) => {
  item.addEventListener("click",()=>{
    let scroll = document.getElementById(item.getAttribute("data-link"));
    scroll.scrollIntoView({behavior: "smooth", block: "start"});
  });
});


//go to top bottom

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 300){
    toTop.classList.add("appear");
  } else {
    toTop.classList.remove("appear");
  }
});

// active status to the nav bar items based on the section on the viewport

const one = document.querySelector(".one");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 300 && window.pageYOffset < 900){
    one.classList.add("active");
  } else {
    one.classList.remove("active");
  };
});

const two = document.querySelector(".two");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 900 && window.pageYOffset < 1500){
    two.classList.add("active");
  } else {
    two.classList.remove("active");
  };
});

const three = document.querySelector(".three");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 1500 && window.pageYOffset < 2100){
    three.classList.add("active");
  } else {
    three.classList.remove("active");
  };
});

const four = document.querySelector(".four");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 2100 && window.pageYOffset < 2700){
    four.classList.add("active");
  } else {
    four.classList.remove("active");
  };
});

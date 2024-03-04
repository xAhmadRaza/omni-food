const headerEl = document.querySelector(".header");
const mobileMenuBtn = document.querySelector(".btn-mobile-nav");
const yearEl = document.querySelector(".year");
// update year in the copyright text
yearEl.textContent = new Date().getFullYear();
yearEl.setAttribute("dateTime", new Date().getFullYear());

// maaking the mobile nav btn worrks
mobileMenuBtn.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

// closing nav when click on mobile nav links
headerEl.addEventListener("click", (e) => {
  console.log(e.target.closest(".btn-mobile-nav"));
  if (e.target.closest(".btn-mobile-nav") === mobileMenuBtn) {
    return;
  }
  headerEl.classList.remove("nav-open");
});

// adding smooth scrolling using js

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#") {
      window.scrollTo({ top: "0px", behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries.at(0);
    if (!ent.isIntersecting) {
      headerEl.classList.add("sticky");
      ent.target.style.marginTop = "96px";
    } else {
      headerEl.classList.remove("sticky");
      ent.target.style.marginTop = "auto";
    }

    console.log(ent);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
// will observe the element in the obs.observe
obs.observe(sectionHeroEl);

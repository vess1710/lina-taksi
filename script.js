const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  mobileNav.classList.remove("show");
  mobileNav.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("show");
  mobileNav.setAttribute("aria-hidden", (!isOpen).toString());
  menuBtn.setAttribute("aria-expanded", isOpen.toString());
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMobileNav);
});

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 920) closeMobileNav();
});

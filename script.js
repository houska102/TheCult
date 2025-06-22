var theme = 'light'
function toggleTheme() {
  document.body.id = theme === 'dark' ? "light" : "dark";
  theme = document.body.id
}

function calc_footer_center() {
    footer_element = document.getElementById("footer");
    footer_width = footer_element.offsetWidth / 2;
    footer_element.style.left = (window.innerWidth / 2) - footer_width + "px";
}
calc_footer_center();

window.onresize = calc_footer_center;
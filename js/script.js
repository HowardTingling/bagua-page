//HIDE ALL PAGE ELEMENTS & THEN DISPLAY HOME PAGE ONLY
var pagewrapper = document.querySelectorAll(".main-wrapper .page");
for (var item of pagewrapper) {
    item.style.display = "none";
}
var currentpage = pagewrapper[0];
currentpage.style.display = "block"

//NAVIGATE BETWEEN DIFFERENT PAGE DISPLAYS ON CLICK OF EACH NAVIGATION LINK
var navlinks = document.querySelectorAll("nav li a");
for (var i = 0; i < navlinks.length; ++i) {
    navlinks[i].addEventListener("click", pageswapper.bind(null, i), false);
}
function pageswapper(index) {
    currentpage.style.display = "none";
    currentpage = pagewrapper[index];
    currentpage.style.display = "block";
}

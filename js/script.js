/* PAGE SELECTION */
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
    navlinks[i].addEventListener("click", pageswapper.bind(null, i, pagewrapper), false);
}
function pageswapper(index, wrapper) {
    currentpage.style.display = "none";
    currentpage = wrapper[index];
    currentpage.style.display = "block";
}

/* LANGUAGE SELECTION:
ON LOAD
1. retrieve page_status from cache (english | chinese)
2. if page_status isn't in cache, default english.
3. else if (page_status == english): change color of english and set page to english page
4. else: change color of chinese and set page to chinese page

ON CLICK
1. if language (e.g. ENGLISH) selected, save page_status (e.g. english)
2. set page based on selected outcome
*/

var langcontainer = document.getElementById("lang-select");

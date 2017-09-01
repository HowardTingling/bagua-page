/* PAGE SELECTION */
//HIDE ALL PAGE ELEMENTS & THEN DISPLAY HOME PAGE ONLY
var chinesewrapper = document.querySelectorAll(".page .chinese");
var englishwrapper = document.querySelectorAll(".page .english");
var currentwrapper = englishwrapper;
for (var item of chinesewrapper) {
    item.style.display = "none";
}
for (var item of englishwrapper) {
    item.style.display = "none";
}
var currentindex = 0;
var currentpage = currentwrapper[currentindex];
currentpage.style.display = "block";
//NAVIGATE BETWEEN DIFFERENT PAGE DISPLAYS ON CLICK OF EACH NAVIGATION LINK
var chineselinks = document.querySelectorAll("nav .chinese li a");
var englishlinks = document.querySelectorAll("nav .english li a");
for (var i = 0; i < chineselinks.length; ++i) {
    chineselinks[i].addEventListener("click", pageswapper.bind(null, i, chinesewrapper), false);
}
for (var i = 0; i < englishlinks.length; ++i) {
    englishlinks[i].addEventListener("click", pageswapper.bind(null, i, englishwrapper), false);
}
function pageswapper(index, wrapper) {
    currentpage.style.display = "none";
    currentindex = index;
    currentpage = wrapper[currentindex];
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

var englishoption = document.getElementById("english");
var chineseoption = document.getElementById("chinese");
var chinesenav = document.getElementById("chinesenav");
var englishnav = document.getElementById("englishnav");
chinesenav.style.display="none";
englishoption.addEventListener("click", langswapper.bind(null, englishwrapper, englishnav), false);
chineseoption.addEventListener("click", langswapper.bind(null, chinesewrapper, chinesenav), false);

var currentnav = englishnav;
function langswapper(wrapper, nav) {
    //IF LANGUAGE NOT ALREADY SELECTED, TURN OFF ALL PAGES OF CURRENT LANGUAGE
    for (var item of currentwrapper) {
        item.style.display = "none";
    }
    currentwrapper = wrapper;
    for (var item of currentwrapper) {
        item.style.display = "none";
    }
    currentpage = currentwrapper[currentindex];
    currentpage.style.display = "block";
    console.log(currentwrapper[currentindex]);
    //TURN OFF NAV OF CURRENT LANGUAGE
    currentnav.style.display = "none";
    currentnav = nav;
    currentnav.style.display = "block";
}
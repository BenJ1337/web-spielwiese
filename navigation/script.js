console.log('loading...');


function toggleMainNav() {
    var navigationWrapper = document.getElementById("mainNavigationWrapper");
    var classes = navigationWrapper.classList;
    navigationWrapper.classList.toggle("blend-out");
    if(!classes.contains("blend-out")) {
        var navigation = document.getElementById("mainNavigation");
        navigationWrapper.style.height = navigation.offsetHeight + "px";
    } else {
        navigationWrapper.style.height = null;
    }
}

document.getElementById('mainNavigation').onclick = function(event){
    toggleMainNav();
}

console.log('loading finished');
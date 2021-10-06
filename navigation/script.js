console.log('loading...');

function toggle(component) {
    console.log(component);
    var navigationWrapper = document.getElementById("mainNavigationWrapper");
    var navigation = document.getElementById("mainNavigation");
    var classes = navigationWrapper.classList;
    console.log(navigation.offsetHeight);

    navigationWrapper.classList.toggle("blend-out");
    if(!classes.contains("blend-out")) {
        navigationWrapper.style.height = navigation.offsetHeight + "px";
    } else {
        navigationWrapper.style.height = 0 + "px";
    }
    console.log(classes);
    console.log(navigationWrapper);
}

console.log('loading finished');
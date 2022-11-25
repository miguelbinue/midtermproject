function repliegue() {
    // if(hide-menu !== null) {
    //     $("#main-menu-column").addClass("hide-menu");
    //     $("#main-menu-column").prop("hide-menu", true);
    // } else {
    //     $("#main-menu-column").addClass("display-menu");
    //     $("#main-menu-column").prop("display-menu", true);
    // }

    let isShown = document.getElementsByClassName('display-menu');
    let isHidden = document.getElementsByClassName('hide-menu');
    console.log(isShown);
    console.log(isHidden);
    
    if (isHidden !== null) {
        console.log("isHidden");
        $("#main-menu-column").removeClass("hide-menu");
        $("#main-menu-column").addClass("display-menu");
        isHidden = null;
    } else if (isShown !== null) {
        console.log("isShown");
        $("#main-menu-column").removeClass("display-menu");
        $("#main-menu-column").addClass("hide-menu");
        console.log("he llegado");
        isShown = null;
    }
}
console.log("connected");

let projNum = parseInt(window.location.search.split('?')[1]);
console.log(projNum);
if (projNum === 2) {
    document.getElementById("project-titulo").innerHTML = "Dashcoin";
    document.getElementById("subtitle-description").innerHTML = "Web Development";
    document.getElementsByTagName("img")[0].src = "/project-assets/projects-section/2.jpg"
    document.getElementsByTagName("img")[1].src = "/project-assets/projects-section/2.jpg"
} else if (projNum === 3) {
    document.getElementById("project-titulo").innerHTML = "Vectorify";
    document.getElementById("subtitle-description").innerHTML = "User Experience Design"
    document.getElementsByTagName("img")[0].src = "/project-assets/projects-section/3.jpg"
    document.getElementsByTagName("img")[1].src = "/project-assets/projects-section/3.jpg"
}
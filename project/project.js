let projNum = parseInt(window.location.search.split('?')[1]);
let tituloName;
let subtituloName;
let fotoName;
let paragraphName;
let placeholder = fetch('https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=4')
.then((response) => response.json())
.then((cleanResponse) => {

    for (let i = 0; i < cleanResponse.length; i++) {
        if (projNum === cleanResponse[i].id) {
            tituloName = cleanResponse[i].name;
            subtituloName = cleanResponse[i].email;
            fotoName = cleanResponse[i].id;
            paragraphName = cleanResponse[i].body;
        }
        document.getElementById("project-titulo").innerHTML = tituloName;
        document.getElementById("subtitle-description").innerHTML = subtituloName;
        document.querySelector('.project-intro-image').src = `/project-assets/projects-section/${fotoName}.jpg`;
    }
        
    // cleanResponse.forEach((post) => {
    //     externalApiInfo += `
    //     <div class="container">
    //         <div class="project-intro-wrapper">
    //             <h1 id="project-titulo" class="project-intro-title"></h1>
    //             <div class="project-subtitle-wrapper">
    //                 <p id="subtitle-description" class="subtitle-description">UI Design & App Development</p>
    //                 <div class="subtitle-date">
    //                     <p class="subtitle-date-str">Completed on</p>
    //                     <p class="subtitle-date-num">22/2/22</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="intro-image">
    //             <img src="/project-assets/projects-section/1.jpg" alt class="project-intro-image">
    //             <img src="/project-assets/projects-section/1.jpg" alt class="project-intro-image-effect">
    //         </div>
    //         <div class="project-details">
    //             <p id="project-details-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam sunt nulla, perferendis ad aliquam praesentium aliquid debitis odio fugit tempore, culpa vitae omnis. Qui sequi quae assumenda? Dolor, quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam sunt nulla, perferendis ad aliquam praesentium aliquid debitis odio fugit tempore, culpa vitae omnis. Qui sequi quae assumenda? Dolor, quasi! <br><br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni est vero, ipsum ullam perferendis illum consequatur nobis rem, amet, modi facilis reiciendis ab ad quam vitae laboriosam error! Quod, debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam sunt nulla, perferendis ad aliquam praesentium aliquid debitis odio fugit tempore, culpa vitae omnis. Qui sequi quae assumenda? Dolor, quasi!</p>
    //         </div>
    //     `
    // })

});

// document.getElementsByTagName("img")[0].src = `/project-assets/project-section/2.jpg`;


// console.log(projNum);
// if (projNum === 2) {
//     document.getElementById("project-titulo").innerHTML = "Dashcoin";
//     document.getElementById("subtitle-description").innerHTML = "Web Development";
//     document.getElementsByTagName("img")[0].src = "/project-assets/projects-section/2.jpg"
//     document.getElementsByTagName("img")[1].src = "/project-assets/projects-section/2.jpg"
//     document.getElementById("project-details-p").innerHTML = "lorem"

// } else if (projNum === 3) {
//     document.getElementById("project-titulo").innerHTML = "Vectorify";
//     document.getElementById("subtitle-description").innerHTML = "User Experience Design"
//     document.getElementsByTagName("img")[0].src = "/project-assets/projects-section/3.jpg"
//     document.getElementsByTagName("img")[1].src = "/project-assets/projects-section/3.jpg"
//     document.getElementById("project-details-p").innerHTML = "ipsum"
// }


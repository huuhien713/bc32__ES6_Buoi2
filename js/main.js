let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

// khai ba??o bi????n list ki??nh 
let glassList = document.getElementById('vglassesList')
// khai ba??o bi????n Avatar hi????n thi?? demo
let glassItem = document.querySelector('#avatar img');
// khai ba??o bi????n th??ng tin ki??nh b??n d??????i Avatar
let info = document.getElementById('glassesInfo');
// button after, before
let btn = document.querySelectorAll('.vglasses__card button')

// before button
btn[0].addEventListener('click', () => {
    removeGlasses(false);
})

// after button
btn[1].addEventListener('click', () => {
    removeGlasses(true);
})
// l????ng nghe s???? ki????n click ???? List
glassList.addEventListener('click', (e) => {
    // ??????t c???? hi????u ban ??????u
    isRemoveGlasses = true;
    // n????u co?? nh????n thi?? c???? hi????u la?? true, ga??n c???? hi????u va??o ha??m
    removeGlasses(isRemoveGlasses);
    // hi????n thi?? ki??nh
    info.style.display = 'block'
    // b????t s???? ki????n click ta??i list ki??nh
    let img = e.target;
    // Ti??m ki??nh na??o co?? src === v????i ki??nh ??a?? click
    let currentGlass = dataGlasses.find((glass) => {
        return glass.src === img.getAttribute('src') 
    })
    // ga??n src ki??nh ??a?? click va??o AVT
    glassItem.src = `${currentGlass.virtualImg}`;
    // hi????n thi?? info cu??a ki??nh
    info.innerHTML = `
        <p>${currentGlass.name} - ${currentGlass.brand} (${currentGlass.color})</p>
        <span class="btn btn-danger">$${currentGlass.price}</span> &nbsp <span style="color:green">Stocking</span>
        <div class="pt-4">${currentGlass.description}</div>`
})
// ga??n c???? hi????u ban ??????u == false
let isRemoveGlasses = false;
// ga??n c???? hi??u false ban ??????u va??o ha??m hi????n thi?? ki??nh ;
removeGlasses(isRemoveGlasses);
// ha??m ????n hi????n ki??nh
function removeGlasses(isRemoveGlasses) {
    if (isRemoveGlasses == true) {
        // n????u c???? hi??u == true, display block
        glassItem.style.display = 'block'
        // ga??n la??i c???? hi????u == false
        isRemoveGlasses == false;
    } else {
        // n????u c???? hi??u == true, display none
        glassItem.style.display = 'none'
        // ga??n la??i c???? hi????u == true
        isRemoveGlasses == true;
    }
}



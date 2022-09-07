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

// khai báo biến list kính 
let glassList = document.getElementById('vglassesList')
// khai báo biến Avatar hiển thị demo
let glassItem = document.querySelector('#avatar img');
// khai báo biến thông tin kính bên dưới Avatar
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
// lắng nghe sự kiện click ở List
glassList.addEventListener('click', (e) => {
    // đặt cờ hiệu ban đầu
    isRemoveGlasses = true;
    // nếu có nhấn thì cờ hiệu là true, gán cờ hiệu vào hàm
    removeGlasses(isRemoveGlasses);
    // hiển thị kính
    info.style.display = 'block'
    // bắt sự kiện click tại list kính
    let img = e.target;
    // Tìm kính nào có src === với kính đã click
    let currentGlass = dataGlasses.find((glass) => {
        return glass.src === img.getAttribute('src') 
    })
    // gán src kính đã click vào AVT
    glassItem.src = `${currentGlass.virtualImg}`;
    // hiển thị info của kính
    info.innerHTML = `
        <p>${currentGlass.name} - ${currentGlass.brand} (${currentGlass.color})</p>
        <span class="btn btn-danger">$${currentGlass.price}</span> &nbsp <span style="color:green">Stocking</span>
        <div class="pt-4">${currentGlass.description}</div>`
})
// gán cờ hiệu ban đầu == false
let isRemoveGlasses = false;
// gán cờ hiêu false ban đầu vào hàm hiển thị kính ;
removeGlasses(isRemoveGlasses);
// hàm ẩn hiện kính
function removeGlasses(isRemoveGlasses) {
    if (isRemoveGlasses == true) {
        // nếu cờ hiêu == true, display block
        glassItem.style.display = 'block'
        // gán lại cờ hiệu == false
        isRemoveGlasses == false;
    } else {
        // nếu cờ hiêu == true, display none
        glassItem.style.display = 'none'
        // gán lại cờ hiệu == true
        isRemoveGlasses == true;
    }
}



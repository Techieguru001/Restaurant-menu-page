// items 
const menu = [
    {
        id: 1,
        title: "Bacalhau",
        category: "Dinner",
        price: 23,
        img: "./item-1.jpeg",
        desc:  `loremipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {
        id: 2,
        title: "Lasagna",
        category: "Dinner",
        price: 15,
        img: "./item-2.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {
        id: 3,
        title: "Quinoa Salad",
        category: "lunch",
        price: 17,
        img: "./item-3.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {
        id: 4,
        title: "Deli Sandwhich",
        category: "lunch",
        price: 10,
        img: "./item-4.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 5,
        title: "Strawberry Banana Smoothie",
        category: "shakes",
        price: 7,
        img: "./item-5.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 6,
        title: "Picanha",
        category: "dinner",
        price: 7,
        img: "./item-6.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 7,
        title: "Ribs",
        category: "dinner",
        price: 16,
        img: "./item-7.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 8,
        title: "Chocolate peanut butter smoothie",
        category: "Shakes",
        price: 7,
        img: "./item-8.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 9,
        title: "Lentil soup",
        category: "lunch",
        price: 5,
        img: "./item-9.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 10,
        title: "Pizza",
        category: "dinner",
        price: 6,
        img: "./item-10.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    {   id: 11,
        title: "Grilled Cheese",
        category: "lunch",
        price: 5,
        img: "./item-11.jpeg",
        desc:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem assumenda repudiandae cumque veniam nemo incidunt voluptates maiores odit rerum placeat, 
        iure alias adipisci pariatur at, fugit eveniet quaerat hic! Distinction.`
    },
    
];

const centerSection = document.querySelector('.center-section');
const container = document.querySelector(".btn-container");


const filterBtns = document.querySelectorAll('.filter-btn');

        // load items
window.addEventListener('DOMContentLoaded', function () {
    showMenuItems(menu);
    showMenuButtons();
});


function showMenuItems(menuItems) {
    let showMenu = menuItems.map(function (item){
        // console.log(item);

    return `<article class="menu-item">
                <img src=${item.img} width="400px" height="250px" class="photo" alt="${item.title}"/>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;
    });
    showMenu = showMenu.join("");

    centerSection.innerHTML = showMenu
};


function showMenuButtons(menuItems){
    const categories = menu.reduce(function (values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["all"]
);
const categoryBtns = categories
    .map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })

        // filter items
        filterBtns.forEach(function(btn) {
            btn.addEventListener("click", function (e) {
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(function (menuItem) {
                    // console.log(menuItem.category);
                    if (menuItem.category === category) {
                        return menuItem;
                    }
                });
                    // Console.log(menuCategory);
                if(category === "all"){
                    showMenuItems(menu);
                }else{
                    showMenuItems(menuCategory);
                }
            });
        });
    }
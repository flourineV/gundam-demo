const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "RX-78-2 Gundam",
        price: 100,
        colors: [
            {
                code: "white",
                img: "./imgforfree/RX-78-2 Gundam.png",
            },
            {
                code: "pink",
                img: "./imgforfree/mau hong rx.png",
            },
        ],
    },
    {
        id: 2,
        title: "Gundam Exia",
        price: 150,
        colors: [
            {
                code: "white",
                img: "./imgforfree/Exia.png",
            },
            {
                code: "pink",
                img: "./imgforfree/exia pink.png",
            },
        ],
    },
    {
        id: 3,
        title: "Wing Gundam",
        price: 200,
        colors: [
            {
                code: "white",
                img: "./imgforfree/wing.png",
            },
            {
                code: "pink",
                img: "./imgforfree/pinkwing.png",
            },
        ],
    },
    {
        id: 4,
        title: "Freedom Strike",
        price: 250,
        colors: [
            {
                code: "white",
                img: "./imgforfree/freedom.png",
            },
            {
                code: "pink",
                img: "./imgforfree/pinkstrike.png",
            },
        ],
    },
    {
        id: 5,
        title: "Ex Valkylander",
        price: 300,
        colors: [
            {
                code: "red",
                img: "./imgforfree/exred.png",
            },
            {
                code: "white",
                img: "./imgforfree/ex.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        // change the current side
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        // change the choosen product
        choosenProduct = products[index]

        // change texts of current Product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
        // asing new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});
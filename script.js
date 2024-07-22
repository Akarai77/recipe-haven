document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
});


const allRecipes = [
    {
        img: "./images/recipes/ind1",
        title: "Butter Chicken",
        content: "Butter + Chicken = Butter Chicken"
    },
    {
        img: "./images/recipes/ind2",
        title: "Masala Dosa",
        content: "Masala + Dosa = Masala Dosa"
    },
    {
        img: "./images/recipes/ind3",
        title: "Maggi Noodles",
        content: "Maggi + Noodles = Maggi Noodles"
    },
    {
        img: "./images/recipes/ital1",
        title: "Pizza",
        content: "Pi + Zza = Pizza"
    },
    {
        img: "./images/recipes/ital2",
        title: "Pasta",
        content: "Pa + Sta = Pasta"
    },
    {
        img: "./images/recipes/ital3",
        title: "Tiramisu",
        content: "Tira + Misu = Tiramisu"
    },
    {
        img: "./images/recipes/amer1",
        title: "Cheeseburger",
        content: "Cheese + Burger = Cheeseburger"
    },
    {
        img: "./images/recipes/amer2",
        title: "American Pie",
        content: "American + Pie = American Pie"
    },
    {
        img: "./images/recipes/amer3",
        title: "Pancake",
        content: "Pan + Cake = Pancake"
    },
    {
        img: "./images/recipes/eng1",
        title: "Fish and Chips",
        content: "Fish + Chips = Fish and Chips"
    },
    {
        img: "./images/recipes/eng2",
        title: "English Breakfast",
        content: "English + Breakfast = English Breakfast"
    },
    {
        img: "./images/recipes/eng3",
        title: "Sheperd's Pie",
        content: "Sheperd + Pie = Sheperd's Pie"
    },
    {
        img: "./images/recipes/chin1",
        title: "Noodles",
        content: "Spices + Semige = Noodles"
    },
    {
        img: "./images/recipes/chin2",
        title: "Momos",
        content: "Mo + Mo = Momos"
    },
    {
        img: "./images/recipes/chin3",
        title: "Fried Rice",
        content: "Fried + Rice = Fried Rice"
    },
    {
        img: "./images/recipes/mex1",
        title: "Taco",
        content: "Crunchy = Taco"
    },
    {
        img: "./images/recipes/mex2",
        title: "Quesadilla",
        content: "Ques + Adilla = Quesadilla"
    },
    {
        img: "./images/recipes/mex3",
        title: "Nachos",
        content: "Bingo Mad Angles = Nachos"
    },
    {
        img: "./images/recipes/arab1",
        title: "Shawarma",
        content: "Chicken + Bread = Shawarma"
    },
    {
        img: "./images/recipes/arab2",
        title: "Kebab",
        content: "Mutton + Stick = Kebab"
    },
    {
        img: "./images/recipes/arab3",
        title: "Butter Chicken",
        content: "Fal + Fel = Falafel"
    },
    {
        img: "./images/recipes/fre1",
        title: "Crossaint",
        content: "Fancy Bread = Crossaint"
    },
    {
        img: "./images/recipes/fre2",
        title: "Rataouille",
        content: "Rat + Dish = Ratatouille"
    },
    {
        img: "./images/recipes/fre3",
        title: "French Toast",
        content: "French + Toast = French Toast"
    },
    {
        img: "./images/recipes/jap1",
        title: "Sushi",
        content: "Raw Fish = Sushi"
    },
    {
        img: "./images/recipes/jap2",
        title: "Rice Balls",
        content: "Rice + Balls = Rice Balls"
    },
    {
        img: "./images/recipes/jap3",
        title: "Mochi",
        content: "Rice Cake = Mochi"
    },
]
const recipesDiv = document.querySelector(".recipes");
for(var i=0;i<27;i++){
    const display = `
            <div class="recipe">
                <img src=${allRecipes[i].img}.jpg alt="food">
                <h3>${allRecipes[i].title}</h3>
                <div class="content">
                    <p>${allRecipes[i].content}</p>
                </div>
            </div>
        `;
        recipesDiv.innerHTML += display;
        console.log(recipesDiv.innerHTML)
}


const filter = (e) =>{
   
    const filterButtons = document.querySelectorAll(".filters button");
    const filter = e.target.value;
    recipesDiv.innerHTML = "";
    var key;
    var offset = 3;
    switch(filter){
        case "ind": key=0;break;
        case "ital": key=3;break;
        case "amer": key=6;break;
        case "eng": key=9;break;
        case "chin": key=12;break;
        case "mex": key=15;break;
        case "arab": key=18;break;
        case "fre": key=21;break;
        case "jap": key=24;break;
        case "all": key=0; offset = 27; break;
    }
    for(var i=key;i<key + offset;i++){
        const display = `
            <div class="recipe">
                <img src=${allRecipes[i].img}.jpg alt="food">
                <p>${allRecipes[i].title}</p>
                <div class="content">
                    ${allRecipes[i].content}
                </div>
            </div>
        `;
        recipesDiv.innerHTML += display;
        console.log(recipesDiv.innerHTML)
    }

    switch(filter){
        case "all":

    }

    console.log(filter)
    filterButtons.forEach((item)=>{
        item.classList.remove('active');
    })
    e.target.classList.add('active');


}
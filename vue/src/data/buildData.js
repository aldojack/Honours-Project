import { v4 as uuidv4 } from 'uuid';

function create(){
    const data = {
        id: uuidv4(), 
        category: category[random(category.length)],
        name: meals[random(meals.length)], 
        prepTime: randomTime(),
        cookTime: randomTime(), 
        isFav: false
    }
    return data
}

function random(max){
    return Math.round(Math.random() * 1000) % max;
}

const meals = [
    "Roast Chicken", "Omelette", "Steak Pie", "Beef Stir Fry", "Fish And Chips", "Tomato And Prawn Risotto", "Pepperoni Pizza", "Cheesy Nachos", "Fajitas", "Baked Potato",
    "Full English Breakfast", "Pancakes", "Chocolate Brownies", "Meatballs With Red Pepper Sauce", "Chicken Cesar Salad", "Beef Burger", "Chips","Macaroni Cheese", "Fillet Steak", "Chicken Wings", 
    "BBQ Ribs", "Tomato Soup", "Prawn Dim Sum", "Pork Gyozas", "Tomato Bruschetta", "Spring Rolls", "Beef Jerky", "Lasagne", "Spagetti Carbonara", "Salmon And Potatoes"
]

const category = [
    "Breakfast", "Lunch", "Dinner"
]

function randomTime(){
    return Math.round(Math.random() * 30)
}

function buildData(count){
    const data = new Array(count);
    for(let i = 0; i<count; i++){
        data[i] = create();
    }
    return data;
}


function updateAll(currentArray){
    return currentArray.map((item) => {
        return{...item, name: meals[random(meals.length)], }
    })
}

function updateOne(item){
    return{...item, name: meals[random(meals.length)], }
}

function favouriteAll(currentArray = []){
    return currentArray.map((item) => {
        return {...item, isFav: true}
    })
}

function deleteAll(){
    const data = []
    return data;
}

export {buildData, deleteAll, favouriteAll, updateAll, updateOne};
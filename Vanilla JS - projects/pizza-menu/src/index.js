import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App () {
    return(
        <div className = "container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header () {
    // const style = { color: "red", fontSize : "48 px", textTransform: "uppercase"}
    const style = {}
    
    return (
        <header className = "header"> 
            <h1 style={style} className = "header"> Dominos Pizza.Co</h1>
        </header>
    )
}

function Footer () {
    const hour = new Date().getHours();
    const openingTime = 8
    const closingTime = 22
    const isOpen = hour >= openingTime && hour <= closingTime
    console.log(isOpen)
    
    return (
    <footer className = "footer"> 
    { isOpen && (
        <div className = "order">   
            <p>
                We're open until {closingTime}:00. Come visit us or order online.
            </p>  
            <button className = "btn"> Order </button>  
        </div>
        )} 
    </footer>
    )
    // return React.createElement("footer", null, "We're currently open!")
}

function Menu () {
    const pizzae = pizzaData;
    return (
    <main className = "menu">
        <h2> Our menu</h2>

        {pizzae &&(
            <ul className = "pizzas">
            {pizzae.map((pizza) => (
            
            <Pizza pizzaObj = {pizza} key = {pizza.name}

            // name= {pizza.name}
            // ingredients = {pizza.ingredients} 
            // price = {pizza.price} 
            // photoName = {pizza.photoName}
            />
                ))}
            </ul>
        )}

        
        {/* <Pizza 
            name = "Pizza Spinacci"
            ingredients= "Tomato , mozarella, spinach and ricotto cheese"
            photoName = "pizzas/spinaci.jpg" 
            price = {10}
        />

        <Pizza 
            name = "Pizza Funghi"
            ingredients = "Tomato, Mushrooms"
            photoName = "pizzas/funghi.jpg"
            price = {10}
        /> */}
    </main>
    )
}

 
function Pizza (props) {
    if (props.pizzaObj.soldOut) return null;
    return (
        <li className = "pizza">
            <img src={props.pizzaObj.photoName}  alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3 >
                <p> {props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
        
    )
}


// function App () {
//     return (
//         <div>
//             <Avatar /> 
//            <div>
//             <Name />
//             <SkillsList /> 
//            </div>
//         </div>
//     )
// }
// function Avatar () {
//     return <img src = "pizzas/salamino.jpg" alt= "its me " /> 
// }
// function Name () {
//     return (
//         <div>
//             <h1> Marc Kennedy</h1>
//             <p> Hi i am a Programmer in this modern era</p>
//         </div>
//     )
// }

// function SkillsList () {
//     return (
//         <div>
//             <Skills skill = "JavaScript" emoji = ":)" color = "grey" />
//             <Skills skill = "Python" emoji = ":))" color = "Yellow" />
//         </div>
//     )
// }
// function Skills (props) {
//     return <div className = "skill" style = {{backgroundColor : props.color}}> 
//         <span className = "container"> {props.skill}</span>
//         <span className = "container"> {props.emoji}</span>
//     </div>
// }



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
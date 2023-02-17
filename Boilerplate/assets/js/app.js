window.addEventListener('DOMContentLoaded', () => {
	
});	

// const products = [
//     {
//         number: 1,
//         product: "Waffle",
//         price: 130,
//     },
//     {
//         number: 2,
//         product: "Coca-cola",
//         price: 90,
//     },
//     {
//         number: 21,
//         product: "Biscuits",
//         price: 100,
//     },
//     {
//         number: 22,
//         product: "Napkins",
//         price: 40,
//     },
// ];

// const arr = [200, 100, 50, 20, 10]
// let coinArr = [];
// //Calculatint the Change

// function calcChange(change) {

   

//     for(let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (change >= 200){
//             change = change - 200;
//             coinArr.push(200);
//         } else if (change >= 100) {
//             change = change - 100;
//             coinArr.push(100);
//         } else if (change >= 50) {
//             change = change - 50;
//             coinArr.push(50);
//         } else if (change >= 20) {
//             change = change - 20;
//             coinArr.push(20);
//         } else if (change >= 10) {
//             change = change - 10;
//             coinArr.push(10);
//         }
//     }
// }

// // Creating the final object

// function finalResult(product, change) {
//     let total = {
//         product: product,
//         change: change,
//     };
//     console.log(total);
// }

// //Main function Vending Machine
// const vendingMashine = function (num, money) {

//     //Cheking if number exist with fint method
    
//     let find = products.find((p) => p.number === num);
//     if(!find) {
//         console.log('Enter valid number');
//         return;
//     }
//     for (let i = 0; i < products.length; i++) {
//         const element = products[i];
//         if(element.number === num) {
//             if(money >= element.price) {
//                 let change = money - element.price
//                 calcChange(change);
//                 finalResult(element.product, coinArr);
//             } else {
//                 console.log(`Not enough money`);
//                 return
//             }
//         }
//     }
// };
// console.log(vendingMashine(22, 50))

console.log('//////////////////////////////////////////////////////')


const products = [
    {
        number: 1,
        product: "Waffle",
        price: 130,
    },
    {
        number: 2,
        product: "Coca-cola",
        price: 90,
    },
    {
        number: 21,
        product: "Biscuits",
        price: 100,
    },
    {
        number: 22,
        product: "Napkins",
        price: 40,
    }
];

products

function calculateChange(money, price) {
    const coinArr = [200, 100, 50, 20, 10];
    let owned = money - price;
    let change = [];
    
    if(owned > 0)
        coinArr.forEach(coin => {
            while(owned >= coin) {// това е за втъщане на ресто целият иф
                change.push(coin);
                owned -= coin
            }
    })
    return change;
}

function vendingMashine1(products, money, productNUmber) {
    let selected = products.find(el => el.number === productNUmber);
    if(!selected) 
        retyrn `Not a valid product number`;

    if(selected.price > money) 
        return `Not enough money`;
    
    return {
        product: selected.product,
        change: calculateChange(money, selected.price),
    }
}
console.log(vendingMashine1(products, 10000, 22));

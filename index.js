import menuArray from "./data.js";

let orderArray = []

document.getElementById('item-tray').addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddBtn(e.target.dataset.add)
    }
})

document.getElementById('order-tray').addEventListener('click', function(e){
    if(e.target.dataset.remove){
        handleDeletebtn(e.target.dataset.remove)
    }
})
function handleAddBtn(itemId){
    const itemObj = menuArray.find(item =>  item.id === Number(itemId))
    if (itemObj){
        orderArray.push(itemObj)
    }
    renderOrder()
}

function handleDeletebtn(index){
    orderArray.splice(index, 1)
    renderOrder()
}

function item(data = name, ingredients, id, price, emoji) {
    const menuItem = menuArray.map( ({name, ingredients, id, price, emoji}) => {
        return `
    <section class="card">
        <div class="menu">
            <h2 class="item-photo">${emoji}</h2>
            <div class="item-name">
                <h3>${name}</h3>
                <h4>${ingredients}</h4>
                <h3>$${price}</h3>
            </div>
        </div>
        <div class="add-item">
                    <i class="fa-solid fa-plus" data-add="${id}"></i>
                </div>
    </section>`
    }).join('')
    return menuItem
}

function placeOrder(){
    if (orderArray.length === 0){
        return " "
    }else {
        const orderHtml = orderArray.map((order, index) =>{
        return `<div class="order-final-item">
                <span>${order.name}</span>
                <button data-remove="${index}">remove</button>
                <span>$${order.price}</span>
                </div>`}
        ).join('')
        
        return `<h2 class="order-head">Your Order</h2>
                ${orderHtml}
                <div class="line"></div>
                <div class="price-total">
                    <span>Total Price:</span>
                    <span>$${getTotal()}</span>
                </div>
                <button class="complete-order">${'Complete Order'}</button>
        `
    }
}


function getTotal(){
    const totalPrice = orderArray.reduce((total, currentElement) => {
        return total + currentElement.price
    }, 0)
    return totalPrice
}


function renderOrder(){
    document.getElementById('order-tray').innerHTML = placeOrder()
}

renderOrder()

document.getElementById('order-tray').innerHTML = placeOrder()
document.getElementById('item-tray').innerHTML = item()
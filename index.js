import menuArray from "./data.js";

let orderArray = []

document.getElementById('item-tray').addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddBtn(e.target.dataset.add)
    }
    
})

function handleAddBtn(itemId){
    const itemObj = menuArray.filter(item =>  item.id === Number(itemId))
    orderArray.push(itemObj)
    console.log(orderArray);
    
    
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
    let orderHtml = `<h2>Your Order</h2>`
    const yourOrder = orderArray.map(order => 
        orderHtml += `
        <span>${order}</span>
        `
    )
        return yourOrder
}
document.getElementById('order-tray').innerHTML = placeOrder()
document.getElementById('item-tray').innerHTML = item()
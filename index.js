import menuArray from "./data.js";

function item(data = name, ingredients, id, price, emoji) {
    const menuItem = menuArray.map( ({name, ingredients, id, price, emoji}) => {
        return `
    <section class="card">
        <div class="menu">
            <h2 class="item-photo">${emoji}</h2>
            <div class="item-name">
                <h3>${name}</h3>
                <h4 class="ingredients">${ingredients}</h4>
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

document.getElementById('item-tray').innerHTML = item()
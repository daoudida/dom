const products = [
    {
        id: 0,
        image: 'img/61LqlCw1JRL.jpg',
        title: 'casque p9',
        price: 10.000,
    },
    {
        id: 1,
        image: 'img/Matrice-350-RTK-DJI.png',
        title: 'Drone',
        price: 260.000,
    },
    {
        id: 2,
        image: 'img/png-clipart-apple-watch-series-3-gps-navigation-systems-apple-watch-series-1-space-aluminum-electronics-apple-watch.png',
        title: 'Apple watch',
        price: 30.000,
    },
    {
        id: 3,
        image: 'img/pngtree-gamebox-5-desigh-with-controller-png-image_5415243.jpg',
        title: 'Play station 5',
        price: 250.000,
    }
];

let cart = [];

function addtocart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push({...product});
        displaycart();
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    const cartItems = document.getElementById("cartItem");
    const cartCount = document.getElementById("count");

    cartCount.innerHTML = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "FCFA " + total.toFixed(2);
    } else {
        cartItems.innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "FCFA " + total.toFixed(2);

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>FCFA ${price.toFixed(2)}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
    }
}

// Display the products
document.getElementById('root').innerHTML = products.map((product, index) => {
    const { image, title, price } = product;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>FCFA ${price.toFixed(2)}</h2>
                <button onclick='addtocart(${product.id})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

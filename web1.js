const myProducts = [
  {
    id: 1,
    productDesc: "Authentic Signed Lando Norris British GP helmet replica with Built in Dolby Stereo system",
    price: 17500,
    image: "./productImage/10.webp",
  },
  {
      id: 1,
      productDesc: "Authentic Signed Oscar Piastri British GP helmet replica with Built in Dolby Stereo system",
      price: 17000,
      image: "./productImage/14.webp",
    },
    {
      id: 2,
      productDesc: "Authentic Mclaren British GP halo signed by Zack Brown",
      price: 23700,
      image: "./productImage/11.webp",
    },
    {
      id: 3,
      productDesc: "Aston martin AMR15 Austrian halo with AMR limited Sticker",
      price: 21700,
      image: "./productImage/2.webp",
    },
    {
      id: 4,
      productDesc: "Framed Picture of Alonso and lance's Aston martins at the Bahrain GP",
      price: 17500,
      image: "./productImage/1.webp",
    },
    {
      id: 5,
      productDesc: "Fernando Alonso Acrylic side End plate",
      price: 17500,
      image: "./productImage/3.webp",
    },
    {
      id: 6,
      productDesc: "Authentic Signed Nico HulkenBerg's British GP helmet replica with Built in Dolby Stereo system",
      price: 17500,
      image: "./productImage/9.webp",
    },
    {
      id: 7,
      productDesc: "Fernando Alonso's Bahrain podium photograph with body work",
      price: 17500,
      image: "./productImage/10.webp",
    },
    {
      id: 8,
      productDesc: "Sabastian vettel's 2009 British gp helmet with built in Race engineer Audio",
      price: 17500,
      image: "./productImage/9.webp",
    },
    {
      id: 9,
      productDesc: "Lando Norris British GP 2020 Podium Framed Image with body work",
      price: 17500,
      image: "./productImage/6.webp",
    },
    {
      id: 10,
      productDesc: "Meredes  2019 British pole framed photograph with body work",
      price: 17500,
      image: "./productImage/5.webp",
    },
  ];

let carts = JSON.parse(localStorage.getItem("AUT__cart")) || [];

$(".the-shop-items").empty();
myProducts.forEach((product) => {
const { id, productDesc, price, image } = product;
$(".the-shop-items").append(`
  <div class="the-main-item">
      <div class="item-image"><img class="hrc" src="${image}" alt=""></div>
      <div class="item-desc">${productDesc}</div>
      <div class="price-tag">
          <div class="price">₦${price}</div>
          <div onclick="addToCart(${id})" class="add-to-cart"><i class='fa fa-shopping-cart'></i>Add to Cart</div>
      </div>
  </div>
  `);
  
});



const fStore = [
{
  id: 121,
  type: "headGear",
  productDesc: "Mclaren velcro strap hat",
  price: 1750,
  image: "./f1Store/1.webp",
},
{
  id: 122,
  type: "headGear",
  productDesc: "Mercedes Bucket hat",
  price: 6500,
  image: "./f1Store/2.webp",
},
{
  id: 123,
  type: "headGear",
  productDesc: "Mercedes velcro strap hat",
  price: 1500,
  image: "./f1Store/3.webp",
},
{
  id: 124,
  type: "Shirt",
  productDesc: "Mercedes BLM T-shirt",
  price: 1100,
  image: "./f1Store/4.webp",
},
{
  id: 125,
  type: "Shirt",
  productDesc: "Mercedes Summer Sea T-shirt ",
  price: 1900,
  image: "./f1Store/5.webp",
},
{
  id: 126,
  type: "Pants",
  productDesc: "Mercedes BLM joggers",
  price: 1500,
  image: "./f1Store/6.webp",
},
{
  id: 127,
  type: "footWear",
  productDesc: "Williams Sneakers",
  price: 1200,
  image: "./f1Store/7.webp",
},
{
  id: 128,
  type: "headWear",
  productDesc: "Mercedes George Russel Themed hat",
  price: 1950,
  image: "./f1Store/8.webp",
},
{
  id: 129,
  type: "headWear",
  productDesc: "Mercedes Lewis Hamilton Themed hat",
  price: 1950,
  image: "./f1Store/9.webp",
},
{
  id: 130,
  type: "footWear",
  productDesc: "Mercedes replica racing shoes",
  price: 1950,
  image: "./f1Store/10.webp",
},
{
  id: 131,
  type: "shirt",
  productDesc: "RedBull 2023 T-shirt",
  price: 1950,
  image: "./f1Store/11.webp",
},
{
  id: 132,
  type: "shirt",
  productDesc: "RedBull 2023 long sleeved T-shirt",
  price: 1950,
  image: "./f1Store/12.jpg",
},
{
  id: 133,
  type: "shirt",
  productDesc: "RedBull 2023 Water Bottle",
  price: 1950,
  image: "./f1Store/13.webp",
},
{
  id: 134,
  type: "shirt",
  productDesc: "Pirelli hat",
  price: 1950,
  image: "./f1Store/14.webp",
},
{
  id: 135,
  type: "shirt",
  productDesc: "Alphatuauri shorts",
  price: 1950,
  image: "./f1Store/15.webp",
},
{
  id: 136,
  type: "shirt",
  productDesc: "Scuderia Ferrari driver replica racing Shoes",
  price: 1950,
  image: "./f1Store/16.jpg",
},
{
  id: 137,
  type: "shirt",
  productDesc: "RedBull sneakers",
  price: 1950,
  image: "./f1Store/17.webp",
}
];



$(".f1st").empty();
fStore.forEach((product) => {
const { id, productDesc, price, image } = product;
$(".f1st").append(`
  <div class="the-main-item">
      <div class="item-image"><img class="hrc" src="${image}" alt=""></div>
      <div class="item-desc">${productDesc}</div>
      <div class="price-tag">
          <p class="price">₦${price}</p>
          <div onclick="addToFart(${id})" class="add-to-cart"><i class='fa fa-shopping-cart'></i>Add to Cart</div>
      </div>
  </div>
  `);
});



function addToCart(id) {
const findProduct = carts.find((cart) => cart.id === id);
if (findProduct) {
  carts = carts.map(cart => {
    if(cart.id === id){
      return {...cart, qty: cart.qty + 1}
    }
    else return cart;
  })
  showCartContent(carts)
} else {
  const product = myProducts.filter((product) => product.id === id)[0];
  carts = [...carts, { ...product, qty: 1 }];
  localStorage.setItem("AUT__cart", JSON.stringify(carts));
  showCartContent(carts)
}
}


function addToFart(id) {
  const findProduct = carts.find((cart) => cart.id === id);
  if (findProduct) {
    carts = carts.map(cart => {
      if(cart.id === id){
        return {...cart, qty: cart.qty + 1}
      }
      else return cart;
    })
    showCartContent(carts)
  } else {
    const product = fStore.filter((product) => product.id === id)[0];
    carts = [...carts, { ...product, qty: 1 }];
    localStorage.setItem("AUT__cart", JSON.stringify(carts));
    showCartContent(carts)
  }
  }
// alirght the solution is on line 242
function showCartContent(carts) {
const cartWrap = $(".cart-container"),
  cartInfo = $(".cart-col"),
  // cartNumber = $(".fables-cart-number"),
  cartTotal = $(".pri-tag");
cartWrap.empty()
// cartNumber.html(carts.length);
cartInfo.html(carts.length);
carts.forEach((cart) => {
  const { id, price, productDesc, image, qty } = cart;
  cartWrap.prepend(`
  <div class="cartInThere"> 
      <div class="cartInThere-pic"><img class="hrc" src="${image}" alt="${productDesc}"></div>
      <div class="cartInThere-desc">${productDesc}</div>
      <div class="QTY">
          <div class="QTY-btn add"><p>+</p></div>
          <input type="number" min="0" max="100" required value="1"  class="qty-num">
          <div class="QTY-btn sub"><p>-</p></div>
      </div>
      <div class="cartInThere-price">
          <p class="pri-tag">₦${price}</p>
          <div class="remove" onmousedown="removeFromCart(${id})">Remove</div>
      </div>
  </div>  
  `);
})
const total = carts.reduce(function(oldValue, cart){return oldValue + (cart.qty * cart.price)}, 0)
cartTotal.html(`&#e10600;${total.toLocaleString()}`)
}
// so on line 316 🔥🔥🔥🔥🔥
showCartContent(carts)


function removeFromCart(id){
  console.log({id});
  carts = carts.filter(cart => cart.id !==id);
  showCartContent(carts)
}

function allowLogin(){
  let loginBtn =$(".signbtn")
  loginBtn.attr("disabled", false)
}

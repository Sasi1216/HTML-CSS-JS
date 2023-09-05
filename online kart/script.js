const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },
  ];
  const productscontainer=document.querySelector('.products')
  const catogorylist=document.querySelector(".catogory_list")
  function displayproduct(products){
    if(products.length){
    const product_details=products.map((product)=>`      
     <div class="Product">
    <div class="img">
        <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="product-details">
        <span class="name">${product.name}</span>
        <span class="amt">${product.amt}</span>
        <span class="seller">${product.seller}</span>
    </div>
</div>`).join("")

productscontainer.innerHTML=product_details
}else{
  productscontainer.innerHTML="<h3>No Product Available<h3>"
}
  }

function setcatogories(){
    const allcatogories=data.map((product)=>product.catagory)
    const catagories=["All", ...allcatogories.filter((product,index)=>{
        return allcatogories.indexOf(product)===index
    })]

    catogorylist.innerHTML=catagories.map((catagory)=>`<li>${catagory}<li>`).join("")

catogorylist.addEventListener("click",(e)=>{
    const selectcatagories=e.target.textContent
    selectcatagories==="All"?displayproduct(data):displayproduct(data.filter((product)=>product.catagory==selectcatagories))
})
}
const pricerange=document.querySelector("#pricerange")
const pricevalue=document.querySelector(".pricevalue")

function setprice() {
    const pricelist=data.map((product)=>product.amt)
    const minprice=Math.min(...pricelist)
    const maxprice=Math.max(...pricelist)
    pricerange.min=minprice
    pricerange.max=maxprice
    pricevalue.textContent="Rs." + maxprice
    pricerange.addEventListener("input",(e)=>{
        pricevalue.textContent="Rs."+ e.target.value
        displayproduct(data.filter((product)=>product.amt<=e.target.value))
    })
}

const inputs=document.querySelector("#inputs")
inputs.addEventListener("keyup",(e)=>{
  const value=e.target.value.toLowerCase().trim()
  if(value){
    displayproduct(data.filter((product)=>product.name.toLowerCase().indexOf(value)!==-1))

  }else{
    displayproduct(data)
  }
})


displayproduct(data)
setcatogories()
setprice()
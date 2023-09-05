const btncart=document.querySelector('#cart-icon')
const cart=document.querySelector('.cart')
const btnclose=document.querySelector('#close')


btncart.addEventListener('click',()=>{
    cart.classList.add("cart-active")
})

btnclose.addEventListener('click',()=>{
    cart.classList.remove("cart-active")
})

document.addEventListener('DOMContentLoaded',Loadfood);

function Loadfood(){
    Loadcontent()
}

function Loadcontent(){
    let btnremove=document.querySelectorAll(".cart-remove")
    btnremove.forEach((btn)=>{
        btn.addEventListener("click",removeitem)
    })
    let qtyelement=document.querySelectorAll(".cart-quantity")
    qtyelement.forEach((input)=>{
        input.addEventListener("change",changeqty)
    })

    let cartbtn=document.querySelectorAll(".add-card")
    cartbtn.forEach((addcard)=>{
        addcard.addEventListener("click",addcartei)
       
    })
    updatetotal()
}

function removeitem(){
    if(confirm("Are you sure to remove")){
        let title=this.parentElement.querySelector('.cart-food-tittle').innerHTML
        itemlist=itemlist.filter(el=>el.title!=title)
    this.parentElement.remove();
    Loadcontent()
}

}

function changeqty(){
    if(isNaN(this.value)||this.value<1){
        this.value=1
    }
    Loadcontent()
}
let itemlist=[]

function addcartei(){
    let food=this.parentElement
    let title=food.querySelector(".food-tittle").innerHTML
    let price=food.querySelector(".food-price").innerHTML
    let img=food.querySelector(".food-img").src

    let newproduct={title,price,img}
    
    
    if(itemlist.find((el)=>el.title==newproduct.title))
    {
        alert("product Already added in Card")
        return;
    }else{
        itemlist.push(newproduct)
    }
    let newproductelment= createcartproduct(title,price,img)
    let element= document.createElement("div")
    element.innerHTML=newproductelment
    let cartbasket=document.querySelector(".cart-content")

    cartbasket.append(element)
    Loadcontent()
   
}
function createcartproduct (title,price,img)
{
    

    return `
    <div class="cart-box">
    <img src="${img}" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-tittle">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon name="trash-outline" class="cart-remove"></ion-icon>
    
</div>
   `
}
function updatetotal(){
    const cartitem=document.querySelectorAll(".cart-box")
    const totalvalue=document.querySelector(".total-price")
 
    let total=0

    cartitem.forEach(product=>{
        let priceelamet=product.querySelector(".cart-price")
        let price=parseInt(priceelamet.innerHTML.replace("Rs.",""))
        let qty=product.querySelector(".cart-quantity").value
        total+=(price*qty)
        product.querySelector(".cart-amt").innerText="Rs."+price*qty
       
        
        
    });
    totalvalue.innerHTML='Rs.'+total


    const cartcount=document.querySelector("#card-count")
 
    let count=itemlist.length
    cartcount.innerHTML=count
    if(count==0){
        cartcount.style.display='none'
    }else{
        cartcount.style.display='block'
    }
}

const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password2")

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

String.prototype.isAlpha=function(){
    return !!this.match(/^[a-zA-Z]*$/)
}



function checkrequire(input){
    input.forEach(input => {
        if(input.value.trim()===""){
            
            errorinput(input,`${getinput(input)} is Required`)
        }else{
            successinput(input)    
        }
    });

}

function errorinput(input,message){
    const formgroup=input.parentElement
    formgroup.className='form-group error'
    const p=formgroup.querySelector("p")
    p.innerHTML=message
}
function successinput(input){
    const formgroup=input.parentElement
    formgroup.className='form-group success'
    const p=formgroup.querySelector("p")
    p.innerHTML=""
}
function succuss(input){
    const formsuccess=input.parentElement;
    formsuccess.className='success'
}

function getinput(input){
    return input.getAttribute("data-name")
}

function checklength(input, min, max){
    const data=input.value.trim().length
    if(data<min){
        errorinput(input,`${getinput(input)} Must be aleast greater than ${min} charactor`)

    }else if(data>max){
        errorinput(input,`${getinput(input)} Mus be aleast less than ${max} charactor`)

    }else{
        successinput(input)  
    }
}

function checkcomfirmpasslength(password,password2){
    if(password.value!=password2.value){
        errorinput(password2,`${getinput(password2)} does not match`)

    }
}

function checkemail(input){
    if(!input.value.trim().isEmail()){
        errorinput(input,`This is not a email Id`)
        
    }
}

function checkAlpha(input){
    if(!input.value.trim().isAlpha()){
        errorinput(input,`${getinput(input)} Must be Alphabet`)

        
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    checkrequire([username,email,password,password2]);
    checklength(username, 5, 10)
    checklength(password, 5,10)
    checkcomfirmpasslength(password,password2)
    checkemail(email)
    checkAlpha(username)
})
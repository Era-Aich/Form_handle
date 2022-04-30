let form=document.querySelector("#form")

// let name=form.querySelector("name")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let address=document.querySelector("#address")
let BD=document.querySelector("#BD")

form.addEventListener("submit",me)

function me(e){
    e.preventDefault();
   let User={
       Email:email.value,
       Password:password.value,
       Address:address.value,
       BD:BD.value
   }

   console.log(User)
    }

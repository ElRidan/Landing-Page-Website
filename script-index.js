const mobileNav = document.getElementById("nav-bar");
const mobileBar = document.getElementById("bar");
const mobileClose = document.getElementById("close");

if(mobileBar){
    mobileBar.addEventListener('click', ()=>{
        mobileNav.classList.add("active");
    })
}

if(mobileClose){
    mobileClose.addEventListener('click', ()=>{
        mobileNav.classList.remove("active");   
    })
}




// const email_Button = document.getElementById("email-button");
// const mobile_Button = document.getElementById("mobile-button");
// const linkedin_Button = document.getElementById("linkedin-button");
// if(email_Button){
//     email_Button.addEventListener= ('click',() =>{
//         window.onclick.location.href="mailto:nesquivelwork@gmail.com";
//         alert("clicked");
//     })
// }
// if(mobile_Button){
//     mobile_Button.addEventListener= ('click',() =>{
//         window.location.href="https://wa.me/+19018711073";
//         alert("clicked");
//     })
// }
// if(linkedin_Button){
//     linkedin_Button.addEventListener= ('click',() =>{
//         window.location.href="https://www.linkedin.com/in/nadir-j-esquivel-915282302/";
//         alert("clicked");
//     })
// }

   
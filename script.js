// change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)

})

// faq section scripting
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className ==='bx bxs-message-dots'){
            icon.className='bx bx-message-dots';


        }else{
            icon.className="bx bxs-message-dots";
        }
    })
})

// show hide nav menu 
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#menu_open");
const closeBtn=document.querySelector("#menu_close");

menuBtn.addEventListener('click',()=>
{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

// close nav menu
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener('click',closeNav)
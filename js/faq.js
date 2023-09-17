const accBtn = document.querySelectorAll(".accordion-header");
const accContent = document.querySelectorAll(".accordion-body");
accBtn.forEach((btn) => {
    btn.addEventListener('click',(e)=>{

        accContent.forEach((acc)=>{
            if(e.target.nextsibling !== acc && 
                acc.classList.contains("active"))
                {
                    acc.classList.remove("active");
                   accBtn.forEach((btn)=> btn.classList.remove("active")) 
                }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle("active")
        btn.classList.toggle("active");
    }
    );
});
window.onclick= (e)=>{
    if(!e.target.matches(".accordion-header")){
        accContent.forEach((acc)=> acc.classList.remove("active"));
        accBtn.forEach((btn)=> btn.classList.remove("active"));
    }
};

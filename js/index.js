      // nav as sidebar
      function showsidebar(){
        const sidebar=document.querySelector('.overlay');
        sidebar.style.right='0';
      
      };
      function hidesidebar(){
        const sidebar=document.querySelector('.overlay');
        sidebar.style.right='-1600px';
      };
      // floor products slide buttons
    const boxfloor = document.getElementById("slide-floor");
    const leftbuttonfloor = document.getElementById("next-slide-floor");
    const rightbuttonfloor = document.getElementById("prev-slide-floor");
    
    leftbuttonfloor.addEventListener("click" , ()=>{
        boxfloor.style.scrollBehavior= "smooth";
        boxfloor.scrollLeft+= 400;
        
    });
    
    rightbuttonfloor.addEventListener("click" , ()=>{
        boxfloor.style.scrollBehavior= "smooth";
        boxfloor.scrollLeft-=400;
        
    });
    // send review alert message
 const buttons = document.querySelectorAll(".send-alert"),
 toast = document.querySelector(".toast"),
 closeIcon = document.querySelector(".close"),
 progress = document.querySelector(".progress");

let timer1, timer2;

buttons.forEach(button => {
button.addEventListener("click", () => {
   toast.style.display = "block";
   toast.classList.add("alert");
   progress.classList.add("alert");

   timer1 = setTimeout(() => {
       toast.classList.remove("alert");
   }, 5000); //1s = 1000 milliseconds

   timer2 = setTimeout(() => {
       progress.classList.remove("alert");
       toast.style.display = "none";
   }, 5300);
});
});

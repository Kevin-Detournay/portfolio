
  



const app = {
  scrollFunction:()=>{
    
    document.onscroll=()=>{
      
      if (document.documentElement.scrollTop >window.screen.height) {
        document.querySelector(".contact").style.top="0"
      }else{
        document.querySelector(".contact").style.top="-50px"
      }
    }
    


  },


  

  init:()=>{
    app.scrollFunction()
    AOS.init()
    new Rellax('.rellax')
  
  },



}


      document.addEventListener('DOMContentLoaded', app.init);

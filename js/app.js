
  



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

    toggleIsHidden:()=>{
      const items=document.querySelectorAll('.item')
      
      items.forEach(item => {
     
        item.addEventListener('mouseover',()=>{
         const appear=item.querySelector(".item__description")
         appear.classList.remove('is-hidden')
      
        })
        item.addEventListener('mouseout',()=>{
         item.querySelector(".item__description").classList.add('is-hidden')
         })       
      })
      
    },

  init:()=>{
    app.scrollFunction()
    AOS.init()
    new Rellax('.rellax')
    app.toggleIsHidden()
  
  },



}


      document.addEventListener('DOMContentLoaded', app.init);

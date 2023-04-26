

//I want to click on the plus button so i shows the text, hide the plus button, and show the minus button


//using selectors inside the element

 const questions = document.querySelectorAll('.question')

 questions.forEach(function(article){
     const btn = article.querySelector('.question-btn')
     btn.addEventListener('click', function(){
         questions.forEach(function(answer){
             if (answer !== article){
                 answer.classList.remove('show-text')
             }
         })
         article.classList.toggle('show-text')
     })
 })




// // // traversing the dom

//  const buttons = document.querySelectorAll('.question-btn')

//  buttons.forEach(function(btn){
//      btn.addEventListener('click', function(e){

//        const answer =  e.currentTarget.parentElement.parentElement

//        answer.classList.toggle('show-text')
//      })
//  })


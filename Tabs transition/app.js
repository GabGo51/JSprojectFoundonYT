//invoke the buttons, the content tabs and the parent container 

const btns = document.querySelectorAll('.tab-btn') 

const about = document.querySelector('.about')

const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active from other or all buttons
        btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active')
        });
        //hide other content / all content and display the one with matching id
        articles.forEach(function(article){
            article.classList.remove('active')

        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
});
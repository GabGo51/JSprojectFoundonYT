// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const rdmBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0

//load initial item
                        //activate whenever the page initially loads
window.addEventListener('DOMContentLoaded' , function(){
  showPerson(currentItem);
});

//show person based on item
function showPerson (person){
   //assign the arr obj to a varible so you can acces it easier 
   const item = reviews[person];
   //like this
   //assigning the source of the img to the source found in the array of obj
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  //condition for when you reach the end of the array
  //returning the value to 0 so you go at the start
  if (currentItem > reviews.length - 1){
     currentItem = 0;
  }
  showPerson(currentItem);

  
});

//show prev person

prevBtn.addEventListener('click', function(){
  currentItem--;

  //condition for when user go back at the beggining of the array
  //returning the value to 3 (arr.length -1) so you go at the end
  if (currentItem < 0 ){
     currentItem = reviews.length - 1 ;
  }
  showPerson(currentItem);

  
});

rdmBtn.addEventListener('click',function(){
  currentItem = Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
} )


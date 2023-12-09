$(document).ready(function(){  
    function lemans(newHov, oldHov){
        $(newHov).hover(function(){
            $(oldHov).css({display: "flex"});
        },
        function(){
            $(oldHov).css({display: "flex"})
        })

        $(oldHov).hover(function(){
            const nav = $(oldHov)
            nav.css({display: "flex"})
            let wey = $(newHov)
            wey.css({background: "#1f1f27"})
        },
        function(){
            $(oldHov).css({display: "none"})
            $(newHov).css({background: "#e10600"})


        })
    }
    inc = 0

    $(".add").on("click", function(){

      
      num = $(".qty-num")
      inc +=1
      num.val(inc)
      console.log(inc)
      
    });
    $(".sub").on("click", function(){

      
      num = $(".qty-num")
      inc -= 1
      num.val(inc)
      console.log(inc)
      if(inc < 1){
        alert("item cannot be less than")
        num.val(1)
      }
  
    });
   
    lemans(".latest-cont", ".one")
    lemans('.sched', '.sec')
    lemans('.result', '.third')
    lemans('.d-tile', '.fourth')
    lemans('.teams', '.fifth')
    lemans(".latest-cont", ".one")
    lemans('.game', '.sixth')

    setInterval(function() {
        let scrollTop = $ (".box-cont-left").scrollTop();
        $(".box-cont-left").scrollTop(scrollTop + 1);
    }, 50);

    setInterval(function() {
        let theHieght = $(".left-inner").height()
        console.log(theHieght + "surely theres an end")
        let scrollTop = $ (".left-inner").scrollTop();
        $(".left-inner").scrollTop(scrollTop + theHieght);
    }, 15000);


    $(".right-shop").on("click", function(){
        $(".cart-container").slideToggle(500)
    });

    let parent = $("body");
    let child = $(".scroll-cont-right");
    
    // child.scroll(function() {
    //     if (child[0].scrollHeight - child.scrollTop() === child.outerHeight()) {
    //     parent.css("overflow", "auto"); // Enable scroll on the parent div
    //     } else {
    //     parent.css("overflow", "hidden"); // Disable scroll on the parent div
    //     }
    // });
    
    // $('.left-inner').scroll(function(){
    //     let scrollHeight = $(this).prop('scrollHeight');
    //     let scrollTop = $(this).scrollTop();
    //     let divHeight = $(this).height();
    //     let maxScroll = scrollHeight - divHeight

    //     if(scrollTop === maxScroll) {
    //         console.log("now the end has come and the tribulations of this matter is at an end")
    //     }
    // })
    // function theDrop(navHov,dropNav){
    //     $(navHov).hover(function(){
    //         $(dropNav).toggle(500, function(){
    //           let  hower = $(navHov)
    //             hower.toggleClass('coor')
    //             $(dropNav).css('display','flex');
                
    //         });
            
           
    //     })
    // }

    // function land(seh){    
    //     $(seh).hover(function(){
    //         $(seh).toggle(500, function(){
    //         let  ger = $(seh)
    //             ger.toggleClass('war')
                
    //         });
            
    //         // $(seh).css('visibility','visible');
    //     })
    // }

    // land('.one')

    // theDrop('.latest-cont', '.one')
    // theDrop('.sched', '.sec')
    // theDrop('.result', '.third')
    // theDrop('.d-tile', '.fourth')
    // theDrop('.teams', '.fifth')
    // theDrop('.game', '.sixth')
    // function visi(vis){
    //     $(visi).hover(function(){
    //         let ver = $(vis)
    //         ver.toggle('display','flex');
            
    //     })
    // }
    // visi('.one')

 
    // function theTogg(navClick, barDrop){
    //     $(navClick).click(function(){
    //         $(barDrop).toggle(500, function(){
    //             shine = $(navClick)
    //             shine.toggleClass('coor')
    //         });
    //         $(barDrop).css('display','flex');
            
    //     });
    // }
    // theTogg('.latest-cont', '.one')
    // theTogg('.sched', '.sec')
    // theTogg('.result', '.third')
    // theTogg('.d-tile', '.fourth')
    // theTogg('.teams', '.fifth')
    // theTogg('.game', '.sixth')


    // $.fn.myFunction = function(param1, param2) {
        
    //         $(param1).click(function() {
    //             $('html, body').animate({
    //                 scrollTop: $(param2).offset().top
    //             }, 2000);
    //         });
    //     };
    
    // myFunction(".sched", ".sec")
  


   $(".ren").on("click", function(){

        $(".nav-options").slideToggle('500',function(){
            const toggleBtn2 = $(".nav-options")
            toggleBtn2.css({visibility: "visible"})
            const toggleBtn1 = $(".navBar")
            toggleBtn1.css({visibility: "hidden"})
            
        })
   })
   
   $(".rent").on("click", function(){
        const toggleBtn2 = $(".nav-options")
        toggleBtn2.css({visibility: "hidden"})
   })

const racpaddok = [
    {
        id:100,
        race: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "Paddock 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id:101,
        race: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "Paddock 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id:102,
        race: "FORMULA 1 PIRELLI GRAN PREMIO D ITALIA 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "Paddock 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id: 103,
        race: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "Paddock 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },


    
]

    
$(".innerPadCont").empty();
racpaddok.forEach((product) => {
const {  race, img, cont, date, amount, id } = product;
$(".innerPadCont").append(`
    <div id = "${id}" class="inner-four">               
        <div class="upper-card">
            <div class="four-pic">
                <img class="four-img" src="${img}" alt="">
            </div>
            <div class="four-txt">${race}</div>
        </div>
        <div class="booking-tag">
            <div class="country-tag"><img width="20px" height="20px" src="./images/HUNG0001.gif" alt=""></div>
            <div class="location">${cont}</div>
            <div class="date">${date}</div>
            <div class="price"><p>from</p><p class="euro">${amount}</p></div>
            <div class="book-now">BOOK NOW</div>
        </div>  
    </div>   

  `);

// second-feed
const raceDay = [
    {
        id:100,
        race: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id:101,
        race: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id:102,
        race: "FORMULA 1 PIRELLI GRAN PREMIO D ITALIA 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },
    {
        id: 103,
        race: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
        img: "./images/tsunoda-monaco-race-2023.webp",
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,
    },


    
]

    
$(".tickets-four").empty();
raceDay.forEach((product) => {
const {  race, img, cont, date, amount, id } = product;
$(".tickets-four").append(`
    <div id = "${id}" class="inner-four">               
        <div class="upper-card">
            <div class="four-pic">
                <img class="four-img" src="${img}" alt="">
            </div>
            <div class="four-txt">${race}</div>
        </div>
        <div class="booking-tag">
            <div class="country-tag"><img width="20px" height="20px" src="./images/HUNG0001.gif" alt=""></div>
            <div class="location">${cont}</div>
            <div class="date">${date}</div>
            <div class="price"><p>from</p><p class="euro">${amount}</p></div>
            <div class="book-now">BOOK NOW</div>
        </div>  
    </div>   

  `);

  
$(".inner-four").hover(function(){
    let tagHeight = $(".inner-four").height()
    let scrollTop = $(".inner-four").scrollTop();
    $(".inner-four").scrollTop(scrollTop + tagHeight);
    console.log(tagHeight)
})
$(".inner-four").mouseleave(function(){
    let tagHeight = $(".inner-four").height()
    let scrollTop = $(".inner-four").scrollTop();
    $(".inner-four").scrollTop(scrollTop - tagHeight);
    console.log(tagHeight)
})
});



const bookhue = [
    {
        id:90,
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        date: "Circuit de Spa-Francorchamps 28-30 jul",
        amount: 250,

    },
    {
        id:91,
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 PIRELLI GRAN PREMIO D ITALIA 2023",
        date: "Circuit de barcelona 15-18 april",
        amount: 190,
    },
    {
        id:92,
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 HEINEKEN DUTCH  GRAND PRIX 2023",
        date: "Circuit de monaco 10-13 april",
        amount: 220,
    },
    {
        id:93,
        img: "./images/tsunoda-monaco-race-2023.webp",
        cont: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
        date: "Marina bay street circuit 10-13 april",
        amount: 270,
    },
    
]

// $(".inner-four").empty();
// bookhue.forEach((product) => {
// const {  img, cont, date, amount } = product;
// $(".inner-four").append(`
//         <div class="booking-tag">
//             <div class="country-tag"><img width="20px" height="20px" src="${img}" alt=""></div>
//             <div class="location">${cont}</div>
//             <div class="date">${date}</div>
//             <div class="price"><p>from</p><p class="euro">${amount}</p></div>
//             <div class="book-now">BOOK NOW</div>
//         </div>  


//   `);
// });


    let images = ['./images/paddock_business_bg.jpg ', './images/paddock_bg.jpg', './images/hospitality_bg.jpg']; // Array of image URLs
    let colors = ['#e10600', '#e10600', '#e10600']; // Array of background colors
    let wordText = ['<p class = "thick">f1 PADDOCK CLUB™ FOR BUSINESS </p><p>Build lasting among the world most innovate brands. Be immeresed in every pit stop and start line surge with seats right above the pit lane</p>','<p class = "thick">f1 PADDOCK CLUB™ </p><p>F1 from above the pit lane. Sports hospitality that gets you inside, not just trackside. wwith three days of unrivalled entertainment. A global event that truly local</p>','<p class = "thick">LOCAL HOSPITALITY </p><p>Every Grand Prix weekend has its own chracter, and  unique hospitality experiences. Find out how to get the most out of your F1 weekend</p>']
    let currentImage = 0;
    let currentColor = 0;
    let currentWord = 0
    let carousel = $('.hos-div');
    let changeText = $('.weed')
    let colorDivs = $('.hos-type');

    function showText(index){
        changeText.html(wordText[index])
    }
  
    function showImage(index) {
      carousel.css('background-image', 'url(' + images[index] + ')');
    }
  
    function showColor(index) {
      colorDivs.css('background-color', '');
      colorDivs.eq(index).css('background-color', colors[index]);
    }
  
    function nextSlide() {
      currentImage++;
      if (currentImage >= images.length) {
        currentImage = 0;
      }
      showImage(currentImage);
  
      showColor(currentColor);
      showText(currentWord)
      currentColor++;
      if (currentColor >= colors.length) {
        currentColor = 0;
      }
      currentWord++;
      if(currentWord >= wordText.length){
        currentWord = 0
      }
    }
  
    setInterval(nextSlide, 2000); // Change slide every 2 seconds
  });

//   differnc🔥🔥

//   let images = ['./images/alfa-romeo-racing.webp', './images/2022floorF1-Tech-Tuesday.jpg', './images/DT_A_spot_EN.webp']; // Array of image URLs
//   let colors = ['#fff','#e10600','blue']
//   let currentImage = 0;
//   let currentColor = 0;

//   let carousel = $('.wind');
//   let color1 = $('#a-red1');
//   let color2 = $('#a-red2');
//   let color3 = $('#a-red3');
//   function showImage(index) {
//     carousel.css('background-image', 'url(' + images[index] + ')');
//   }

//   function showColor(index) {
//     color1.css('background-color', colors[index]);
//     color2.css('background-color', colors[index]);
//     color3.css('background-color', colors[index]);
//   }

//   function nextSlide() {
//     currentImage++;
//     if (currentImage >= images.length) {
//       currentImage = 0;
//     }
//     showImage(currentImage);
//     showColor(currentColor);
//   }

  
//   setInterval(nextSlide, 2000); // Change image every 2 seconds
function countdown() {
    var countdownDate = new Date("December 31, 2023 23:59:59").getTime();

    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $(".countdown").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(countdownInterval);
        $(".countdown").text("EXPIRED");
      }
    }, 1000);
  }

  countdown();
});

var validPassword = 123;
var validUsername = "chuks";
var loginForm = $('.inform');
var response = $('.response');

loginForm.on('submit', function(e) {
  e.preventDefault();
  var username = $('#username').val().toLowerCase();
  var password = $('#password').val();
  
  if (username == validUsername && password == validPassword) {
    response.html('<div class="success">Login successful.<img class="naimg" src="./kindpng_4046892.png" alt="f1 png" width="279px" height="70px"></div>');
    setTimeout(function() {
      window.location.href = './web.html';
    }, 2000);
  } else {
    response.html('<div class="error">Invalid credentials.</div>');
  }
});



// const, let
// in js
// const myBox = document.querySelector(".my-box");
// myBox.style.background = "#fac451";
// myBox.style.color = "#234042";
// myBox.style.textAlign = "center";
// myBox.style.padding = "2rem";

const human = {
    id: 1,
    name : "john",
    age : 20
}
// in jquery
$(document).ready(function(){
    // const box = $(".my-box:last").prev();
    const box = $(".my-box");
    box.css("color","#fff")
    box.css("background", "#fac451")
    box.css({padding: "2rem", margin: "1rem",
    color: "#fff", background: "#fac451"})

    // jQuery event attachment and effects
    $(".btn-fadeIn").on("click", function(){
        $(".event-box").fadeIn(3000)
    })
    $(".btn-fadeOut").on("click", function(){
        $(".event-box").fadeOut(1500,() =>      {
            $(this).html('Completed')
        })
    })
    $(".btn-slideUp").on("click", function(){
        $(".event-box").slideUp('fast',function(){
            alert("thank you for coming")
        })
    })
    $(".btn-slideDown").on("click", function(){
        $(".event-box").slideDown('slow')
    })
    $(".btn-slideToggle").on("click", function(){
        $(".event-box").slideToggle(2000)
    })
    $(".btn-animate").on("click", function(){
        $(".event-box").animate({left: '100px',top: '30px', borderRadius: '50%'})
    })
    $(".btn-replace").on("click", function(){
        $(".event-box").html('<h2>Replaced successfully!</h2>')
    })
    $(".btn-append").on("click", function(){
        $(".event-box").append('<h4>Replaced successfully!</h4>')
    })
    $(".btn-prepend").on("click", function(){
        $(".event-box").prepend('<h6>Replaced successfully!</h6>')
    })
    $(".navi").on("click", function(){
        $(".navi-gate").slideToggle('fast', function(){
            const nav =$(".navi-gate");
            nav.css({visibility: "visible"})
        })
    })
    $(".cart-btn").on("click", function(){
        $(".cart-container").slideToggle(500)
    })


    $(".counter-form").on("submit", function(){
        let angle = $(".form-input").val()
        $(".counter-text").html(angle + "%" )
        let startCount = 0 
        let countTimer = setInterval(() => {
            if(startCount < angle){
                startCount ++;
                    $(".counter-box").css ({background: `conic-gradient(var(--grin), calc(360/100*${startCount}deg), var(--wht) 0deg)`})
            }else{
                clearInterval(countTimer)
            }
        });
        return false
    })

    $(".mode").on("click", function (){
        $(".tek").html('Light Mode')
      const change =  $(".be-switched")
      change.css("background", "black")

        
    })


    $(".gallery-thumb").on("click", function(){
        $(".gallery-thumb").removeClass("gallery-active");
        $(this).addClass("gallery-active");
        let imageSrc = $(this).children("img").attr("src");
        $(".gallery-preview img").attr("src", imageSrc);
    })
    // $(".a").on("click", function(){
    //     $(".navi-gate").fadeIn(3000)
    // })
    // $(".b").on("click", function(){
    //     $(".navi-gate").fadeOut(1500)
    // })
    // $(".c").on("click", function(){
    //     $(".navi-gate").slideUp('fast',function(){
    //         alert("thank you for coming")
    //     })
    // })
    // $(".d").on("click", function(){
    //     $("navi-gate").slideDown('slow')
    // })
    // $(".e").on("click", function(){
    //     $(".navi-gate").animate({left: '100px',top: '30px'})
    // })



    //Exam question array
    const questions = new Array(
        {
            id: 120,
            text: "jQuery tagline is 'do more, write ____?'",
            options: ["much", "less", "small", "more"],
            answer: "less"
        },

        {
            id: 121,
            text: "jQuery is a javascript library. Confirm or deny?",
            options: ["Dunno", "Maybe", "Confirm", "Deny"],
            answer: "Confirm"
        },

        {
            id: 122,
            text: "Which of the following classes is NOT valid in JQuery",
            options: ["addClass", "toggleClass", "removeClass", "replaceClass"],
            answer: "replaceClass"
        },
    ); 
})

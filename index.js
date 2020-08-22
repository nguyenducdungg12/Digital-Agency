$('.owl-carousel0').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

/* Scroll To Top */
$(window).scroll(function(){
    if($(this).scrollTop()>50){
        $('.button__top').fadeIn();
        $('.nav').addClass('nav_fix');
        $('.nav__logo img').attr('src','http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-dark.png');
    }else{
        $('.button__top').fadeOut();
        $('.nav').removeClass('nav_fix');
        $('.nav__logo img').attr('src','http://demo.themelogi.com/navian/wp-content/themes/navian/assets/img/logo-light.png');
    }
})
$('.button__top').click(function(){
    $("html").animate({ scrollTop: 0 }, 500);
})

/* Modal video */
var src_video = 'https://www.youtube.com/embed/bEoxxzagiwQ';
$('.service__video__icon').click(function(){
    $('.modal__video').show();
    $('#modal_video').attr('src',src_video);
    $(window).click(function(e){
        if(e.target==$('.modal__video__overlay')[0]){
            $('.modal__video').hide();
            $('#modal_video').attr('src','');
        }
    })
})

$('.modal__video__main i').click(function(){
    $('.modal__video').hide();
    $('#modal_video').attr('src','');

})


/* Counter Up */

var element = document.querySelectorAll('.statistic__item__main__number');
var speed = 10;
$(window).scroll(function(){
   if($(this).scrollTop()>2850){
    element.forEach((Item)=>{
        var currentValue = 0;
       var ConterUp = function(){
          var number =parseFloat(Item.getAttribute('data-number'));
          var unit = Item.getAttribute('data-unit')
          var value = number/speed;
          currentValue+=value;
          if (currentValue<number){
              Item.innerHTML=parseInt(currentValue)+unit;
              setTimeout(ConterUp,80);
          }
          else{
              Item.innerHTML=number+unit;
          }
      }
      ConterUp();
    });
    $(this).unbind();
   }
})

/* Question & answer */

var question = document.querySelectorAll('.contact__right__list__item__show');
function onClickQuestion(event,index){
    for (var i=0;i<question.length;i++){
        question[i].style.background='transparent'
        question[i].querySelector('.contact__right__list__item__icon').innerHTML='+';
        question[i].parentElement.querySelector('.contact__right__list__item__hide').style.display ='none';

    }
    question[index].style.background='var(--green-color)';
    question[index].querySelector('.contact__right__list__item__icon').innerHTML='-';
    question[index].parentElement.querySelector('.contact__right__list__item__hide').style.display ='block';

}
for (let i=0;i<question.length;i++){
    question[i].addEventListener('click',(event)=>{
        onClickQuestion(event,i);
    })
}

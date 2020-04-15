$("document").ready(function(){
  allTotal=0;
  allpay=0;
  tax=974.46 ;
  carttotal=0;
  promo=allTotal*.00;
  pink='#ea728c';

//search box
$('.search-toggle').on('click', function() {
  $("#header-1").toggleClass('show').find('.search-input').focus();
  $(this).toggleClass('active');

});
$('.mycarousel').carousel({
  interval: 4000,
  pause:false
});

$('.navbar-toggler,.overlay').on('click',function(){
  $('.mobileMenu,.overlay').toggleClass('open');
})

 // animate carousel caption
 $(".carousel-caption").addClass("animated slideInUp");
 
 //call stop animation function after 10s
 setTimeout(stopAnimation,12000,".carousel-caption","slideInUp");

 // chanfe the color of navbar on scrolling
   myNav = $(".my-nav");
  myNav.toggleClass('nav1', $(this).scrollTop() > myNav.height());


    // what to do ontouch screen
    if(is_touch_device1()){
      $(".shop").removeClass("shop-desk");
      $(".type").removeClass("type-desk");
      $("footer").addClass("ftr");      
      }


    //make the dropdown trigger by hovering 
    $('.my-nav li.dropdown').hover(function() {
    $('.dropdown-menu',this).stop(true, true).delay(100).fadeIn(500);
      }, function() {
        $('.dropdown-menu',this).stop(true, true).delay(100).fadeOut(500);
      });
            

    //change color of nav while scrolling
 if($('#home') && $('#home').length ){
  $(document).scroll(function ()
  {
    myNav.toggleClass('nav1', $(this).scrollTop() > myNav.height());
 });
 }  
 if($('#buyoutfit') && $('#buyoutfit').length){
  if(is_touch_device1()){
  $('.shoplook').removeClass('shoplookdesk');

 }}
 if($('#modallookshop') && $('#modallookshop').length){

      $('.modalcrs').carousel({
        interval: false,
      })
   $('.fo').click(function(){
    $('.chart').removeClass('clicked');
    $('.favv').html('Add To Favorite');
   $('#sizeSelect').html("Add To Bag");
    $('.modalcrs').removeClass('slide'); 
    $('.title').html("Boswell Trouser");
    $('.price').html("EGP2,644.30");
    $('.colorechoosen').html("Ivory");
    $('.colors').addClass('d-none');
    $('.soldone').toggleClass('sold')

    $('.modalcrs').carousel(0); 
     $('.Firstslide').attr("src","images/shlok.jpg");
        $('.Secondslide').attr("src","images/shlok1.jpg");
        $('.Thirdslide').attr("src","images/shlok12.jpg");
        $('.Fourthslide').attr("src","images/shlok13.jpg");
        $('.modalcrs').carousel(0); 
        $('.modalcrs').addClass('slide'); 



   }) 


   $('.so').click(function(){
    $('.chart').removeClass('clicked');
    $('.favv').html('Add To Favorite');
   $('#sizeSelect').html("Add To Bag");
    $('.modalcrs').removeClass('slide'); 
    $('.title').html("Niko Blazer");
    $('.price').html("EGP3,116.50");
    $('.colorechoosen').html("White");
    $('.colors').removeClass('d-none');
    $('.soldone').toggleClass('sold disabled')

    $('.modalcrs').carousel(0); 
    $('.Firstslide').attr("src","images/shlok2.jpg");
    $('.Secondslide').attr("src","images/shlok21.jpg");
    $('.Thirdslide').attr("src","images/shlok22.jpg");
    $('.Fourthslide').attr("src","images/shlok23.jpg");
      $('.modalcrs').addClass('slide'); 



});
   $('.black').click(function(){
    $('.modalcrs').removeClass('slide');
    $('.soldone').toggleClass('sold')

    $('.colorechoosen').html("Black");
    $('.modalcrs').carousel(0); 
    $('.Firstslide').attr("src","images/shlok2b.jpg");
    $('.Secondslide').attr("src","images/shlok21b.jpg");
    $('.Thirdslide').attr("src","images/shlok22b.jpg");
    $('.Fourthslide').attr("src","images/shlok32b.jpg");
    $('.modalcrs').carousel(0); 
    $('.modalcrs').addClass('slide'); 
   })
   $('.white').click(function(){
    $('.colorechoosen').html("White");
    $('.modalcrs').removeClass('slide'); 
    $('.modalcrs').carousel(0); 
    $('.Firstslide').attr("src","images/shlok2.jpg");
    $('.Secondslide').attr("src","images/shlok21.jpg");
    $('.Thirdslide').attr("src","images/shlok22.jpg");
    $('.Fourthslide').attr("src","images/shlok23.jpg");
    $('.modalcrs').carousel(0); 
    $('.modalcrs').addClass('slide'); 

   })

 }

 
 if ($('.stocking') && $( ".stocking" ).length )
 {
      if(is_touch_device1()){
        $('.details').css({'opacity':'1' , 'background-color':'white' ,'bottom':'0px'});
      }
 }
  if($('#deal-of-the-week') && $('#deal-of-the-week').length ){
     // creating countdown for deal 
  var endDate=new Date("Dec 15, 2020 12:00:00").getTime();
  setInterval(function() {
  let now = new Date().getTime(); 
  let t = endDate - now; 
  if (t >= 0) {
  
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((t % (1000 * 60)) / 1000);
      //show remaining time for deal
      document.getElementById("timer-days").innerHTML = days ;
     document.getElementById("timer-hours").innerHTML = hours;
     document.getElementById("timer-mins").innerHTML = mins ;
     document.getElementById("timer-secs").innerHTML = secs ;
  }
  }, 1000);

  }


  if ($('#ourproducts') && $( "#ourproducts" ).length )
  {
   
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    gap:30,
    animationTimingFunc:"ease",
    animationDuration:1000,
    autoplay:2000,
    swipeThreshold: 60,
    perView: 3,
    breakpoints: {
      1204:{
        perView: 2,

      },
      540:{
        perView: 1
      }
    },

   }
    ).mount()
  }
  

  // whishlist stuff
  if($('#wishlist') && $('#wishlist').length || $('#mn-shop') && $('#mn-shop').length )
  {
    if(is_touch_device1()){ 
      console.log("touch")
      $(".quick-add").addClass("d-none");
      $(".clr").addClass("d-none");
      $(".item i").addClass("d-none");
      $(`.img1`).css("opacity",'1');
    }
    else{
     $(".item ").hover(function(){
       $(`.img1`,this).toggleClass("d-none");
       $(`.img11`,this).toggleClass("d-none"); 
     })
    $(".sold").hover(function(){
      $(".q1").html("Sold Out");
    },function(){
      $(".q1").html("Quick Add");
    });

    $(".clr").click(function(){ 
      var pp=ParentOfParent(this);
      $(`.${pp} .colors`).removeClass("d-none");
      $(`.${pp} .colors,.${pp}`).mouseleave(function(){
        $(`.${pp} .colors`).addClass("d-none");
        
      })

    })
    $(".fav1").click(function(e){
      $(this).toggleClass('d-none');
      $(this).next().toggleClass('d-none');
      e.preventDefault()
      })
      $(".fav2").click(function(e){
        $(this).toggleClass('d-none');
        $(this).prev().toggleClass('d-none');
        e.preventDefault()

        })  
    

     

    $('.item1 .navy').click(function(){
    $('.item1 .img1').attr("src", "images/original (1).jpg");
    $('.item1 .img11').attr("src", "images/original (11).jpg");
    })

    $('.item1 .vintagewhite').click(function(){
    $('.item1 .img1').attr("src", "images/original(12).jpg");
    $('.item1 .img11').attr("src", "images/original(122).jpg");
    })


    
    $('.item2 .red-flowry').click(function(){
    $('.item2 .img1').attr("src", "images/original(2).jpg");
    $('.item2 .img11').attr("src", "images/original(21).jpg");
    })

    $('.item2 .blue-flowry').click(function(){
    $('.item2 .img1').attr("src", "images/original (221).jpg");
    $('.item2 .img11').attr("src", "images/original (22).jpg");
    })
  }
}

// cart stuff
if($('#cart') && $('#cart').length){
  totalPrice("item1");
  totalPrice("item2");
  carttotal=allTotal-promo;
  $('.cart-total').text(carttotal.toFixed(2));
  $('.promo').click(function()
  { 
    $('.pr').toggleClass('rotate');
    $('.prm').toggleClass('d-none'); 
  })

}

if($('#mn-shop') &&  $('#mn-shop').length)
{

  $('.flip').click(function(){
    $('.openClose',this).toggleClass('rotate');
    $('.openClose').not( $('.openClose',this)).removeClass('rotate');

  })
   
  $('.c ').click(function(){
   
    $(".opcl",this).toggleClass('fa-plus fa-minus');
    $('.opcl ').not( $('.opcl',this)).removeClass('fa-minus').addClass('fa-plus');

    
  })

  $('.filter-mob').click(function(){
    $('.overly').removeClass('d-none');
    // When the modal is shown, we want a fixed body
document.body.style.position = 'fixed';


  })
  $('.closing').click(function(){
    $('.overly').addClass('d-none');
    document.body.style.position = 'static';


  })
     
}




if($('#checkout') && $('#checkout').length)
{
  totalPrice("item1");
  totalPrice("item2");
  $('[data-toggle="tooltip"]').tooltip();

$('input:radio[name=address]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'no') {
          $('.altr').removeClass("d-none");
        }
        else if ($(this).is(':checked') && $(this).val() == 'yes') {
          $('.altr').addClass("d-none");
        }
    });
    $('input:radio[name=tax]').change(
      function(){
          if ($(this).is(':checked') && $(this).val() == 'yes') {
            allpay=allTotal+tax;
            $('.all-pay').text(allpay.toFixed(2));
            $('.tax').removeClass('d-none');
            $('.taxnot').addClass('d-none');
            $('.note').text("All applicable duties, taxes and fees are included in the total amount of your order. We guarantee you will not be required to pay any additional cost on delivery.");

          }
          else if ($(this).is(':checked') && $(this).val() == 'no') {
            $('.all-pay').text(allTotal.toFixed(2));
            $('.tax').addClass('d-none');
            $('.taxnot').removeClass('d-none');
            $('.note').text("Please note duties and taxes were not prepaid. Should there be any applicable charges, you will be required to pay them upon delivery")
          }
      });
  }

})

if($('#one-item') && $('#one-item').length  ||$('#modallookshop') && $('#modallookshop').length)

{
  $('.chart').click(function(){
     $('.chart').removeClass('clicked');
     $(this).addClass('clicked');
     $('.favv').html('Add To Favorite');
    $('#sizeSelect').html("Add To Bag");
    $('.favv').click(function(){
      $(this).html("Favorited");
     });
     $('#sizeSelect').click(function(){
      $(this).html("Added");

     })
   });
   
  $('.sold').click(function(){
    $('#sizeSelect').html("Join The Wait List");
    $('#sizeSelect').click(function(){
     $(this).html('Joined') 
    })
   });
  }
   if($('#one-item') && $('#one-item').length ){
  $('.flip').click(function(){
    $('.openClose',this).toggleClass('rotate');
    $('.openClose').not( $('.openClose',this)).removeClass('rotate');

  })
  $('.red-flowry').click(function(){
    $('.first-color').addClass('d-none');
    $('.second-color').removeClass('d-none');
  var src=  $('.second-color .first').attr('src');
  $('.main-photo img').attr('src',src);
  $('.overly').css('background-image', 'url(../'+src+')');
  $('#zoom_01').data('zoom-image',src).elevateZoom({
    zoomType: "inner",
    cursor: 'crosshair',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750,
    scrollZoom:true
}); ;

    
  })
  $('.blue-flowry').click(function(){
    $('.first-color').removeClass('d-none');
    $('.second-color').addClass('d-none');
    var src=  $('.first-color .first').attr('src');
    $('.main-photo img').attr('src',src);
    $('.overly').css('background-image', 'url(../'+src+')');

    $('#zoom_01').data('zoom-image',src).elevateZoom({
      zoomType: "inner",
      cursor: 'crosshair',
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 750,
      scrollZoom:true
  }); ;
    
  })


  
 var glide= new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    animationTimingFunc:"ease",
    animationDuration:1000,
    autoplay:3000,
    swipeThreshold: 60,
    perView: 1,

   }
    ).mount()

  if(!is_touch_device1()){
  $('#zoom_01').elevateZoom({
    zoomType: "inner",
    cursor: 'crosshair',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750,
    scrollZoom:true
}); 
  $('.photos img').hover(function(){
   
   var src= $(this).attr("src");
   $('.main-photo img').attr("src",src);
   $('#zoom_01').data('zoom-image',src).elevateZoom({
    zoomType: "inner",
    cursor: 'crosshair',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750,
    scrollZoo:true
}); ;

  })
  $(".item ").hover(function(){
    $(`.img1`,this).toggleClass("d-none");
    $(`.img11`,this).toggleClass("d-none"); 
  })
}
  else{
    $('.photos img').click(function(){
   
      var src= $(this).attr("src");
      $('.main-photo img').attr("src",src);
  });
  $('.main-photo img').click(function(){
    var sr=$(this).attr("src");
    $('.overly').removeClass('d-none');
    $('.overly').css('background-image', 'url(../'+sr+')');
    document.body.style.position = 'fixed';

  })
  $('.overly img').click(function(){
    var sr=$(this).attr("src");
    $('.overly').css('background-image', 'url(../'+sr+')');
  })
  $('.overly .closing').click(function(){
    $('.overly').addClass('d-none');
    document.body.style.position = 'static';


  })
    $('.red-flowry').click(function(){
      $('.firstone img').each(function(){

        var src= $(this).attr('src');
        src=src.slice(0,15);
        src=`${src}2.jpg`;
        $(this).attr('src',src)
      
      })
      glide.update({ startAt: 0})

})
$('.blue-flowry').click(function(){
  $('.firstone img').each(function(){

    var src= $(this).attr('src');
    src=src.slice(0,15);
    src=`${src}.jpg`;
    $(this).attr('src',src)
  
  })
  glide.update({ startAt: 0})

})
}
}
if($('#mn-contact') && $('#mn-contact').length){
  $('.flip').click(function(){
    $('.openClose',this).toggleClass('rotate');
    $('.openClose').not( $('.openClose',this)).removeClass('rotate');

  })
  $('.Questioning').click(function(){
    contacting($(this));
    $('.Qs').removeClass('d-none');
  });
  $('.Deliveringorders').click(function(){
    contacting($(this));
    $('.DO').removeClass('d-none');
  });
  $('.Producting').click(function(){
    contacting($(this));
    $('.Pr').removeClass('d-none');
  });

  $('.returningfunding').click(function(){
    contacting($(this));
    $('.RR').removeClass('d-none');
  });

 
  $('.contact-us').click(function(){
    contacting($(this));
    $('.contactus').removeClass('d-none')
  });
}

//stop animation function
function stopAnimation(ele,cls)
{
   $(ele).removeClass(cls); 
}

//to know if im in touch device
function is_touch_device1() {
  return 'ontouchstart' in window;
  
}




const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
  <i class="fas fa-chevron-left mr-1 mt-2"></i>	Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})



//function for total price
function totalPrice(parent)
{ 
  var Qnty=$('.'+parent+' .Qnty').text();
  var price=$('.'+parent+' .price').text();
  var total=Qnty*price;
  allTotal+=total;
  $('.'+parent+' .total').text(total.toFixed(2));
  $('.all-total').text(allTotal.toFixed(2));
  $('.all-pay').text(allTotal.toFixed(2));
}
function ParentOfParent(elem){
  var p=$(elem).parent();
  p=p.parent().get( 0 ).classList[0];
  return p;
}

//inc & dec for bag items
$('.inc').click(function()
{
  var p=ParentOfParent(this);
 var v= $ (`.${p} .inc-dec`).text();
 ++v;
 $(`.${p} .inc-dec`).text(v);

})
$('.dec').click(function()
{
  var p=ParentOfParent(this);
 var v= $(`.${p} .inc-dec`).text();
 if (v != 1)
 {
  v--;
  $(`.${p} .inc-dec`).text(v);
 }
})
function contacting(e)
{
  $('.help').removeClass('help-clicked');
    $(e).addClass('help-clicked');
    $('.ans').addClass('d-none');
}
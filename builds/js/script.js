$("document").ready(function(){
  allTotal=0;
  allpay=0;
  tax=974.46 ;
  carttotal=0;
  promo=allTotal*.00;

  //search box
  $('.search-toggle').on('click', function() {
    $("#header-1").toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');

  });

  $('.my-carousel').carousel({
    interval: 5000,
    pause:false,
    touch:true
  });
  $(function() {
    $('#event-modal').modal({
        backdrop: true
    });
});  
 //for mobile nav
  $('.navbar-toggler,.overlay').on('click',function(){
    $('.mobileMenu,.overlay').toggleClass('open');
  })

  // what to do ontouch screen
  if(is_touch_device1()){
    $(".shop").removeClass("shop-desk");
    $(".type").removeClass("type-desk");
    $("footer").addClass("ftr");   
       
  }


  //make the dropdown trigger by hovering and add animation
  $('.my-nav li.dropdown').hover(function() {
  $('.dropdown-menu',this).stop(true, true).delay(100).fadeIn(500);
    }, function() {
      $('.dropdown-menu',this).stop(true, true).delay(100).fadeOut(500);
  });
            

  //change color of nav while scrolling
  if($('#home') && $('#home').length ){
    // add color when refresh & not at the top
    myNav = $(".my-nav");
    myNav.toggleClass('nav1', $(this).scrollTop() > myNav.height());
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
    var pant=0;
    var jacket=0;

      $('.modalcrs').carousel({
        interval: false,
      })
    $('.fo').click(function(){
      if(pant ===0){
        $('.chart').removeClass('clicked');
        $('.favv').html('Add To Favorite');
       $('#sizeSelect').html("Add To Bag");
        $('.modalcrs').removeClass('slide'); 
        $('.title').html("Boswell Trouser");
        $('.price').html("EGP2,644.30");
        $('.colorechoosen').html("Ivory");
        $('.soldone').toggleClass('sold')
        $('.white,.black ').addClass('d-none')
        $('.Ivory').removeClass('d-none')
        $('.modalcrs').carousel(0); 
        $('.Firstslide').attr("src","images/shlok.jpg");
        $('.Secondslide').attr("src","images/shlok1.jpg");
        $('.Thirdslide').attr("src","images/shlok12.jpg");
        $('.Fourthslide').attr("src","images/shlok13.jpg");
        $('.modalcrs').carousel(0); 
        $('.modalcrs').addClass('slide'); 
        pant++;
        jacket=0;
        $(this).css('cursor','default');
        $('.so').css('cursor','pointer');
      }
    



      $('.so').click(function(){
        if (jacket ===0){
          $('.white,.black ').removeClass('d-none')
          $('.Ivory').addClass('d-none')
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
          pant=0;
          jacket++;
          $(this).css('cursor','default');
          $('.fo').css('cursor','pointer');
    
        }
       
  
  
      });
    }) 


    var clickedwhite=0;
    var clickedblack=0;
    $('.black').click(function(){
      if (clickedblack ===0){
        $('.chart').removeClass('clicked');
        $('.favv').html('Add To Favorite');
        $('#sizeSelect').html("Add To Bag");
        $('.modalcrs').removeClass('slide');
        $('.soldone').removeClass('sold');
        $('.colorechoosen').html("Black");
        $('.modalcrs').carousel(0); 
        $('.Firstslide').attr("src","images/shlok2b.jpg");
        $('.Secondslide').attr("src","images/shlok21b.jpg");
        $('.Thirdslide').attr("src","images/shlok22b.jpg");
        $('.Fourthslide').attr("src","images/shlok32b.jpg");
        $('.modalcrs').carousel(0); 
        $('.modalcrs').addClass('slide'); 
        clickedblack++;
        clickedwhite=0;
        $(this).css('cursor','default');
        $('.white').css('cursor','pointer');
      }
 
      $('.white').click(function(){
        if(clickedwhite===0){
          $('.chart').removeClass('clicked');
          $('.favv').html('Add To Favorite');
          $('#sizeSelect').html("Add To Bag");
          $('.colorechoosen').html("White");
          $('.soldone').addClass('sold');
          $('.modalcrs').removeClass('slide'); 
          $('.modalcrs').carousel(0); 
          $('.Firstslide').attr("src","images/shlok2.jpg");
          $('.Secondslide').attr("src","images/shlok21.jpg");
          $('.Thirdslide').attr("src","images/shlok22.jpg");
          $('.Fourthslide').attr("src","images/shlok23.jpg");
          $('.modalcrs').carousel(0); 
          $('.modalcrs').addClass('slide'); 
          clickedblack=0;
          clickedwhite++;
          $(this).css('cursor','default');
          $('.black').css('cursor','pointer');
        }
       
      })
    })


  }

  if ($('.stocking') && $( ".stocking" ).length )
  {
        if(is_touch_device1()){
          $('.details').css({'opacity':'1' , 'background-color':'white' ,'bottom':'0px'});
          $('.stk').css({'height':'317px'});

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
  if($('#wishlist') && $('#wishlist').length || $('#mn-shop') && $('#mn-shop').length)
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
      $(`.${pp}`).mouseleave(function(){
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

  if($('#one-item') && $('#one-item').length  ||$('#modallookshop') && $('#modallookshop').length)

  {
    $('.chart').click(function(){
      if($(this).hasClass('clicked')){
        $('.chart').removeClass('clicked');
        $('.favv').html('Add To Favorite');
        $('#sizeSelect').html("Select Size");
      }
      else{
        $('.chart').removeClass('clicked');
        $(this).addClass('clicked');
        $('.favv').html('Add To Favorite');
        $('.favv').click(function(){
        $(this).html("Favorited");
        $(this).click(function(){
          $(this).html("Add to favorite");
        })
        });

  

        if($(this).hasClass('sold')){
          $('#sizeSelect').html("Join The Wait List");
          $('#sizeSelect').click(function(){
          $(this).html('Joined') 
          })
      
        }
        else{
          $('#sizeSelect').html("Add To The cart");
          $('#sizeSelect').click(function(){
          $(this).html('Added') 
          })
        }
    
      }
    })

  }

  if($('#one-item') && $('#one-item').length ){
    $('.zoomarrow').click(function(){
      $('.fulldesk').removeClass("d-none");
      var src= $('.main-photo img').attr("src");
      $('.img').html(`<img  src=${src}>`)
      document.body.style.position = 'fixed';
    })
    $('.fulldesk .closing').click(function(){
      $('.fulldesk').addClass('d-none');
      document.body.style.position = 'static';
    })
    $('.flip').click(function(){
      $('.openClose',this).toggleClass('rotate');
      $('.openClose').not( $('.openClose',this)).removeClass('rotate');

    })
    var clickedred=0;
    var clickedblue=0;

    $('.red-flowry').click(function(){
      if(clickedred===0){ 
        $('.chart').removeClass('clicked');
        $('.favv').html('Add To Favorite');
        $('#sizeSelect').html("Select Size");
        $('.first-color').addClass('d-none');
        $('.second-color').removeClass('d-none');
        var src=  $('.second-color .first').attr('src');
        $('.main-photo img').attr('src',src);
        clickedred++;
        clickedblue=0;
          $('#zoom_01').data('zoom-image',src).elevateZoom({
            zoomType: "inner",
            cursor: 'crosshair',
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750,
            scrollZoom:true
          }); 
         
          $('.blue-flowry').css('cursor','pointer');
          $(this).css('cursor','default');
        
      }
   

      $('.blue-flowry').click(function(){
        if(clickedblue===0){ 
          $('.chart').removeClass('clicked');
          $('.favv').html('Add To Favorite');
          $('#sizeSelect').html("Select Size");
          $('.first-color').removeClass('d-none');
          $('.second-color').addClass('d-none');
          var src=  $('.first-color .first').attr('src');
          $('.main-photo img').attr('src',src);
          clickedblue++;
          clickedred=0;
            $('#zoom_01').data('zoom-image',src).elevateZoom({
              zoomType: "inner",
              cursor: 'crosshair',
              zoomWindowFadeIn: 500,
              zoomWindowFadeOut: 750,
              scrollZoom:true
            }); 
          
            $('.red-flowry').css('cursor','pointer');
            $(this).css('cursor','default');
        
      }
      })
    })
  


    // img of dess in mob    
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
      
     
        $(".item i").addClass("d-none");
        $(`.img1`).css("opacity",'1');
      
    
      $('.photos img').click(function(){
    
        var src= $(this).attr("src");
        $('.main-photo img').attr("src",src);
      });
      var cr=0;
      var cb=0;
      $('.red-flowry').click(function(){
        if (cr ===0){
          $('.firstone img').each(function(){
            var src= $(this).attr('src').slice(0,15);
            src=`${src}2.jpg`;
            $(this).attr('src',src)
          })
          glide.update({ startAt: 0})
          cr++;
          cb=0;
        }
        
          
        $('.blue-flowry').click(function(){
          if(cb===0){
            $('.firstone img').each(function(){
              var src= $(this).attr('src').slice(0,15);
              src=`${src}.jpg`;
              $(this).attr('src',src)
            })
            glide.update({ startAt: 0})
            cr=0;
            cb++;
          }
        
      
        })
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

})


//to know if im in touch device
function is_touch_device1() {
  return 'ontouchstart' in window;
  
}

// formob nav 
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
$('.inc').click(function(event)
// to stop the dropdoen menu from closing on clicking in it
{event.stopPropagation();
  var v=$(this).prev().text();

 ++v;
 $(this).prev().text(v);

})

$('.dec').click(function(event)
{
  event.stopPropagation();
 var v=$(this).next().text();
 if (v != 1)
 {
  v--;
  $(this).next().text(v);
}
})

//remove classes from contact /reurn /delvr / help
function contacting(e)
{
  $('.help').removeClass('help-clicked');
    $(e).addClass('help-clicked');
    $('.ans').addClass('d-none');
}
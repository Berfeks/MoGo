$(function() {

    let introH = $("#intro").innerHeight();
    let header = $("#header");
    let scrollOfset = $(window).scrollTop(); 




    // Fixed Header
     checkScroll(scrollOfset);

    $(window).on("scroll", function() {

        scrollOfset = $(this).scrollTop();

        checkScroll(scrollOfset);

    }) ;


    function checkScroll() {

        scrollOfset = $(this).scrollTop();
        if (scrollOfset >= introH ) {
            header.addClass("fixed");
        }else{ 
           header.removeClass("fixed");
   
        }
    }


    // Smoth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");



       $("html, body").animate({
            scrollTop : blockOffset -80
        }, "slow"
              );

    });



    // wedo collapse

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $(this).data('collapse');

        $this.toggleClass("active");

    });   




    let slider = $("#reviewsSlider");


  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear'
  });

});
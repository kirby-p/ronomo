$(document).ready(function() {

	
  var groupButtons = [
    "Dairy", "Meat", "Fruits", "Vegetables", "Grains"
  ];

  var dairyButtons = [
    "Milk", "Cheese", "Yogurt", "Sour Cream"
  ];

  for(i = 0; i < groupButtons.length; i++){
      var groupButton = $('<button>').text(groupButtons[i]).attr('id', groupButtons[i]).addClass('groupButton');
      $('#buttons').append(groupButton);
    };

  $('#buttons').on('click', '.groupButton', function() {
    var foodGroup = $(this).attr("id");
    if(foodGroup == "Dairy"){
        for(i = 0; i < dairyButtons.length; i++){
          var dairyButton = $('<button>').text(dairyButtons[i]).attr('id', dairyButtons[i]).addClass('dairyButton');
          $('#buttons').append(dairyButton);
        };
    }
  });

  $("div.blog-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  $('.flexslider').flexslider({
		prevText: '',
		nextText: ''
	});

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });

  $(function(){

  // Instantiate MixItUp:

  $('#Container').mixItUp();

  

  $(document).ready(function() {
      $(".fancybox").fancybox();
    });

  });


});


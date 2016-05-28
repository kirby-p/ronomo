$(document).ready(function() {

  var key = 'Oyq2k1Dyv3mshHMjzyNGgQ20SI3Kp1mPLFHjsn9eFLUfsEkAFx';

  var groupButtons = [
    "Dairy", "Meat", "Fruits", "Vegetables", "Grains"
  ];

  var dairyButtons = [
    "Milk", "Cheese", "Yogurt", "Sour Cream"
  ];

  var meatButtons = [
    "Steak", "Chicken", "Pork", "Bacon", "Ham", "Turkey"
  ];

  var fruitButtons = [
    "Apples", "Bananas", "Oranges", "Kiwis", "Watermelon", "Cherries"
  ];

  var veggieButtons = [
    "Carrots", "Potatoes", "Celery", "Tomatoes", "Lettuce", "Olives", "Broccoli", "Asparagus"
  ];

  var grainButtons = [
    "Bread", "Pasta", "Cereal", "Oatmeal", "Rice"
  ];

  var userList = [];
  var listurl = "";

  for(i = 0; i < groupButtons.length; i++){
      var groupButton = $('<button>').text(groupButtons[i]).attr('id', groupButtons[i]).addClass('groupButton');
      $('#groupButtons').append(groupButton);
    };

  $('#groupButtons').on('click', '.groupButton', function() {
    var foodGroup = $(this).attr("id");

    if(foodGroup == "Dairy"){
        $("#ingredientButtons").empty();

        for(i = 0; i < dairyButtons.length; i++){
          var dairyButton = $('<button>').text(dairyButtons[i]).attr('id', dairyButtons[i]).addClass('dairyButton ingredients');
          $('#ingredientButtons').append(dairyButton);
        };
    }

    else if(foodGroup == "Meat"){
        $("#ingredientButtons").empty();

        for(i = 0; i < meatButtons.length; i++){
          var meatButton = $('<button>').text(meatButtons[i]).attr('id', meatButtons[i]).addClass('meatButton ingredients');
          $('#ingredientButtons').append(meatButton);
        };
    }

    else if(foodGroup == "Fruits"){
        $("#ingredientButtons").empty();

        for(i = 0; i < fruitButtons.length; i++){
          var fruitButton = $('<button>').text(fruitButtons[i]).attr('id', fruitButtons[i]).addClass('fruitButton ingredients');
          $('#ingredientButtons').append(fruitButton);
        };
    }

    else if(foodGroup == "Vegetables"){
        $("#ingredientButtons").empty();

        for(i = 0; i < veggieButtons.length; i++){
          var veggieButton = $('<button>').text(veggieButtons[i]).attr('id', veggieButtons[i]).addClass('veggieButton ingredients');
          $('#ingredientButtons').append(veggieButton);
        };
    }

    else if(foodGroup == "Grains"){
        $("#ingredientButtons").empty();

        for(i = 0; i < grainButtons.length; i++){
          var grainButton = $('<button>').text(grainButtons[i]).attr('id', grainButtons[i]).addClass('grainButton ingredients');
          $('#ingredientButtons').append(grainButton);
        };
    }

});

  $('#ingredientButtons').on('click', '.ingredients', function() {
    var foodID = $(this).attr('id');
    userList.push(foodID);
    console.log(userList);
    $("#textList").append(foodID + "<br>");
  });

$("#getRecipe").on("click", function() { 

    for(i = 0; i < userList.length; i++){
      listurl += userList[i];
      if(i < (userList.length - 1)){
        listurl += ",";
      };
    };

  console.log(listurl);


  var output = $.ajax({    
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=' + listurl + '&limitLicense=false&number=10&ranking=1', 
    type: 'GET', 
    data: {}, 
    dataType: 'json',
    success: function(data) {
      for (var i = 0; i < data.length; i++){
        console.log(data);
        $("#output").append("<img src=\'" + data[i].image + "\'>");
        $("img").addClass("recipeImage");

      }          
         },

     error: function(err) { alert(err); },
     beforeSend: function(xhr) {
     xhr.setRequestHeader("X-Mashape-Authorization", key); // Enter here your Mashape key
     }
    });
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


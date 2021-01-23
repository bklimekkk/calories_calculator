var fruit = ["apple","banana","cherry", "pear","orange", "peach","pineaple","tangerine", "lemon", "mango", "strawberry", "blueberry", "kiwifruit" ,"watermelon","coconut","grapes","melon","avocado"];
var vegetable = ["broccoli","tomato","onion","cucumber", "carrot","cabbage","lettuce","potato","sweet potato","corn","eggplant","green pepper", "red pepper","olive","hot pepper","clove of garlic","mushroom (any kind)","peanut","chestnut","portion of chips","falafel","salad","popcorn"];
var meat = ["hamburger","bacon","chicken","taco","burito","beef","pork","lamb","hot-dog","tamale","shawarma","pinch of salt","bento box","oden","sushi","shrimp","oyster"];
var bread = ["sandwich","croissant","piece of bread","baguette","flatbread","pretzel","bagel","pancake","waffle","pizza"];
var dairy = ["egg","a piece of cheese","boiled egg","spoon of butter","dumpling"];
var rice = ["rice","rice cracker", "rice ball", "curry rice"];
var pasta = ["pasta", "tomato soup with pasta","spaghetti"];
var fish = ["fish"];
var sweets =["chockolate","moon cake", "dango", "fortune cookie","soft ice cream", "shaved ice", "ice-cream","doughnut","cookie","shortcake","cupcake","pie","candy","lollipop","custard"];
var drinks = ["tea","glass of milk","coffee","glass of wine","coctail glass", "tropical drink", "beer mug","bubble tea"];
var food = fruit.concat(vegetable).concat(meat).concat(bread).concat(dairy).concat(rice).concat(pasta).concat(fish).concat(sweets).concat(drinks);

if(localStorage.getItem("added-items")===null)
var added_items = [];
else
added_items = JSON.parse(localStorage.getItem("added-items"));


var fruit_calories = [52,89,50,101,47,39,50,53,29,60, 33, 57, 61, 30,283,67,34,160];
var vegetable_calories = [31,33,40,30,30,25,15,77,86,86,25,20,31,30,40,13,22,567,131,536,333,550,375];
var meat_calories = [295,541,239,226,206,250,242,294,290,153,1215,0,300,157,200,99,199];
var bread_calories = [266,406,265,144,136,380,250,227,291,266];
var dairy_calories = [155,402,153,100,80];
var rice_calories = [130,35,203,516];
var pasta_calories = [131, 369,158];
var fish_calories = [206];
var sweets_calories = [546,716,54,378,222,80,207,452,502,346,305,237,535,367,122];
var drinks_calories = [1,42,0,83,200,110,150,232];
var food_calories = fruit_calories.concat(vegetable_calories).concat(meat_calories).concat(bread_calories).concat(dairy_calories).concat(rice_calories).concat(pasta_calories).concat(fish_calories).concat(sweets_calories).concat(drinks_calories);
var number_of_calories;

if(localStorage.getItem("all-calories")===null)
number_of_calories = 0;
else number_of_calories = parseInt(localStorage.getItem("all-calories"));
var sorted_food = food;
$(".food_input").autocomplete({
  source: sorted_food.concat().sort(),
  scroll: true
}).focus(function(){
  $(this).autocomplete("search","");
});


$(document).on("keydown click",function(){
  var input_value = $(".food_input").val();
  $(".food").attr("src",""+input_value+".png");
  if(input_value.toString()!=input_value)
  $(".food").attr("src","");
});

$(".calories").text(localStorage.getItem("all-calories"));
$(".navbar-brand").text(localStorage.getItem("all-calories"));

$(".food").on("click", function(){
  var item_calories = food_calories[food.indexOf($(".food_input").val())];
  added_items.push($(".food_input").val());
  number_of_calories += item_calories;
  $(".food").animate({top:"+=100"}).animate({width:"0px"});
   $(".food").animate({ top: "-=100"}).animate({width:"200px"});
   localStorage.setItem("all-calories",number_of_calories);
localStorage.setItem("added-items",JSON.stringify(added_items));
$(".navbar-brand").text(localStorage.getItem("all-calories"));
});

$(".food").on("mouseover",function(){
  $(".calories").css("display","block");
  $(".calories").css("color","#fad586");
  $(".calories").text(food_calories[food.indexOf($(".food_input").val())]);
});

$(".food").on("mouseout",function(){
  $(".calories").css("color","#d6efc7");
  $(".calories").text(number_of_calories);
});

$(".food_input").on("click",function(){
  $(".food_input").val("");
});

$(".reset").on("click",function(){
  number_of_calories = 0;
  localStorage.setItem("all-calories",number_of_calories);
  $(".calories").text(number_of_calories);
    $(".navbar-brand").text(number_of_calories);
  added_items = [];
  localStorage.setItem("added-items",JSON.stringify(added_items));
  });


$(".number-of-calories").text(localStorage.getItem("all-calories"));

var added_items_array = JSON.parse(localStorage.getItem("added-items"));

$.each(sweets,function(index,value){
  $(".sweets").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+sweets[index]+"</h1><img src='"+sweets[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(rice.concat(pasta),function(index,value){
  $(".rp").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+rice.concat(pasta)[index]+"</h1><img src='"+rice.concat(pasta)[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(meat,function(index,value){
  $(".meat").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+meat[index]+"</h1><img src='"+meat[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(fruit.concat(vegetable),function(index,value){
  $(".fv").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+fruit.concat(vegetable)[index]+"</h1><img src='"+fruit.concat(vegetable)[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(fish,function(index,value){
  $(".fish").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+fish[index]+"</h1><img src='"+fish[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(dairy,function(index,value){
  $(".dairy").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+dairy[index]+"</h1><img src='"+dairy[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(bread,function(index,value){
  $(".bread").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+bread[index]+"</h1><img src='"+bread[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(drinks,function(index,value){
  $(".drinks").append("<div class='ah col-lg-2 col-md-3 col-sm-4 col-6'><div class='kind'><h1 style = 'font-size:18px'>"+drinks[index]+"</h1><img src='"+drinks[index]+".png' alt='' width='135px'><h2 class = 'add-item'>add item</h2></div></div>");
});

$.each(added_items_array,function(index,value){
$(".added").append("<div class = 'rh col-lg-2 col-md-3 col-sm-4 col-6'><div class = 'kind'><h1 style = 'font-size:18px'>"+added_items_array[index]+"</h1><img src = '"+added_items_array[index]+".png' alt = '' width = '135px'><h2 class = 'remove-item'>remove item</h2></div></div>");
});

$(".ah").on("click",function(event){
  $(".add-item").css("visibility","hidden");
  var current_number_of_calories;
  if(localStorage.getItem("all-calories")===null)
  current_number_of_calories = 0;
  else current_number_of_calories = localStorage.getItem("all-calories");
  var string_array = localStorage.getItem("added-items");
  var current_added_items;
  if(localStorage.getItem("added-items")===null)
  current_added_items = [];
  else current_added_items = JSON.parse(string_array);
    current_added_items.push($(this).find("h1").text());
    localStorage.setItem("added-items",JSON.stringify(current_added_items));
  var total_calories = parseInt(current_number_of_calories) + parseInt(food_calories[food.indexOf($(this).find("h1").text())]);
  localStorage.setItem("all-calories",total_calories);
$(this).find("img").animate({left:"200px",opacity:0});
$(this).find("img").animate({left:0, top:20});
$(this).find("img").animate({width:"135px",opacity:1});

$(this).find("img").removeClass("animate");
  $(".navbar-brand").text(localStorage.getItem("all-calories"));
});

$(".rh").on("click", function(){
    $(this).css("display","none");
     var remove_item = JSON.parse(localStorage.getItem("added-items"));
      var index = remove_item.indexOf($(this).find("h1").text());
        remove_item.splice(index,1);
        var remove_item_string = JSON.stringify(remove_item);
        localStorage.setItem("added-items",remove_item_string);

var remove_calories = localStorage.getItem("all-calories");
var calories_to_be_subtracted = food_calories[food.indexOf($(this).find("h1").text())];
remove_calories-=calories_to_be_subtracted;
  $(".navbar-brand").text(remove_calories);
  localStorage.setItem("all-calories",remove_calories);
});

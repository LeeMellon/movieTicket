function Movie(name, rating, adult, child, senior) {
  this.name = name;
  this.rating = rating;
  this.adult = {
    "12:00": 9.00,
    "1:30": 9.00,
    "3:45": 9.00,
    "5:00": 11.00,
    "7:30": 11.00,
    "10:00": 11.00
  };
  this.child = {
    "12:00": 6.00,
    "1:30": 6.00,
    "3:45": 6.00,
    "5:00": 9.00,
    "7:30": 9.00,
    "10:00": 9.00
  };
  this.seinor = {
    "12:00": 6.50,
    "1:30": 6.50,
    "3:45": 6.50,
    "5:00": 10.00,
    "7:30": 10.00,
    "10:00": 10.00
  };
}
house = []

function ticketPrice() {
  for (index = 0; index < house.length; index++) {
    if (movieChoice === house[index].name) {
      myMovie = house[index];
      var myPrice = myMovie[tierChoice][timeChoice];
      var priceEl = document.getElementById("price");
      priceEl.innerHTML = "$ " + myPrice;
      return myPrice
    }
  }
}





$(function() {

$(".description1").click(function(event) {
  movieChoice = "I Tonya"
  $("#which-time").delay(450).fadeTo(500, 1);

});
$(".description2").click(function(event) {
  movieChoice = "Three Billboards Outside Ebbing"
  $("#which-time").delay(450).fadeTo(500, 1);
});

$(".description3").click(function(event) {
  movieChoice = "All the Money in the World"
  $("#which-time").delay(450).fadeTo(500, 1);
});

$("#time-form").change(function(event) {
  timeChoice = $("input:radio[name=time]:checked").val();
  $("#which-tier").delay(450).fadeTo(500, 1);

});
$("#tier-form").change(function(event) {
  tierChoice = $("input:radio[name=tier]:checked").val();
  ticketPrice();
  $(".form-container").delay(100).fadeOut(700, "swing", "complete")
  $(".price-display").delay(850).fadeIn(900, "swing", "complete");

});



  var billboards = new Movie("Three Billboards Outside Ebbing", "R")
  var money = new Movie("All the Money in the World", "R")
  var tonya = new Movie("I Tonya", "R")
  house.push(tonya, money, billboards);
  console.log(house);
});

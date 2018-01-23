function Movie(name, rating, adult, child, senior) {
  this.name = name;
  this.rating = rating;
  this.adult = {
    "12:00": 9,
    "1:30" : 9,
    "3:45": 9,
    "5:00": 11,
    "7:30": 11,
    "10:00": 11
  };
  this.child = {
    "12:00": 6,
    "1:30": 6,
    "3:45": 6,
    "5:00": 9,
    "7:30": 9,
    "10:00": 9
  };
  this.seinor = {
    "12:00": 6.5,
    "1:30": 6.5,
    "3:45": 6.5,
    "5:00": 10,
    "7:30": 10,
    "10:00": 10
  };
}
house = []

function ticketPrice(){
  for(index = 0; index < house.length; index ++){
    if (movieChoice === house[index].name){
    myMovie = house[index];
      console.log(myMovie, tierChoice);
    var myPrice = myMovie[tierChoice][timeChoice]
      console.log(myPrice, typeof myPrice);
    }
  }
}





$(function() {

  $("#movie-form").change(function(event) {
    movieChoice = $("input:radio[name=movie]:checked").val();
    // event.preventDefault();
    $("#which-time").delay(450).fadeTo(500, 1);
    console.log(movieChoice);

  });
  $("#time-form").change(function(event) {
    timeChoice = $("input:radio[name=time]:checked").val();
    // event.preventDefault();
    $("#which-tier").delay(450).fadeTo(500, 1);
    console.log(timeChoice);

  });
  $("#tier-form").change(function(event) {
    tierChoice = $("input:radio[name=tier]:checked").val();
    // event.preventDefault();
    console.log(tierChoice);
    ticketPrice();

  });
var billboards = new Movie("Three Billboards Outside Ebbing", "R")
var money = new Movie("All the Money in the World", "R")
var tonya = new Movie("I Tonya", "R")
house.push(tonya, money, billboards);
console.log(house);
});

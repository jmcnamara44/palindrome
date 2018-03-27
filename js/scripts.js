$(document).ready(function() {

  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#answer").val().toLowerCase();

    var reverse = userInput.split("").reverse().toString().replace(/,/g,'').replace(/ /g,''); // convert to array and reverse it

    if( userInput.replace(/ /g,'') === reverse) {
      $("#pal").text( userInput  + " is a palindrome");

    } else {
      $("#pal").text(userInput  + " is not a palindrome");
    }

  });
});

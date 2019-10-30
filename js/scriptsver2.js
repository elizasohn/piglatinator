var vowels = ["a", "e", "i", "o", "u", "y"];

function piglatinator (string) {
  var newWord = "";
  var quack = "";

  if (("a" || "e" || "i" || "o" || "u") === string.charAt(0) ){
    newWord = string + "way";
    console.log(newWord);
  }

  else if (("a" || "e" || "i" || "o" || "u") !== string.charAt(0) )
    for (i = 0; i < string.length; i++){
      if (("a" || "e" || "i" || "o" || "u") === string.charAt(i) && i > 0){
        newWord = string.slice(i) + string.slice(0, i);
      }
    }
    newWord += "ay";
    console.log(newWord);

  if (string.includes("qu")) {
    quack = string.indexOf("qu");
    newWord = (string.slice(quack + 2)) + (string.slice(0, quack + 2)) + "ay";
    console.log(newWord);
}



}


$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userString").val();
    var latinatedString = piglatinator(userInput);

    $("#resultText").text(latinatedString);
    $(".resultBox").show();
  });
});

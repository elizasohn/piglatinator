var vowels = ["a", "e", "i", "o", "u", "y"];

function piglatinator (string) {
  var newWord = "";
  var quack = "";

  // if (string.includes("/^[0-9]/*$")){
  //   console.log("bad");
  //   return "Eat a bag of bananas";
  // }

  if (("a" || "e" || "i" || "o" || "u") === string.charAt(0) ){
    newWord = string + "way";
  }

  else if (("a" || "e" || "i" || "o" || "u") !== string.charAt(0) ) {
    for (i = 0; i < string.length; i++){
      if (("a" || "e" || "i" || "o" || "u") === string.charAt(i) && i > 0){
        newWord = string.slice(i) + string.slice(0, i);
      }
    }
    newWord += "ay";
  }

  if (string.includes("qu")) {
    quack = string.indexOf("qu");
    newWord = (string.slice(quack + 2)) + (string.slice(0, quack + 2)) + "ay";
    console.log(newWord);
  }
  console.log(newWord);
  return newWord;
}


$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#userString").val();
    var latinatedString = piglatinator(userInput);


    $("#resultText").append(latinatedString);
    $(".resultBox").slideDown();

    $("form#inputForm")[0].reset();

  });
});

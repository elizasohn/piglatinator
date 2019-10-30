function piglatinator (string) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var stringArray = string.split('');

  if (vowels.includes(stringArray[0]) && (stringArray[0] !== "y")) {
    stringArray.push("way");



  } else if (vowels.includes(stringArray[1])){
    stringArray.splice((stringArray.length), 0, stringArray[0]);
    stringArray.shift();
    stringArray.push("ay");
  } else if (vowels.includes(stringArray[2])){
    stringArray.splice((stringArray.length), 0, stringArray[0]);
    stringArray.splice((stringArray.length), 0, stringArray[1]);
    stringArray.shift();
    stringArray.shift();
    stringArray.push("ay");
  }





  var finalString = stringArray.join("");
  console.log(finalString);
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

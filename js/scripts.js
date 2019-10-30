function piglatinator (string) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var strArray = string.split('');


  if (vowels.includes(strArray[0]) && (strArray[0] !== "y")) {
    strArray.push("way");
}
  else if (consonants.includes(strArray[0])) {
    for (i=0; i<strArray.length; i++){
      if (consonants.includes(strArray[i])) {
        strArray.push(strArray[i]);
      }
      else if (vowels.includes(strArray[i])) {
        for (j=0; j<i; j++){
          strArray.shift();
        }
        strArray.push("ay");
        break;
      }
    }
  }


  // for (j=0; j<i; j++){
  //   strArray.shift();
  // }
//
// for ( i = 0; i < strArray.length; i ++) {
//   if (consonants.includes(strArray[i])) {
//     strArray.splice((strArray.length), 1, strArray[i]);
//     strArray.splice((strArray[i]), 1, "");
//     strArray.shift();
//
//     console.log(strArray);
//   }
//   else if (vowels.includes(strArray[i])) {
//     console.log("break!");
//     break;
//   }
// }



  var finalString = strArray.join("");
  console.log(finalString);
};


$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userString").val();
    var latinatedString = piglatinator(userInput);

    $("#resultText").text(latinatedString);
    $(".resultBox").show();
  });
});


// THIS WORKS



// } else if (vowels.includes(strArray[1])){
//     strArray.splice((strArray.length), 0, strArray[0]);
//     strArray.shift();
//     strArray.push("ay");
//   } else if (vowels.includes(strArray[2])){
//     strArray.splice((strArray.length), 0, strArray[0]);
//     strArray.splice((strArray.length), 0, strArray[1]);
//     strArray.shift();
//     strArray.shift();
//     strArray.push("ay");
//   }



// post lunch peter thing

// pre lunch loopy
// console.log("full array", strArray);
// strArray.forEach(function(item){
//   if (vowels.includes(strArray[0]) === false){
//     strArray.push(strArray[0]);
//     strArray.shift();
//     console.log("consonant", strArray);
//   }
//   else if (vowels.includes(strArray[0]))
//     // strArray.push("way")
//     console.log("vowel", strArray);
//     // strArray.shift();
// });

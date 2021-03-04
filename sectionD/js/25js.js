var origin_text = $("#origin_text").text();
console.log(origin_text);

function matchFunc(){
  var input_text = $("#input_text").val();
  var substring_var = origin_text.substring(0,input_text.length)
  console.log(input_text);
  console.log(sub);
}

$("#input_text").keypress(matchFunc);

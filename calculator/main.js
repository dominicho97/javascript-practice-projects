





function calc(){
  /*parseInt converts the string we take from html into numbers*/
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;


  if(op == "add"){
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  }
  else if (op == "div"){
    calculate = a / b;
  }
  else if (op == "mul"){
    calculate = a * b;
  }


  // reacts to 'onclick from html biutton(32) -> displays the result on the webpage instead of console
  document.querySelector("#result").innerHTML = calculate;

  }

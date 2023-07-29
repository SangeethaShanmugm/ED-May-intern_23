function calc(option) {
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  let output;
  if (option == "Add") {
    output = `Sum of the number is ${Number(a) +  Number(b)}`;
  } else {
    output = `Sub of the number is ${Number(a) -  Number(b)}`;
  }
  document.getElementsByClassName("out")[0].innerText = output;
}

// function add() {
//   let a = document.getElementById("first").value;
//   let b = document.getElementById("second").value;
//   let output = Number(a) + Number(b);
//   document.getElementsByClassName("out")[0].innerText = `Sum of the number is ${output}`;
// }

// function sub() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let output = Number(a) - Number(b);
//     document.getElementsByClassName("out")[0].innerText = `Sub of the number is ${output}`;
//   }

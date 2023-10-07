var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("p");
var female = document.getElementById("l");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Kolom harus diisi semua!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var heightInMeters = Number(p[1]) / 100;
    var bmi = Number(p[2]) / (heightInMeters * heightInMeters);
    
    var idealWeight;
    if (p[3] === 'male') {
        idealWeight = (heightInMeters * 100 - 100) - ((heightInMeters * 100 - 100) * 0.10);
    } else if (p[3] === 'female') {
        idealWeight = (heightInMeters * 100 - 100) - ((heightInMeters * 100 - 100) * 0.15);
    }

    var result = '';
    if (bmi < 18.5) {
        result = 'Kekurangan berat badan';
    } else if (18.5 <= bmi && bmi <= 25) {
        result = 'Sehat';
    } else if (25 < bmi && bmi <= 27) {
        result = 'Kelebihan berat badan ringan';
    } else if (27 < bmi) {
        result = 'Obesitas';
    }

    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `Anda <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

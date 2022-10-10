
//ini yang buatan gua

function hitungBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let BMI = weight / Math.pow((height/100),2);
  document.getElementById("heading").innerHTML =
    "Indeks Masa Tubuh (BMI)<br> Kamu Adalah";
  document.getElementById("output").innerHTML = BMI;

  if (BMI < 18.5) {
    document.getElementById("pesan").innerHTML =
      "kamu kekurangan berat badan";
  }
  if (BMI >= 18.5 && BMI < 25) {
    document.getElementById("pesan").innerHTML =
      "berat badan kamu cukup";
  }
  if (BMI >= 25 && BMI < 30) {
    document.getElementById("pesan").innerHTML =
      "kamu kelebihan berat badan";
  }
  if (BMI > 30) {
    document.getElementById("pesan").innerHTML = "kamu obesitas";
  }
};

hitungBMI()



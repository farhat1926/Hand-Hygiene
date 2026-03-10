document.addEventListener("DOMContentLoaded", function(){

// ======================
// HITUNG TOTAL
// ======================

const inputs = document.querySelectorAll(".calc1");

inputs.forEach(input => {

input.addEventListener("input", function(){

let total = 0;

document.querySelectorAll(".calc1").forEach(val => {

total += parseInt(val.value) || 0;

});

document.getElementById("total1").value = total;

});

});


// ======================
// KIRIM DATA KE GOOGLE
// ======================

document.getElementById("hhForm").addEventListener("submit", function(e){

e.preventDefault();

const form = document.getElementById("hhForm");
const data = new FormData(form);

fetch("https://script.google.com/macros/s/AKfycbx1vdLxrHnZ18vrNjRlrnc5jAAWof5usYlcamUWAW4ioOKC4_CyqkADpgs3PgJj96mf/exec",{
method:"POST",
body:data
})
.then(res => res.text())
.then(res => {

alert("Data berhasil disimpan ke Google Sheets");

form.reset();
document.getElementById("total1").value="";

})
.catch(err => {

alert("Gagal mengirim data");

});

});

});
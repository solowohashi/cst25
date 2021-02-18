function submitBio(){
var nameVar = document.getElementById("name").value;
console.log(nameVar);
var emailVar = document.getElementById("email").value;
console.log(emailVar);
var messageVar = document.getElementById("message").value;
console.log(messageVar);
}

document.getElementById("social1").addEventListener("click",submitBio());
document.getElementById("social2").addEventListener("click",submitBio());
document.getElementById("submit_bio_id").addEventListener("click",submitBio());

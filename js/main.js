var message;

if (message===undefined)
{
  alert("True"+message);
}       
else
{
  alert("False"+message);
}
var button = document.getElementById('my-button');
console.log("button is: "+button);
$('#my-button').on("click",
function(){
  alert("you clicked");
})
console.log($);

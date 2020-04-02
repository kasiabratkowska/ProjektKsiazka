/*function bark (name, dogWeight){
if(dogWeight>20){
    document.write(dogName + " duży pies");
}
else{
    document.write(dogName + " mały pies");
}
}
*/
function whatShallWear(temp){
if(temp<15){
    console.log("ubierz kurtkę.")
}
else if(temp<25){
    console.log("Ubierz sweter");
}
else{
  console.log("Ubierz t-shirt");
}
}
whatShallWear(10);
whatShallWear(15);
whatShallWear(30);
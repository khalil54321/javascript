var sindhi= + prompt("enter sindhi Marks")
var english = + prompt("enter english marks")
var math = + prompt("enter math marks")
var urdu = + prompt("enter urdu marks")
var pst = + prompt("enter pst marks")

var total =sindhi + english + math + urdu + pst


console.log(sindhi);
console.log(english);
console.log(math);
console.log(urdu);
console.log(pst);
 console.log(total)

 if(total>80){
    console.log("Grade A+");
 }else if(total>70){
    console.log("grade A");
 }else if(total>60){
    console.log("grade B");
 }else if(total>50){
    console.log("grade C");
 }else if(total>40){
    console.log("grade D");
 }else{
    console.log("fail");
 }
 var percentage = total/5
 console.log("percentage")
var abdulrazzak = "yes";

if ( abdulrazzak == "yes")
{
    console.log ("submitted");
} else{
    console.log("Not sumbitted");
} 


var age = prompt("enter your age");
var studentcard = false;
if (age > 18) {
    console.log("allowed")
} else if (studentcard== true) {
    console.log("student are allowed on studentcard")
} else {
    console.log("not Allowed")
}
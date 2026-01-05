// name of the customer
// const is used and variable displayed on webpage
const customer_name=prompt("Enter your name:");
document.getElementById("customer_name").textContent="Welcome,"+customer_name+"!"; //displayed variable values in DOM
// no of visits to reach offer
// let is used
let no_of_visits=0;
//function created
function visit(){
    no_of_visits+=1; //dynamically changing values
    console.log(no_of_visits); //log variable values in console
    if(no_of_visits%5==0){
        alert("congratulations you have unlocked a special offer of getting 1000Rs off this time by visiting our restaurent five times.don't miss this chance!!\nvoucher is sent to your mail");
        sendmail(); //
    }
    if(no_of_visits%10==0){
        alert("congratulations you have unlocked a special offer of getting 5000Rs off this time by visiting our restaurent ten times.don't miss this chance!!");
        no_of_visits=0; //reassigning let value
    }
}
// thank function
const thank=()=>{
    alert("Thank you for your feedback! We appreciate your time and effort in helping us improve our service.");
}
// function expression
const sendmail=function(){
    alert("Mail sent successfully!");
}
// toggle open and close
// function with parameters
let now=new Date();
let time=now.getHours();
function our_status(time){
    if(time>=9 && time<=21){
        console.log("We are open now!");
    }
    else{
        console.log("Sorry, we are closed now. Our working hours are from 9 AM to 9 PM.");
    }
}
our_status(time); 

// declaring object for events

let events={
    name:document.getElementById("name").value,
    email:document.getElementById("mail").value,
    phone:document.getElementById("phone").value,
    no_of_people:document.getElementById("number").value,
    // function to order
    order:function(){
     visit();
     document.getElementById("order").textContent="YOUR BOOKING DETAILS";
     document.getElementById("order_details").textContent="Name: "+this.name+"\n"+"Email: "+events.email+"\n"+"Phone: "+events.phone+"\n"+"No.of People: "+events.no_of_people;
     console.log("Booking successful!");
    },
};


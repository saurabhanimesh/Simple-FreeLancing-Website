
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);

var firebase = firebase.firestore();

const nameid = document.getElementById("name");
const emailid = document.getElementById("email");
const phonenumberid = document.getElementById("phonenumber");
const whatworkid = document.getElementById("textarea");

const submit = document.getElementById("requestsubmit");




submit.addEventListener("click", () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phonenumber = document.getElementById("phonenumber").value;
const whatwork = document.getElementById("textarea").value;
const thankyou1 = document.getElementById("thankyoumessage1");
const thankyou2 = document.getElementById("thankyoumessage2");
const frm=document.getElementById("frm");


if(name.length == 0 || email.length == 0 || phonenumber.length == 0 || whatwork.length == 0)
{
  thankyou1.innerHTML= "Please Fill All the Informations"
  thankyou1.style.display="flex";
  thankyou1.style.color="red";
}
else{
  const customers = firebase.collection("Works").doc(whatwork);

  customers.set({
    Name: name,
    email: email,
    phonenumber: phonenumber,
    requirement: whatwork
  }).then(function () {
    nameid.style.display="none";
    emailid.style.display="none";
    phonenumberid.style.display="none";
    whatworkid.style.display="none";
    submit.style.display="none"
    thankyou1.innerHTML= "Your Request Has Been Sent , You will be Contacted Very Soon"
    thankyou1.style.color="white";
    thankyou1.style.display="flex";
    thankyou2.style.display="flex";
    // frm.style.width ="500px";
  }).catch(function (error) {
    console.log("Error");
  });
}

});




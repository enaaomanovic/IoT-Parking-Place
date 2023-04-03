const firebaseConfig = {
    apiKey: "AIzaSyAfjQDyllz_gbByDEVMdbzavlEcvqfS44k",
    authDomain: "enaiot.firebaseapp.com",
    databaseURL: "https://enaiot-default-rtdb.firebaseio.com",
    projectId: "enaiot",
    storageBucket: "enaiot.appspot.com",
    messagingSenderId: "396816863673",
    appId: "1:396816863673:web:2e8696a6ff8afe54652668",
    measurementId: "G-RH6NCXGSNJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
function Proba() {
    var firebaseRef = firebase.database().ref("test");
    firebaseRef.set(true);
}
function Proba2() {
    var firebaseRef = firebase.database().ref("test");

    firebaseRef.set(false);
}
var x;
var y;

function toggleDivOnClick(buttonId, divId) {
    var button = document.getElementById(buttonId);
    var div = document.getElementById(divId);
    var trenutnidiv=document.getElementById("Glavna");
    var btn1=document.getElementById("btnre");
    var btn2=document.getElementById("btnzsunos");
    button.addEventListener("click", function() {
      if (div.style.display === "none") {
        div.style.display = "block";
        trenutnidiv.style.display="none";
        btn1.style.marginLeft="60px";
        btn1.style.marginRight="60px";
        btn2.style.marginLeft="60px";
        btn2.style.marginRight="60px";

      } else {
        div.style.display = "none";
      }
    });
  }

  toggleDivOnClick("btnre", "reg");
  toggleDivOnClick("btnzsunos", "unos");

  function toggleDivOnClick2(buttonId, divId) {
    var button = document.getElementById(buttonId);
    var div = document.getElementById(divId);
    var trenutnidiv=document.getElementById("reg");
    button.addEventListener("click", function() {
      if (div.style.display === "none") {
        div.style.display = "block";
        div.style.alignContent = "center";

        trenutnidiv.style.display="none";
      } else {
        div.style.display = "none";
      }
    });
  }

  toggleDivOnClick2("back", "Glavna");
  

  const button1 = document.getElementById("drugi");

  button1.addEventListener("click", function() {

    alert("Parking je rezervisan!");
    var firebaseRef = firebase.database().ref("rezervisano");
    firebaseRef.set(true);
    x = document.getElementById("brojRegistracije").value;

  });

  const button2 = document.getElementById("unosbtn");

  button2.addEventListener("click", function() {
    y=document.getElementById("unesenBrojRegistracije").value;
    if(x===y){
    alert("Registracija potvrdjena");
    var firebaseRef = firebase.database().ref("rezervisano");
    firebaseRef.set(false);
    }
    else{
        alert("Ne poklapa se registracija");
    }
  });



window.onload = function() {
  const test = document.getElementById('value');

  var vrijednost = firebase.database().ref("foto2");
vrijednost.on("value", function(snapshot) {
  var value = snapshot.val();
  test.value = value;
});
}

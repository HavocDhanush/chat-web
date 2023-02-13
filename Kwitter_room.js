// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6CsYbhaucqCLSGOD-__Sy2kP_iKt6kXA",
    authDomain: "let-s-chat-web-app-part-2.firebaseapp.com",
    projectId: "let-s-chat-web-app-part-2",
    storageBucket: "let-s-chat-web-app-part-2.appspot.com",
    messagingSenderId: "731141706768",
    appId: "1:731141706768:web:030e75a6f0beba6266e695"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

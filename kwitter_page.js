// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6CsYbhaucqCLSGOD-__Sy2kP_iKt6kXA",
    authDomain: "let-s-chat-web-app-part-2.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-part-2-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-part-2",
    storageBucket: "let-s-chat-web-app-part-2.appspot.com",
    messagingSenderId: "731141706768",
    appId: "1:731141706768:web:030e75a6f0beba6266e695"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);



function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
          dislike:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();
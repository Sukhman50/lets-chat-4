//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBC07HiIq7wUKCKAEMMiE4iNqNhvVU7Zto",
      authDomain: "lets-chat-6c850.firebaseapp.com",
      databaseURL: "https://lets-chat-6c850-default-rtdb.firebaseio.com",
      projectId: "lets-chat-6c850",
      storageBucket: "lets-chat-6c850.appspot.com",
      messagingSenderId: "225438600531",
      appId: "1:225438600531:web:ee1e4bdf3dd1831b39e5a6",
      measurementId: "G-6RN2NQVB0S"
    };
    
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   document.getElementById("room").innerHTML = "Welcome To Room " + room_name;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
var firebaseConfig = {
    apiKey: "AIzaSyAVlCVFSXSCcuKSucG3-f_3JNHDQPeyVvM",
    authDomain: "classtest-56fea.firebaseapp.com",
    databaseURL: "https://classtest-56fea-default-rtdb.firebaseio.com",
    projectId: "classtest-56fea",
    storageBucket: "classtest-56fea.appspot.com",
    messagingSenderId: "1021648625924",
    appId: "1:1021648625924:web:88e280b6676bbfcef4b051"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStroge.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "kwitter.html";
}
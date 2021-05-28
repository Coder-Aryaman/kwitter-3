// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyASZPxPsJNdXyoXAs2g7KiatxCQvGO_VDo",
      authDomain: "kwitter-f3d23.firebaseapp.com",
      databaseURL: "https://kwitter-f3d23-default-rtdb.firebaseio.com",
      projectId: "kwitter-f3d23",
      storageBucket: "kwitter-f3d23.appspot.com",
      messagingSenderId: "1043192907919",
      appId: "1:1043192907919:web:ae25f5bdf9e25734f708fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";


    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room space"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach
      (function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="twitter_page.html"
}

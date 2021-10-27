
var firebaseConfig = {
      apiKey: "AIzaSyBbNazrzuhoF1p6aZytTfgsfR-Rja4Xn9I",
      authDomain: "kwitternew-5f5fc.firebaseapp.com",
      databaseURL: "https://kwitternew-5f5fc-default-rtdb.firebaseio.com",
      projectId: "kwitternew-5f5fc",
      storageBucket: "kwitternew-5f5fc.appspot.com",
      messagingSenderId: "707151259271",
      appId: "1:707151259271:web:825a71fa964b25b906ba22"
    };

    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME     "+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value ;
          localStorage.setItem("room_name",room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
             console.log(Room_names);
             row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
             document.getElementById("output").innerHTML+=row;
      });});}
getData();
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name) ;
            window.location="kwitter_page.html";    
       }


       function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
        }
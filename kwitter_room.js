var firebaseConfig = {
    apiKey: "AIzaSyDc_2dHy7N4e07cnnU2dD4jaedchtQ4t5s",
    authDomain: "kwitter-project-6a404.firebaseapp.com",
    databaseURL: "https://kwitter-project-6a404-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-6a404",
    storageBucket: "kwitter-project-6a404.appspot.com",
    messagingSenderId: "102841771349",
    appId: "1:102841771349:web:cce604bb6c213ac329fbdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
    console.log("inside addRoom")
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"      
  });
}
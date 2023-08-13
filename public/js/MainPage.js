const socket = io();

socket.emit('login',{userId:'YourUserID'});
socket.on('usercnt', function(msg) {
  $('#UsersCounnt')[0].innerHTML = "There is "+ msg +" Users online";
});
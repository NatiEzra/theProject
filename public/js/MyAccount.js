

$(document).ready(function() {
    $("#reset").click(function() {
      $("#firstName").val(firstName );
      $("#lastName").val(lastName);
      $("#eMail").val(eMail);

    });
  
    SaveData();
  });
  
  function SaveData() {
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    eMail = $("#eMail").val();
    Password2=$("#Password2").val();
  }
  

  /*
        $("#Password2").val(Password2);
    Password2=$("#Password2").val();
  
  */


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
  }
  
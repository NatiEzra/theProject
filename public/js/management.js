function toggleForm() {
    var formContainer = $("#formContainer");
    if (formContainer.hasClass("form-container-hidden")) {
      formContainer.removeClass("form-container-hidden");
      formContainer.addClass("form-container-add");
    } else {
      formContainer.removeClass("form-container-add");
      formContainer.addClass("form-container-hidden");
    }
  }
  
  $("#Additem").click(function() {
    toggleForm();
  });
  
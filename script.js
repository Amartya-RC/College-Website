function percentage() {

    // Method returns the element of total-marks id
    var num1 = document.getElementById("total-marks").value;
  
    // Method returns the elements of full-marks id
    var num2 = document.getElementById("full-marks").value;
    document.getElementById("show-percentage")
      .value = (num1 * 100) / num2 + "%";
  }
  
  $('#disability').on('change', function (e) {
      switch(this.value) {
        case "Yes":
          $("#disability-file-input").removeClass("hide");
          $("#disability-certificate").rules("add",'required')
          break;
        case "No":
          $("#disability-file-input").addClass("hide");
          $("#disability-certificate").rules("remove",'required')
          break;
      }
  });
  
  
  $('#caste').on('change', function (e) {
      if(["obc", "scst"].includes(this.value)) {
          $("#caste-file-input").removeClass("hide");
          $("#caste-certificate").rules("add","required")
      }
      else{
          $("#caste-file-input").addClass("hide");
          $("#caste-certificate").rules("remove","required")
      }
  });
  
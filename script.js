
  function toggleMenu() {
    var menu = document.querySelectorAll("menu");
    menu.classList.toggle('active');
  }


  
  document.getElementById("submitForm").addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    
    var formData = new FormData(this);
    
    
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  });

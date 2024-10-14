function validate() {
    const email = document.getElementById("emailbox").value
  
    if (!email.endsWith("@binus.ac.id" || "@gmail.com")) {
      alert("Email must be @binus.ac.id or @gmail.com")
      return false;
    }
  
    alert("Register Success")
  
    return true;
  }
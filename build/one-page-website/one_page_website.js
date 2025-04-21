function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["ename"].value;
    let z = document.forms["myForm"]["number"].value;
    if (x == "") {
      alert("Name must be filled out all");
      return false;
    }
    if (y == "") {
        alert("You must be filled out all");
        return false;
      }
      if (z == "") {
        alert("Name must be filled out all");
        return false;
      }

    else {
        alert("Thank you! We will assist you as soon as possible")
        return false;
    }
}

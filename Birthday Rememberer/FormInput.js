function Generate(){

  
    var username = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
  
    var blob = new Blob([username], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "birthdayList.txt");
}
document.getElementById("myForm").addEventListener("submit", saveFile(), fs.appendFile());
function saveFile(){

    const username = document.getElementById('name');
    const birthday = document.getElementById('birthday');

    let data = 
    '\r Name: ' + username.value + ' \r\n ' + 
    'Birthday: ' +birthday.value + ' \r\n '

    var blob = new Blob([data], { type: 'text/plain' });
    
    saveAs(blob, "birthdayList.txt");
}
const fs = require('fs');

fs.appendFile('birthdayList.txt', blob, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
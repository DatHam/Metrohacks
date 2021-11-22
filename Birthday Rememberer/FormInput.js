let saveFile = () => {

  
    const username = document.getElementById('name');
    const birthday = document.getElementById('birthday');

    let data = 
    '\r Name: ' + username.value + ' \r\n ' + 
    'Birthday: ' +birthday.value + ' \r\n '

    var blob = new Blob([data], { type: 'text/plain' });
    FileWrite(blob, "birthdayList.txt");
    
}
var names = [];
var birthdays = [];
var dates = [];

var fs = require('fs');
var text = fs.readFileSync('Birthday Rememberer\\birthdayList.txt', 'utf-8');

var lines = text.split("\n");

for(var i = 0; i < lines.length; i++) {
    var index = 0;
    var m;
    var d;
    var y;
    names[i] = lines[i].substring(0, lines[i].indexOf(":"));
    birthdays[i] = lines[i].substring(lines[i].indexOf(":") + 2);
    index = birthdays[i].indexOf("/");
    m = birthdays[i].substring(0, index);
    dates[i] = new Date()
}
console.log(names);
console.log(birthdays);


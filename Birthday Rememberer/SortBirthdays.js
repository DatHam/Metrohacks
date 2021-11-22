var names = [];
var birthdays = [];
var dates = [];
var months = [];
var days = [];
var years = [];
var today = new Date();
today = {
    date: today,
    month: today.getMonth(),
    day: today.getDate(),
    year: today.getFullYear()
};

var profiles = [];
var sortedProfiles = [];

var fs = require('fs');
var text = fs.readFileSync('Birthday Rememberer\\birthdayList.txt', 'utf-8');

var lines = text.split("\n");

for(var i = 0; i < lines.length; i++) {
    var index = 0;
    names[i] = lines[i].substring(0, lines[i].indexOf(":"));
    birthdays[i] = lines[i].substring(lines[i].indexOf(":") + 2);
    index = birthdays[i].indexOf("/");
    var m = birthdays[i].substring(0, index) - 1;
    index = birthdays[i].indexOf("/", index + 1);
    var d = birthdays[i].substring(birthdays[i].indexOf("/") + 1, index);
    var y = birthdays[i].substring(index + 1);
    dates[i] = new Date(y, m, d);
    months[i] = m;
    days[i] = d;
    years[i] = y; 
}

for(var i = 0; i < lines.length; i++) {
    profiles[i] = {
        name: names[i],
        date: dates[i],
        month: months[i],
        day: days[i],
        year: years[i]
    };
}

profiles.sort(function(a, b) {
    return a.day - b.day;
});
profiles.sort(function(a, b) {
    return a.month - b.month;
});

var index = 0;
for(var i = 0; profiles[i].month < today.month && i < lines.length; i++) {
    index++;
}
for(var i = index; profiles[i].day < today.day && i < lines.length; i++) {
    index++;
}

for(var i = index; i < lines.length; i++) {
    sortedProfiles[i - index] = profiles[i];
}
for(var i = 0; i < index; i++) {
    sortedProfiles[i + (lines.length - index)] = profiles[i];
}
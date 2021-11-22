function Write(name, birthday){

    var fso, f, r;
    var ForReading = 1, ForWriting = 8;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    f = fso.OpenTextFile("birthdayList.txt", ForWriting, true);
    f.Write(link + title);
    f.Close();
}
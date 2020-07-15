var btn = document.getElementById('btnApply');
var d = document.getElementById('mydiv');
var txt = document.getElementById('txtChoice');
btn.addEventListener('click', onApplyClick);

function onApplyClick() {

    if (txt.value === "1") {
        d.innerHTML = myBestFriend();
    } else if (txt.value === "2") {
        d.innerHTML = mySchool();
    } else {
        d.innerHTML = "invalid choice";
    }

}

function myBestFriend() {
    var str = "<h1>Write an essay</h1><h2>My Best Friend</h2><p>xyz is my best friend we go to school together.</p>";
    return str;
}

function mySchool() {
    var str = "<h1>Write a Poem</h1><h2>My School</h2><p>xyz is my best friend we go to school together.</p>";
    return str;
}
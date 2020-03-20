
function ageInDays(){

    var birthYear = prompt('What year were you born... good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    // console.log(ageInDayss);

}
function reset(){
    document.getElementById('ageInDays').remove();
}


// let birthYear = 1996;
// let ageInDays = (2018 - birthYear) * 365;


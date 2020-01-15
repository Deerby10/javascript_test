## Javascript typing test
First let's design the app.

# Creating HTML and form
```Javascript
<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <form name = "form">
        <table style="border:5px solid black;margin-left:auto;margin-right:auto;" width=59 cellpadding=1 cellspacing=1>
            <tr>
                <td colspan=1 center> <input type="button" id="button" value="Start Typing Test" name="start" > </td>
            </tr>
            <tr>
                <td><textarea name="given" cols=53 rows=3 ></textarea></td>
            </tr>
            <tr>    
                <td colspan=1>
                    <input type="text" id="text" name="typed" size=57 >
                    <input type="button" id="doneButton" value="DONE"  name="stop"></td>
            </tr>
        </table>
    </form>

</body>
</html>
```
# Creating Javascript
```Javascript
//Instatiation
var count=0;
var fullMessage="hi,";
var msg=[
            'rat','ball','cow','dog','sat','.','kite','fan','hut','ink','junk','man','kilo','lung',
            'monday','soon','.','sunday','poet','raw','sat','temple','user','van','xmas','now','owl','.','fun',
            'now','roll','novel','climb','run','swim','went','play','rotten','surely','title','under','various',
            'expanded','data','brew','amazing','conversation','over','relaxing','under','conversation','chewing','peeling'
        ];
           
for(i=0;i<10;i++){
    var msgLength = Object.keys(msg).length; //check the length of our array
    var randNum=Math.floor((Math.random()*msgLength)); //have a random number to be used in our Array index
        
    if(msg[randNum]!=".") //msg[randNum]
    fullMessage += " "+ msg[randNum];
    else
    fullMessage += msg[randNum]; //add

    count++; //increment here represents the number of words
}
```
creating function to start the typing test
```Javascript
function beginit(){
day = new Date();
startType = day.getTime();
document.form.given.value =fullMessage;
document.form.typed.focus();
document.form.typed.select();
}
```
lets call the function we've made
```Javascript
<input type="button" id="button" value="Start Typing Test" name="start" onClick="beginit()"> </td>
```
`onClick` is one of the mouse events and there are some more different kind of events. For more information follow this link [ HTML Events ](https://www.w3schools.com/tags/ref_eventattributes.asp)

```Javascript
function focusText(){
document.form.typed.focus(); //It will focus on the input field and it will make the `Given words textarea` uneditable. 
}
```

```Javascript
function done() {
dayTwo = new Date();
endType = dayTwo.getTime();
totalTime = ((endType - startType) / 1000)
spd = Math.round((count/totalTime) * 60)

if(document.form.typed.value.length==document.form.given.value.length)
{
    if (document.form.typed.value === document.form.given.value)
    {
        alert("\nYou typed  " + count + " word sentence in "
        + totalTime + " seconds, a speed of about " + spd + " words per minute!")
        window.location.reload();
    }
    else
    {
        alert("You made some error, ")
        window.location.reload();
    }
}
    else
    {
        alert("You didn't typed the whole Sentence or You might have left something. "+ " " + " "+ "Next Time Type Carefully...!!");
        window.location.reload();
    }
}
```
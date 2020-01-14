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
                <td colspan=1 center> <input type="button" id="button" value="Start Typing Test" name="start" onClick="beginit()"> </td>
            </tr>
            <tr>
                <td><textarea name="given" cols=53 rows=3 onFocus="focusText()"></textarea></td>
            </tr>
            <tr>    
                <td colspan=1>
                    <input type="text" id="text" name="typed" size=57 >
                    <input type="button" id="button1" value=DONE  name="stop"  onClick="done()"></td>
            </tr>
        </table>
    </form>

</body>
</html>
```
# Creating Javascript file
```Javascript

```
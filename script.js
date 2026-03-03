var student={"name":"Ashleigh","age":13,"favcolor":"pink"};
document.write(student+"<br>")
document.write("My name is"+student["name"]+"<br>")
document.write("I am"+student.age+"years old"+"<br>")
document.write("My favorite color is" +student.favcolor+"<hr>")


document.write("Math object"+"<br>");
document.write(Math.random()+"<br>");
document.write(Math.random()*100+"<br>");
document.write(Math.sin(0)+"<br>");
document.write(Math.abs(-6)+"<br>");
document.write(Math.round(Math.random()*100)+"<br>");
document.write(Math.sqrt(64)+"<hr>");


function findMax()
{
    var i;
    var max = 0;
    for(i = 0; i < arguments.length; i++)
    {
       if (arguments[i] > max)
        {
            max = arguments[i];
        } 
    }
    return max;
}
document.write(findMax(4,5,6,8,2));
function myfunc()
{
    var x = document.forms['myForm']['name'].value;
    var length = x.length;
    for(var i=0;i<length;i++)
    {
        console.log(length);
        var result = x.charCodeAt(i);
       var object = char(result,x[i]);
       document.write(object.char+":[",object.value1+"],[",`${object.value2}]<br>`);
       
       
        
    }

    
}

function char(result,x){
    var arrayOf = [String.fromCharCode(result-2),String.fromCharCode(result-1),String.fromCharCode(result),String.fromCharCode(result+1),String.fromCharCode(result+2)];
    var arrayOf2 = [String.fromCharCode(result-2+1),String.fromCharCode(result-1+1),String.fromCharCode(result+1),String.fromCharCode(result+1+1),String.fromCharCode(result+2+1)];
    var object = {char:x,value1:arrayOf,value2:arrayOf2};
    return object;
    

}
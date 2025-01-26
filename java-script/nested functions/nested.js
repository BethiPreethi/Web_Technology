 function parent()
 {
    let a=100;
    function child(){
        console.log(a);
    }
    return child
 }
 parent()()

    let b='hello'
    const c=100
    function parent1()
    {
        console.log(b);
        console.log(c);
        function child()
        {
            console.log("i am child");
            
        }
        return child()
    }
 parent1()



 
 

    var input =document.getElementById("input")
    

    var ac    =document.getElementById("ac")
    var de    =document.getElementById("de")
    var dot    =document.getElementById("dot")
    var divide    =document.getElementById("divide")

    var seven    =document.getElementById("seven")
    var eight    =document.getElementById("eight")
    var nine   =document.getElementById("nine")
    var multi   =document.getElementById("multi")

    var four    =document.getElementById("four")
    var five    =document.getElementById("five")
    var six    =document.getElementById("six")
    var sub    =document.getElementById("sub")

    var one    =document.getElementById("one")
    var two    =document.getElementById("two")
    var three   =document.getElementById("three")
    var add    =document.getElementById("add")

    var dbZero    =document.getElementById("dbZero")
    var zero    =document.getElementById("zero")
    var equal    =document.getElementById("equal")

    one.addEventListener("click",()=>{
        input.value += one.value
        
    })

    two.addEventListener("click",()=>{
        input.value += two.value
    })
   
    three.addEventListener("click",()=>{
        input.value += three.value
    })

    four.addEventListener("click",()=>{
        input.value += four.value
    })

    five.addEventListener("click",()=>{
        input.value += five.value
    })

    six.addEventListener("click",()=>{
        input.value += six.value
    })

    seven.addEventListener("click",()=>{
        input.value += seven.value
    })

    eight.addEventListener("click",()=>{
        input.value += eight.value
    })

     nine.addEventListener("click",()=>{
        input.value += nine.value
     })
     zero.addEventListener("click",()=>{
        input.value += zero.value
     })
     dbZero.addEventListener("click",()=>{
        input.value += dbZero.value
     })

     dot.addEventListener("click",()=>{
        input.value += dot.value
     })
     divide.addEventListener("click",()=>{
        input.value += divide.value
     })
     multi.addEventListener("click",()=>{
        input.value += multi.value
     })
     sub.addEventListener("click",()=>{
        input.value += sub.value
     })
     add.addEventListener("click",()=>{
        input.value += add.value
     })

    equal.addEventListener("click",()=>{
        input.value =eval(input.value)
    })

    
    de.addEventListener("click",()=>{
      var del = input.value.slice(0,-1)
      input.value=del
      
           
    })

    ac.addEventListener("click",()=>{
      var allClear = input.value.slice(0,-0)
     
      input.value=allClear
    //   input.value=" " --------------> 
    //          (or) -----> any one can use
    // input.value.slice(0,0)---------->
           
    })

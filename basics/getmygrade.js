let getmyg=function(curentmarks,totalm){
    let myPerc =(curentmarks/totalm)*100

    let mygrade=''

    if(myPerc>=90){
        mygrade='A'
    } 
    else if(myPerc>=75){
        mygrade='B'
}
else if(myPerc>=60){
    mygrade='C'
}
else{
mygrade='F'
}
return `Your grade is ${mygrade} and myPerc is ${myPerc}`  
}

let res = getmyg(454,600)
console.log(res)
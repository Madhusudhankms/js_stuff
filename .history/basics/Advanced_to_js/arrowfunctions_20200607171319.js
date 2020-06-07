// const sayHello =(name)=>{
//     return 'hey there '+name+'!'
// }

//console.log(sayHello('madhu'))

const todo=[{
    title :'good mng',
    isDone : true
},
{
    title : 'go to walk',
    isDone : true

},
{
    title : 'take rest',
    isDone : false
}]

const thingsDone = todo.filter((todo)=> todo.isDone === true )

console.log(thingsDone)

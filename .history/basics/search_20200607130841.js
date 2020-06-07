  const mytodo = ['madhu','bhargav','nirmala']
  //console.log(mytodo[mytodo.indexOf('nirmala')]);

  const newtodos =[{
      title : 'how to reach billion dallar in account',
      isStarted : 'one day i vll'

  },
    {
        title : 'work hard',
        isDone :'doing'

    },
    {
        title : 'stay calm even situation is wors',
        isDone : 'i vll'
    }
]
// const findtodo = newtodos.findIndex(function(todo,index){
//     console.log(todo)
// return todo.isDone === 'i vll'

// }) 
//console.log(findtodo)

const findTodo =function(mytodoss,title='null'){
    const index = mytodoss.findIndex(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return index
}
let res = findTodo(newtodos)
console.log(res)
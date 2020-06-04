myTodo = {
    day: 'monday',                  //create a function that will caluculat meeetings and reset meetings
    meetings : 0,                    //meetings
    meetleft: 0, 
meetingss : function(num){
    this.meetings=this.meetings + num
    //return this.meeting,
},
meetingsLeft : function(num2){
    this.meetleft = this.meetings-num2
},

resetDay : function(){
    this.meetings = 0
    this.meetleft = 0
}
}
myTodo.meetingss(4)
console.log(myTodo.meetings)
myTodo.meetingsLeft(2)
console.log(myTodo.meetleft)
myTodo.resetDay()
console.log(`number of meetings in starting position ${myTodo.meetings} and noumer of meetleft is ${myTodo.meetleft}`)


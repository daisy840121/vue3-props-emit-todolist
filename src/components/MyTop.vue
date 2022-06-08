<template>
    <div class="todoList-top">
        <MyHeader @addItem="addTodo"/>
        <MyList :date="date" @checkTodo="checkTodo" @deleteTodo="deleteTodo" @updateTodo="updateTodo" />
    </div>
    <div class="todoList-footer">
        <div class="todoList-footer-text">
          <span>已完成 {{date.doneTotal}} / 全部 {{date.total}} </span>
        </div>
    </div>
</template>

<script>
import {reactive,computed } from 'vue'
import MyHeader from './MyHeader'
import MyList from './MyList'

export default {
    name: 'MyTop',
    components: {MyHeader,MyList},
    setup() {
      let date = reactive({
        todos:[
          {
              id:'01',
              title:'吃飯',
              done:false
          }
        ],
    })
       
    //新增
    function addTodo(newTodo){
        date.todos.unshift(newTodo)
    }   
    //監聽check
        function checkTodo(id){
            date.todos.forEach((todo)=>{
                if(todo.id === id) todo.done = !todo.done
            })
        }
    //刪除
        function deleteTodo(id){
            date.todos = date.todos.filter(todo => todo.id !== id)
        }
    //編輯
        function updateTodo(id,title){
            date.todos.forEach((todo)=>{
                if(todo.id === id) todo.title = title
            })
        }

        date.total = computed(()=>{
            return date.todos.length
        })
        
        date.doneTotal = computed({
            get(){
                return date.todos.reduce((pre,current) => pre + (current.done?1:0),0)
            },
        })
        return {
            date,
            addTodo,
            checkTodo,
            deleteTodo,
            updateTodo
        }
    },
}
</script>


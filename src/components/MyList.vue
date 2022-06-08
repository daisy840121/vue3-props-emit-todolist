<template>
    <ul class="todoList-content">
      <li class="todoList-item" v-for="t in date.todos" :key="t.id">
        <div class="todoList-text">
          <input type="checkbox"  :checked="t.done" @change="handelCheck(t.id)">
          <span v-show="!t.isEdit">{{t.title}}</span>
          <input type="text" v-show="t.isEdit" :value="t.title" @blur="handelBlur(t,$event)" @keyup.enter="handelBlur(t,$event)">
        </div>
        <div class="todoList-button">
          <button class="todoList-button-edit" @click="handelEdit(t)">編輯 <font-awesome-icon :icon="['fas', 'pen']" /></button>
          <button class="todoList-button-del" @click="handelDelete(t.id)">刪除 <font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </li>
    </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'MyList',
  components: {FontAwesomeIcon},
  props:['date'],
  emits:['addItem','checkTodo','deleteTodo','updateTodo'],
  setup(_,context){

    function handelCheck(id){
      context.emit('checkTodo',id);
    }

    function handelDelete(id){
        if(confirm('確定刪除嗎？')){
          context.emit('deleteTodo',id);
        }
    }

    function handelEdit(t){
      t['isEdit']=true
    }

    function handelBlur(t,event){
        t['isEdit']=false
        if(!event.target.value.trim())return alert('輸入不能為空')
        context.emit('updateTodo',t.id,event.target.value)
    }


    return{
      handelCheck,
      handelDelete,
      handelEdit,
      handelBlur
    }
  },
}
</script>
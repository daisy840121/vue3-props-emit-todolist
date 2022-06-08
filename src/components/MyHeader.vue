<template>
    <div class="todoList-header">
        <div class="enter-group">
        <input type="text" v-model="title" @keyup.enter="add">
            <button @click="add"><font-awesome-icon :icon="['fas', 'plus']" /></button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {nanoid} from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'MyHeader',
    components: {FontAwesomeIcon},
    emits:['addItem'],
    setup(_,context){
        let title = ref('')
        function add(){
            if(!this.title.trim())return alert('請輸入數據')
            const obj = { id:nanoid(),title:this.title,done:false };
            context.emit('addItem',obj);
            this.title = '';
        }

        return{
            title,
            add,
        }
    }
}
</script>
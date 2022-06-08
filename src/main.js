import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faPlus,faTrashCan,faPen)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

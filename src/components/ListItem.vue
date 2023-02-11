<template>
    <div>
        <div v-if="todos.length > 0" class="flex flex-col gap-2 w-full mt-10 px-5">
            <CardItem v-for="(item, index) in orderData" :item="item" :key="index" @delete="remove(item)" @edit="handleClickModal(item.id)">
                <Modal v-if="isOpenEdit" @action="handleClickModal" @update="update" :item="itemToEdit" />
            </CardItem>
        </div>
        <img class="w-32 h-32 mx-auto" v-else src="../assets/images/empty.svg" alt="empty">
    </div>
</template>
<script>
import CardItem from './CardItem.vue';
import Modal from './Modal.vue'
export default {
    inject: ['$_'],
    components: {
        CardItem,
        Modal
    },
    data() {
        return {
            todos: [],
            isOpenEdit: false,
            itemToEdit: {},
            tasks: [],
            indexToEdit: null
        }
    },
    methods: {
        remove(task) {
            this.todos = this.todos.filter(todo => todo !== task)
            localStorage.setItem("todos", JSON.stringify(this.todos));
        },
        handleClickModal(id) {
            this.itemToEdit = this.todos.filter(todo => todo.id == id)[0]
            this.indexToEdit = this.todos.indexOf(this.itemToEdit)
            this.isOpenEdit = !this.isOpenEdit
        },
        update(item){
            this.todos[this.indexToEdit] = item
            localStorage.setItem("todos", JSON.stringify(this.todos));
            this.isOpenEdit = !this.isOpenEdit
        },
        refreshData() {
            this.todos = (localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];
        }
    },
    beforeUpdate(){
        this.refreshData() 
    },
    created() {
        this.todos = (localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];
    },
    computed:{
        orderData(){
            return this.todos.slice().reverse()
        }
    }
}
</script>
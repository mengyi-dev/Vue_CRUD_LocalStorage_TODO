<template>
    <form v-on:submit="getData" class="md:w-6/12 px-5 mx-auto relative flex">
        <input type="text" required
            placeholder="Go to the gym"
            v-model="title"
            class="border w-[80%] p-2 outline-primary sm:w-full"
        >
        <select v-model="priority" 
            class="outline-primary bg-red-600 text-white p-[1px]"
            >
            <option value="Low">Low</option>
            <option value="Medium" selected>Medium</option>
            <option value="High">High</option>
        </select>
        <button class="bg-primary text-white h-[45px] w-[20%] px-10 p-1">Add</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            todos: [],
            title: '',
            priority: 'Low',
            time: new Date(),
            newData: {}
        }
    },
    methods: {
        getData(e) {
            e.preventDefault();
            this.newData.id = (new Date()).getTime()
            this.newData.title = this.title
            this.newData.priority = this.priority
            this.newData.time = this.time
            this.save()
            this.title = ''
            this.newData = {}
        },
        save(){
            this.todos = (localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];
            this.todos.push(this.newData)
            localStorage.setItem("todos", JSON.stringify(this.todos));
            this.$emit('recieveStatus')
        }
    }
}
</script>
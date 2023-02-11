<template>
    <div class="w-full h-screen fixed left-0 top-0 z-0 flex items-center px-5">
        <div @click="this.$emit('action')" class="w-full h-screen fixed left-0 top-0 bg-slate-400 opacity-50 z-0"></div>
        <div class="md:w-6/12 h-[300px] bg-white mx-auto  p-5 z-50 transition-all delay-300">
            <h1 class="text-primary font-semibold text-2xl">Edit Todo</h1>
            <form @submit="handleSubmit" class="w-full mx-auto relative flex my-auto bg-white mt-8">
                <input type="text" required
                placeholder="Go to the gym"
                v-model="data.title"
                class="border w-[80%] p-2 outline-primary"
                >
                <select v-model="data.priority" 
                    class="outline-primary bg-red-600 text-white"
                    >
                    <option value="Low">Low</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="High">High</option>
                </select>
                <button class="bg-primary text-white h-[45px] w-[20%] px-10">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            data: {
                id: this.item.id,
                title: this.item.title,
                priority: this.item.priority,
                time: this.item.time,
            }
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.$emit('update', this.data)
        }
    }
}
</script>
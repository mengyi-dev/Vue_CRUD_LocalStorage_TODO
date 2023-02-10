<template>
  <div class="home">
    <CreateItem @recieveStatus="isAddNew = !isAddNew" />
    <ListItem :status="isAddNew" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from '@/components/ListItem.vue';
import CreateItem from '@/components/CreateItem.vue';

export default {
  name: 'HomeView',
  components: {
    ListItem,
    CreateItem
  },
  data() {
    return {
      isAddNew: false
    }
  },
}
</script>

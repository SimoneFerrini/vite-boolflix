<script>
import {store} from "../store";

export default{
  data(){
    return{

        store,
    }
  },

}

</script>

<template>
    <div class="search-bar">
        <input v-model="store.searchTitle" @keyup.enter="$emit('search')" placeholder="Search..." type="text">
        <button @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
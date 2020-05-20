<template>
   <div>
       <!-- <h1>dasd</h1> -->
       <h1>多个插槽</h1>
       <slot name="text01"></slot>
       <slot name="text02"></slot>
       <h2>作用域插槽</h2>
       <slot name="text03" :studentdata="studentdata"></slot>
   </div>
</template>

<script>
export default {
    data() {
        return {
            
            studentdata:["嘻嘻","实打实","dsda1"],
        }
    },

}
</script>

<style>

</style>
<template>
 <div>
      <div>slot</div>
      <slotson>
         <template v-slot:text01> <button>text01</button>
         </template>
            <template v-slot:text02><button>text02</button></template>
              <template v-slot:text03="slotProps">
                  <ul>
                      <li v-for="item in slotProps.studentdata" :key="item">
                          {{item}}
                      </li>
                      <!-- <li>{{slotProps}}</li> -->
                  </ul>
              </template>
      </slotson>
 </div>
</template>

<script>
import slotson from "./slotson"
export default {
    components:{
        slotson
    }
}
</script>

<style>

</style>
<template>
  <div>

      <h1>{{count}}</h1>
      <!-- <el-button>
          dsadas
      </el-button> -->
      <button>das</button>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        ...mapState(["count"])
    },
}
</script>

<style>

</style>
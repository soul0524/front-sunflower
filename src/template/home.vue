<template>
  <div>
  <template v-if="id==''||id==undefined">
    <m-header></m-header>
    </template>
    <template v-else>
  欢迎进入共享吧
    </template>
  </div>
</template>
<script>
import MHeader from '@/components/header'
export default {
  components: {
    MHeader
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      id: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id)
  }
}

</script>
<style>


</style>

<template>
  <div>
    <m-header></m-header>
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
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>
<style>


</style>

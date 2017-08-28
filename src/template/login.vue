<template>
  <div id="login">
  </div>
</template>
<script>
export default{
  name: 'login',
  data() {
    return {
    };
  },
  methods: {
    login() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}

</script>

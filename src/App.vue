<template>
  <Main/>
</template>

<script>
import Main from './views/Main';
import axios from 'axios';

export default {
  components: {
    Main, 
  },
  data () {
    return {}
  },
  async mounted() {
    const res = await axios.get('/api/login')
    const user = res.data
    if (user.error === true) {
      this.$router.go('/login');
    }
  }
}
</script>

<template>
  <div>
    <h1>Welcome to HomePage</h1>
    <router-link to="/create-category">Go to Create Category</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
h1 {
  color: #333;
}
a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>

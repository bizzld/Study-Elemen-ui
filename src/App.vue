<template>

  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/layout">Layout</router-link> |
      <router-link to="/container">Container</router-link> |
      <router-link to="/icon">Icon and Link</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/radio">Radio and Checkbox</router-link> |
      <router-link to="/input">input输入框</router-link> |
      <hr>
      <router-link to="/cascade">Cascade</router-link> |
      <router-link to="/switch">Switch</router-link> |
      <router-link to="/slider">Slider</router-link> |
      <router-link to="/timepicker">TimePicker</router-link> |
      <router-link to="/datepicker">DatePicker</router-link> |
      <router-link to="/upload">Upload</router-link> |
      <router-link to="/rate">Rate</router-link> |
      <hr>
      <router-link to="/colorpicker">ColorPicker</router-link> |
      <router-link to="/transfer">Transfer</router-link> |
      <router-link to="/form">Form表单</router-link> |
      <router-link to="/tag-badge">Tag Badge</router-link> |
      <router-link to="/avatar">Avatar头像框和progress进度条</router-link> |

      <router-link to="/about">About</router-link>

<!--      <br>-->

    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>
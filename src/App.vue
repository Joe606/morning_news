<template>
  <div id="app">
    <img src="./assets/morning_news.jpg" />
    <div id="nav">
      <router-link to="/first">OVERSEAS NEWS</router-link> |
      <router-link to="/second">DOMESTIC NEWS</router-link>
    </div>
    <router-view />
    <br /><br />
    <div id="foot">
      <footer>天气×日期</footer>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
  border-left: 0px;
  padding-left: 0px;
  background-color: rgb(111, 129, 129);

  border-radius: 8px;
}
img {
  width: 600px;
  height: 200px;
  margin: 0px;
  border: 0px;
  padding: 0px;

  border-radius: 8px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6d815;
}

#nav {
  background-color: rgb(69, 77, 50);
  margin: 0px;
  border: 0px;
  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 30px;
  border-radius: 20px;
}

#nav a {
  font-weight: bold;
  color: #5456f3;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d30d0d;
}

#foot {
  position: relative;

  bottom: -80px;
  color: dimgray;
  clear: both;
}
</style>

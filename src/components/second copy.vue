<template>
  <section id="domestic_news">
    <h1>domestic news</h1>
    <div>
      <ul>
        <li>
          <a href="https://sohu.com/" target="_blank">搜狐</a>
        </li>
        <li>
          <a href="https://qq.com/" target="_blank"
            >腾讯新闻</a
          >
        </li>
        <li>
          <a href="https://163.com/" target="_blank">网易</a>
        </li>
        <li>
          <a href="https://weibo.com/" target="_blank">微博</a>
        </li>
        <li>
          <a href="https://people.com.cn/" target="_blank"
            >人民日报</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
export default {
  name: "Second"
  
};
</script>


<style scoped>
ul{
  list-style-type:none;
}
a {
  
  margin:1px solid blue;
  border: 1px  green;
  padding:0px solid red;
  
  width: 800px;
  height: 60px;

  font-family: 'Times New Roman', Times, serif;
  font-size: 23px;
  font-weight: lighter;

  text-align: left;
  text-decoration: none;

  
  color: mediumspringgreen;

  
}
a:hover {
  color: deeppink;
}
</style>
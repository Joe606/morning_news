<template>
  <section id="domestic_news">
    <h1>domestic news</h1>
    <div v-for="item in items"  v-bind:key='item' >
      <ul >
      <li class="image" >
          <a v-bind:href="item.url" target="_blank">
            <img v-bind:src="item.img_src" alt="图片无法显示" />
          </a>
          <div class="desc">{{item.name}}</div>
        </li>
               
        <!--
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
        -->

      </ul>
    </div>
  </section>
</template>



<script>
// Vue.component("Second",
// {
//   el:'.domestic_news',
//   data:
// })
export default {
  name: "Second",
  //props:['src'],
  data:function(){
    return {
      items:[
      {name:'搜狐',url:'https://sohu.com/',img_src:require('@/assets/sohu.png')},//动态渲染图片需要require()修饰
      {name:'腾讯新闻',url:'https://qq.com/',img_src:require('@/assets/tencent.png')},
      {name:'网易',url:'https://163.com/',img_src:require('@/assets/163.png')},
      {name:'微博',url:'https://weibo.com/',img_src:require('@/assets/weibo.png')},
      {name:'人民日报',url:'https://people.com.cn/',img_src:require('@/assets/people.png')},
           ]}
    
  }
  
};
</script>


<style scoped>
ul {
  list-style-type: none;
}

.image {
  float: left;
  width: 240px;
  height: 150px;
  margin: 7px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.image:hover {
  border: 1px solid rgb(204, 16, 16);
  color:greenyellow;
}

img {
  margin: 0px;
  border: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.desc {
  font-family: cursive;
  padding: 10px;
  text-align: center;
}
</style>
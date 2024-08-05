<template>
  <div>
    <div @click = "modal = false">
      <div class="black-bg" v-if = "modal == true">
        <div class="white-bg">
          <h4>상세페이지</h4>
          <p>상세페이지내용</p>
        </div>
      </div>
    </div>




    <div class="menu" >
      <a v-for="i in menu" :key="i">{{i}}</a>
    </div>
    
    <br/>
    <hr/>
    <br/>
    
    <div v-for="(p,i) in products" :key="p">
      <img @click="modal = true" class="room-img" :src = imgs[i]>
      <h4 @click="modal = true">{{p}}</h4>
      <p>{{price[i]}}</p>
    </div>
    

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      modal: false,
      menu: ['HOME','SHOP','ABOUT'],
      imgs: [require('./assets/room0.jpg'),require('./assets/room1.jpg'),require('./assets/room2.jpg')],
      products: ['원룸', '투룸', '복층'],
      price: [10,20,30],
    }
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
  text-align: center;
}
.black-bg {
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%; 
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;  
}
.menu a {
  color: white;
  padding: 10px;
  margin: 0 100px;
}

.room-img {
  width: 70%;
  margin: 10px 50px ;
  margin-top: 50px;
}

</style>

<template>
  <div id="app">
    <router-view class="router"/>
    <!-- <transition :name="name">
      <router-view class="router"/>
    </transition> -->
  </div>
</template>

<script>

export default {
  name: "page1",
  data() {
    return {
      name: "left-fade"
    };
  },
  watch: {
    //给路由添加动画
    // $route: function() {
    //   if (!this.$router.isBack) {
    //     this.name = "left-fade";
    //     this.$router.isBack = true;
    //   } else {
    //     this.name = "right-fade";
    //   }
    // }
  }
};
</script>

<style scoped>
.left-fade-leave-to {
  transform: translateX(-100%);
}
.left-fade-enter {
  transform: translateX(100%);
}
.right-fade-leave-to {
  transform: translateX(100%);
}
.right-fade-enter {
  transform: translateX(-100%);
}
</style>

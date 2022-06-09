<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <header-nav @expend-side="expendSide"></header-nav>
        </el-header>
        <el-container class="content-body">
          <el-aside
            width="200px"
            class="body-left"
            :class="!isExpend ? 'openSide' : 'closeSide'"
            ><side-bar ref="sideBarRef"></side-bar
          ></el-aside>
          <el-main> <router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import { RouterView } from "vue-router";
import HeaderNav from "./header.vue";
import SideBar from "./sideBar.vue";
export default defineComponent({
  name: "LayOut",
  components: {
    RouterView,
    HeaderNav,
    SideBar
  },

  setup() {
    let isExpend = ref(false);
    const sideBarRef: any = ref(null);
    const expendSide = (): void => {
      sideBarRef.value && sideBarRef.value.expendSide();
      isExpend.value = !isExpend.value;
    };
    return {
      isExpend,
      sideBarRef,
      expendSide
    };
  }
});
</script>
<style lang="scss" scoped>
.common-layout {
  .header {
    margin: -8px -8px 0 -8px;
    background: #3b3535;
  }
  .openSide {
    width: 200px;
    transition: width 0.5s;
    -moz-transition: width 0.5s; /* Firefox 4 */
    -webkit-transition: width 0.5s; /* Safari 和 Chrome */
    -o-transition: width 0.5s; /* Opera */
  }
  .closeSide {
    width: 50px;
    transition: width 0.5s;
    -moz-transition: width 0.5s; /* Firefox 4 */
    -webkit-transition: width 0.5s; /* Safari 和 Chrome */
    -o-transition: width 0.5s; /* Opera */
  }
  .content-body {
    .body-left {
      margin-left: -8px;
      height: 100vh;
      background: #545d64;
    }
  }
}
</style>

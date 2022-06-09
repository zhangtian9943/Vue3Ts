<template>
  <div class="side">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in childOptions" :key="index">
        <!-- 一级目录 -->
        <template v-if="item.children && item.children.length > 0">
          <el-sub-menu :index="index + ''">
            <template #title>
              <el-icon><component :is="item.meta.icon"></component></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>

            <!-- 二级目录 -->
            <template v-for="(second, sindex) in item.children" :key="sindex">
              <template v-if="second.children && second.children.length > 0">
                <el-sub-menu :index="index + '-' + sindex">
                  <template #title>
                    <el-icon><component :is="second.meta.icon" /></el-icon>
                    <span>{{ second.meta.title }} </span>
                  </template>

                  <!-- 三级目录 -->
                  <template
                    v-for="(third, tindex) in second.children"
                    :key="tindex"
                  >
                    <el-menu-item
                      :index="index + '-' + sindex + '-' + tindex"
                      @click="routerJump(third.path)"
                      ><el-icon><component :is="third.meta.icon" /></el-icon
                      ><template #title>
                        {{ third.meta.title }}
                      </template>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>

              <!-- 二级目录 -->
              <template v-else>
                <el-menu-item
                  :key="sindex"
                  :index="index + '-' + sindex"
                  @click="routerJump(second.path)"
                  ><el-icon><component :is="second.meta.icon" /></el-icon
                  ><template #title>
                    {{ second.meta.title }}
                  </template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级目录 -->
        <template v-else>
          <el-menu-item
            :key="index"
            :index="index + ''"
            @click="routerJump(item.path)"
          >
            <el-icon><component :is="item.meta.icon" /></el-icon>
            <template #title>
              <span> {{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from "@element-plus/icons-vue";

import routerArray from "../../router/homeWork/index";
export default defineComponent({
  name: "SideBar",
  components: {
    RouterLink
  },

  setup(props) {
    const childOptions: any = routerArray;
    const router = useRouter();

    // 时间触发展开收起侧边导航栏
    let isCollapse = ref(false);
    const expendSide = (): void => {
      isCollapse.value = !isCollapse.value;
    };

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    // 路由跳转
    const routerJump = (path: string): void => {
      console.log("1111");
      router.push({ path: path });
    };

    return {
      childOptions,
      routerJump,

      expendSide,
      isCollapse,
      handleOpen,
      handleClose,
      Document,
      Location,
      IconMenu,
      Setting
    };
  }
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  border-right: none;
}
.side {
  padding-right: -3px;
}
</style>

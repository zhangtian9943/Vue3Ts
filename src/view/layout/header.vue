<template>
  <div class="nav">
    <el-row>
      <el-col :span="3">
        <div class="logo-title">
          <span> scrm系统 </span>
          <el-icon
            :size="20"
            class="logo-expend"
            @click="expendClose"
            v-if="isCollapse"
          >
            <Fold />
          </el-icon>

          <el-icon :size="20" class="logo-expend" @click="expendClose" v-else>
            <Expand />
          </el-icon>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="nav-header">
          <span class="nav-header-left">首页</span>
          <span class="nav-header-right">工作台</span>
        </div>
      </el-col>

      <el-col :span="15">
        <div class="nav-avatar">
          <!-- 个人中心 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                :size="40"
                :src="avatar"
                class="avatar-hover"
              ></el-avatar>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <!-- 刷新 -->
          <el-icon :size="25" class="refersh-icon">
            <Refresh />
          </el-icon>

          <!-- 工作区 -->
          <el-dropdown class="nav-work">
            <span class="el-dropdown-link">
              工作区
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Expand } from "@element-plus/icons-vue";

import avatar from "@/assets/avatar/personal.jpeg";
export default defineComponent({
  name: "HeaderNav",
  emits: ["expend-side"],
  setup(props, ctx) {
    const isCollapse = ref(true);
    const expendClose = (): void => {
      isCollapse.value = !isCollapse.value;
      ctx.emit("expend-side");
    };
    return {
      isCollapse,
      Expand,
      expendClose,
      avatar
    };
  }
});
</script>

<style lang="scss" scoped>
.nav {
  color: white;
  width: 100%;
  height: 100%;
  line-height: 60px;
  .logo-title {
    display: flex;
    align-items: center;
    .logo-expend {
      padding-left: 90px;
      cursor: pointer;
    }
  }
  .nav-header {
    .nav-header-left {
      cursor: pointer;
    }
    .nav-header-right {
      display: inline-block;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .nav-avatar {
    display: flex;
    height: 100%;
    flex-direction: row-reverse;
    align-items: center;
    .avatar-hover {
      cursor: pointer;
    }
    .refersh-icon {
      margin-right: 20px;
      cursor: pointer;
    }
    .nav-work {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
.el-dropdown {
  color: white;
}
</style>

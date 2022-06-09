<template>
  <div>
    列表
    <el-icon>
      <component :is="'Edit'"></component>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "List"
});
</script>

<style lang="scss" scoped></style>

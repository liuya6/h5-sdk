<template>
  <div class="home">
    <div class="nav">home</div>
    <Button type="primary">1111</Button>
    <CellGroup>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" label="描述信息" />
    </CellGroup>
    <Tabs v-model="active">
      <tab title="标签 1">
        <img src="../assets/img/biBg.png" alt="" width="100%" />
      </tab>
      <tab title="标签 2">内容 2</tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button, CellGroup, Cell, Tab, Tabs } from "vant";

@Component({
  components: {
    Button,
    CellGroup,
    Cell,
    Tab,
    Tabs,
  },
})
export default class HomeView extends Vue {
  active = 0;
}
</script>

<style lang="scss" scoped>
.nav {
  width: 375px;
  height: 50px;
  background-color: #f1f1f1;
  color: $theme;
}
</style>

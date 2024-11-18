   <template>
  <a-collapse
    v-model:activeKey="activeKey"
    :bordered="false"
    style="background: rgb(255, 255, 255)"
  >
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <a-collapse-panel key="1" :style="customStyle">
      <template #header>
        <h5 class="section-title c-mb-40">
          🎯 {{ title }}
          <span v-if="!disShowNum" :data-number="titleNum"></span>
        </h5>
      </template>
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script setup>
import { ref } from "vue";
const activeKey = ref(["1"]);
const props = defineProps({
  title: {
    //分类名称
    type: [Number, String],
    default: () => "Tips",
  },
  titleNum: {
    //分类序号
    type: [String],
    default: () => "01",
  },
  disShowNum: {
    //是否展示序号
    type: Boolean,
    default: () => false,
  },
});
const text = "test";
const customStyle =
  "background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden";
</script>
  <style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
  letter-spacing: 0;
  font-weight: 800;
  color: #7c7d7d;
  font-size: 1.25rem;
  line-height: 1.2;
  -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, 0.4));

  span {
    position: relative;
    margin-left: 20px;
    margin-right: 35px;
    display: inline-block;
    height: 1px;
    border-bottom: dotted 2px rgba(225, 225, 235, 0.9);
    width: 100%;

    &:after {
      content: attr(data-number);
      border-radius: 50%;
      position: absolute;
      font-size: 11px;
      font-weight: 600;
      text-align: center;
      color: #7b7b7d;
      opacity: 0.8;
      width: 15px;
      height: 15px;
      top: -6px;
      right: -35px;
    }
  }
}

.title-icon {
  font-size: 2.3rem;
  margin-right: 15px;
}
</style>
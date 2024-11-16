<template>
  <section class="zy-tools">
    <ZyPageHeader
      current="Tools"
      img="https://imgur.com/AadznD8.jpeg"
      title="Tools"
      subTitle="tools"
    />
    <a-collapse
      v-model:activeKey="activeKey"
      :bordered="false"
      style="background: rgb(255, 255, 255)"
      accordion
    >
      <template #expandIcon="{ isActive }">
        <caret-right-outlined :rotate="isActive ? 90 : 0" />
      </template>
      <a-collapse-panel
        :style="customStyle"
        v-for="(item, index) in state.toolsData"
        :key="index"
      >
        <template #header>
          <h5 class="section-title c-mb-40">🎁 {{ item.category }}</h5>
        </template>
        <div class="project-list">
          <div
            v-for="(item1, index1) in item.info"
            :key="item1"
            class="project-item-card"
            :title="item1.abstract"
            @click="goToWbesite(item1.url)"
            ref="projectItem"
            @mouseenter="(e) => handleMouseEnter(e, index1)"
            @mousemove="(e) => handleMouseEnter(e, index1)"
            @mouseleave="(e) => handleMouseLeave(e, index1)"
          >
            <img class="card-img lazy-image" :src="item1.icon" alt="pic" />
            <div class="project-item-card__glow">
              <div class="glow-content">
                <div class="work-info-icon">
                  <i class="iconfont icon-a-thecode"></i>
                </div>
                <div class="work-info-title">{{ item1.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </section>
  <ZyModal
    :minWidth="350"
    :show="state.show.work"
    title="项目详情"
    key="ViewUserInfo"
    @close="close"
  >
    <WorkDetail :viewData="state.viewData" />
  </ZyModal>
</template>

<script setup>
/**
 *@author ZY
 *@date 2023/7/21 21:37
 *@Description:3D卡片列表展示
 */
import { ref, reactive, nextTick, watch, onMounted } from "vue";
import ZyModal from "../../components/common/ZyModal.vue";
import ZyPageHeader from "../../components/common/ZyPageHeader.vue";
import ZySectionHeader from "../../components/common/ZySectionHeader.vue";
import WorkDetail from "../../components/common/work-detail.vue";
import GxjToolsMenu from "../../components/common/GxjToolsMenu.vue";
import lazyLoadImages from "../../libs/util.lazyLoad";
import { goToPage } from "../../libs/util.router";
import { toolsList } from "../../api/modules/api.tools";
// 引用和状态变量
const projectItemRefs = ref([]);
const projectItem = ref(null);
const activeKey = ref(["1"]);
const state = reactive({
  show: {
    work: false,
  },
  portfoliosQuery: {
    params: {
      // recommended: true,
      status: true,
    },
    pagination: {
      current: 1,
      pageSize: 15,
    },
  },
  toolsData: [],
  viewData: {},
});

const close = () => {
  state.show.work = false;
};
const viewWorks = (item) => {
  state.viewData = item;
  state.show.work = true;
};

const goToWbesite = (url) => {
  window.open(url, "_blank");
};

// 辅助函数：将 projectItemCard 旋转至鼠标位置
const rotateToMouse = (e, projectItemCard) => {
  // 获取 projectItemCard 的边界参数
  let bounds = projectItemCard.getBoundingClientRect();
  // 计算鼠标位置相对于卡片左上角的位置
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;

  // 计算卡片中心位置
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };

  // 计算从中心到鼠标位置的距离
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  // 根据鼠标位置应用缩放和旋转变换
  projectItemCard.style.transform = `
            scale(1.02)
            rotate3d(
                ${center.y / 100},
                ${center.x / 100},
                0,
                ${Math.log(distance) * 0.5}deg
            )
        `;

  // 根据鼠标位置调整发光效果
  const glowElement = projectItemCard.querySelector(".project-item-card__glow");
  glowElement.style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #ffffff55,
                #0000000f
            )
        `;
};

// 事件处理程序：鼠标进入和离开
const handleMouseEnter = (e, index) => {
  rotateToMouse(e, projectItemRefs.value[index]);
};

const handleMouseLeave = (e, index) => {
  // 鼠标离开时重置变换
  document.removeEventListener("mousemove", rotateToMouse);
  let projectItemCard = projectItemRefs.value[index];
  projectItemCard.style.transform = "";
  const glowElement = projectItemCard.querySelector(".project-item-card__glow");
  glowElement.style.backgroundImage = "";
};

// 数据更新后使用 nextTick 来确保在 DOM 更新后执行 lazyLoadImages 方法
watch(
  () => state.toolsData,
  () => {
    nextTick(() => {
      projectItemRefs.value = [...projectItem.value];
      lazyLoadImages();
    });
  }
);

const getToolsList = () => {
  toolsList(state.portfoliosQuery).then((res) => {
    console.log("🚀 ~ toolsList ~ res:", res);

    state.toolsData = resultFomat(res.data.result) || [];
    console.log("🚀 ~ toolsList ~ toolsList:", state.toolsData);
  });
};
function resultFomat(result) {
  return result.reduce((acc, obj) => {
    // 如果 acc 中还没有这个 category，就创建一个新对象
    if (!acc.some((item) => item.category === obj.category)) {
      acc.push({
        category: obj.category,
        info: [],
      });
    }
    // 查找对应的 category 对象，并添加当前对象到其 info 数组中
    const categoryObj = acc.find((item) => item.category === obj.category);
    if (categoryObj) {
      categoryObj.info.push({
        abstract: obj.abstract,
        blank2: obj.blank2,
        blank3: obj.blank3,
        blank4: obj.blank4,
        blank5: obj.blank5,
        icon: obj.icon,
        status: obj.status,
        tag: obj.tag,
        title: obj.title,
        url: obj.url,
        _id: obj._id,
      });
    }
    return acc;
  }, []);
}
getToolsList();

onMounted(() => {});
</script>


<style lang="scss" scoped>
$primaryColor: #6a848e;
$hoverColor: rgba(255, 255, 255, 0.27);
$glowColorStart: rgba(255, 255, 255, 0.13);
$glowColorEnd: #0000000f;
// 定义一些常用的媒体查询断点
$breakpoint-sm: 576px; // 小屏幕，如手机
$breakpoint-md: 768px; // 中等屏幕，如平板电脑
$breakpoint-lg: 992px; // 大屏幕，如小型笔记本电脑
$breakpoint-xl: 1200px; // 超大屏幕，如桌面电脑

// 定义媒体查询的mixin
@mixin media-query($breakpoint) {
  @media only screen and (min-width: $breakpoint) {
    @content;
  }
}

@mixin media-query-max($breakpoint) {
  @media only screen and (max-width: $breakpoint) {
    @content;
  }
}

.zy-tools {
  background-color: #fff;

  background-position: 50% 80%;

  .tools-head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 380px;

    // background-image: url("https://picsum.photos/id/27/1600/900");
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
    background-attachment: fixed;
    transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);

    .banner-text-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 900px;
      margin-top: 110px;

      .banner-title {
        font-size: 50px;
        color: #ffffff;
        font-family: GmarketSansBold;
        filter: contrast(10);
      }

      .banner-title-sub {
        font-size: 1.3em;
        color: #eaeaea;
        margin-bottom: 1rem;
      }

      .ban-bred {
        letter-spacing: 0.5px;
        color: #555555;
        background-color: rgba(#eee, 0.5);
        padding: 0 1rem;
        border-radius: 5px;
        width: 30%;
        min-width: 170px;

        span {
          padding-left: 0;
          display: inline-block;
          cursor: pointer;
          font-size: 1.3rem;
        }

        .current {
          color: #ffffff;
        }
      }
    }
  }
}

.project-list {
  width: 100%;
  display: flex;
  perspective: 1200px;
  padding: 1.8rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  @include media-query($breakpoint-sm) {
    perspective: 2000px;
    padding: 1rem;
  }

  @include media-query($breakpoint-md) {
    perspective: 1800px;
  }

  @include media-query($breakpoint-lg) {
    perspective: 1200px;
  }
  @include media-query-max($breakpoint-sm) {
    padding: 1rem;
  }

  .project-item-card {
    min-width: 200px;
    width: calc(20% - 2rem);
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 8px;
    position: relative;
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    overflow: hidden;
    cursor: pointer;
    transition: transform 250ms linear;
    margin-bottom: 1rem;
    margin-right: 1rem;

    @include media-query($breakpoint-sm) {
      width: 100%;
    }
    @include media-query-max($breakpoint-sm) {
      width: 100%;
      margin-right: 0;
    }

    @include media-query($breakpoint-md) {
      width: calc(33.33% - 2rem);
    }

    @include media-query($breakpoint-lg) {
      width: calc(20% - 1rem);
    }

    .card-img {
      display: inline-block;
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
      object-fit: contain;
    }

    &:hover {
      transition-duration: 150ms;
      box-shadow: 0 0 20px 5px $hoverColor;
    }

    &__glow {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: radial-gradient(
        circle at 50% -20%,
        $glowColorStart,
        $glowColorEnd
      );

      .glow-content {
        background-color: rgba(#000, 0.5);
        height: 100%;
        //filter: brightness(2);
        opacity: 0;
        transition: all 0.3s linear;

        font-size: 0.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ffffff;
        box-sizing: border-box;
        padding: 8px;

        &:hover {
          opacity: 1;
        }

        .work-info-icon .iconfont {
          font-size: 3rem;
          color: $color-primary;
          text-shadow: 0 0 10px $color-primary;
        }

        .work-info-title {
          font-size: 1.1rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .work-info-desc {
          text-align: center;
          max-height: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
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

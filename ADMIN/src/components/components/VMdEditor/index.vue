<template>
  <section style="width: 100%;height: 100%">
    <v-md-editor
        ref="editor"
        v-model="content"
        :height="height + 'px'"
        :mode="mode"
        :placeholder="placeholder"
        :toolbar="toolbarCustom"
        :left-toolbar=toolbar.leftToolbar
        :right-toolbar="toolbar.rightToolbar"
        :disabled-menus="toolbar.disabledMenus"
        @change="handleChange"
        @image-click="handleClickImage"
        @upload-image="handleUploadImage"
        @copy-code-success="handleCopyCodeSuccess"
    ></v-md-editor>
  </section>
</template>

<script setup>
import {watchEffect, ref} from "vue";
import toolbar from './toolbar'
import axios from 'axios'
import utilStrotage from 'libs/util.strotage'

const props = defineProps(
    {
      height: {
        type: Number,
        default() {
          return 400
        }
      },
      placeholder: {
        type: String,
        default() {
          return '请输入内容'
        }
      },
      mode: {
        type: String,
        default() {
          //可选值：edit(纯编辑模式) editable(编辑与预览模式) preview(纯预览模式)。
          return 'editable'
        }
      },
      mdContent: {
        type: String,
        default() {
          return ''
        }
      }
    }
)
const emit = defineEmits(["update:value"])

const content = ref('')
const editor = ref(null)
// 自定义菜单
const toolbarCustom = {
  media: {
    title: '媒体文件',
    icon: 'v-md-icon-open-in-new',
    itemWidth: '56px',
    rowNum: 5,
    menus: [
      {
        name: '在线音频文件',
        text: '在线音频地址',
        action() {
          let url = '在线音频地址';
          let content = `<audio src="${url}" controls></audio>`;
          editor.value.insert((selected) => {
            return {
              text: content,
              selected: content,
            };
          });
        },
      },
      {
        name: '在线视频文件',
        text: '在线视频地址',
        action() {
          let url = '在线视频地址';
          let content = `<video src="${url}" width="720" height="auto" controls></video>`;
          editor.value.insert((selected) => {
            return {
              text: content,
              selected: content,
            };
          });
        },
      },
      {
        name: '上传本地文件',
        text: '本地媒体文件',
        action() {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.click();
          fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            // 检查文件类型
            const allowedVideoTypes = ['video/mp4', 'video/webm']; // 允许的视频文件类型
            const allowedAudioTypes = ['audio/mpeg', 'audio/wav']; // 允许的音频文件类型

            if (allowedVideoTypes.includes(file.type)) {
              // 用户上传的是视频文件
              handleVideoFile(file);
            } else if (allowedAudioTypes.includes(file.type)) {
              // 用户上传的是音频文件
              handleAudioFile(file);
            } else {
              // 文件类型不合法，进行错误处理或提示用户
              console.error('不支持的文件类型');
            }
          });

          function handleVideoFile(file) {
            // 调用上传函数或其他逻辑
            let param = new FormData();
            param.append('file', file, file.name);
            let config = {
              headers: {'Content-Type': 'multipart/form-data', 'authorization': utilStrotage.get('token')}
            };
            axios.post(`/v1/common/files/upload`, param, config)
                .then(response => {
                  if (response.data.status) {
                    let url = response.data.data.previewUrl || response.data.data.downloadUrl;
                    let content = `<video src="${url}" width="720" height="auto" controls></video>`;
                    editor.value.insert((selected) => {
                      return {
                        text: content,
                        selected: content,
                      };
                    });
                  }
                });
          }

          function handleAudioFile(file) {
            // 调用上传函数或其他逻辑
            let param = new FormData();
            param.append('file', file, file.name);
            let config = {
              headers: {'Content-Type': 'multipart/form-data', 'authorization': utilStrotage.get('token')}
            };
            axios.post(`/v1/common/files/upload`, param, config)
                .then(response => {
                  if (response.data.status) {
                    let url = response.data.data.previewUrl || response.data.data.downloadUrl;
                    let content = `<audio src="${url}" controls></audio>`;
                    editor.value.insert((selected) => {
                      return {
                        text: content,
                        selected: content,
                      };
                    });
                  }
                });
          }

        },
      },
    ],
  },
  file: {
    title: '上传其他文件',
    icon: 'v-md-icon-open-in-new',
    itemWidth: '56px',
    rowNum: 5,
    menus: [
      {
        name: '在线其他类型文件',
        text: '在线其他类型文件地址',
        action() {
          let url = '在线其他类型文件地址';
          let content = `[${'其他类型文件名称'}](${url})`;
          editor.value.insert((selected) => {
            return {
              text: content,
              selected: content,
            };
          });
        },
      },
      {
        name: '上传本地其他类型文件',
        text: '上传本地其他类型文件',
        action() {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.click();
          fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            // 调用上传函数或其他逻辑
            let param = new FormData();
            param.append('file', file, file.name);
            let config = {
              headers: {'Content-Type': 'multipart/form-data', 'authorization': utilStrotage.get('token')}
            };
            axios.post(`/v1/common/files/upload`, param, config)
                .then(response => {
                  if (response.data.status) {
                    let url = response.data.data.previewUrl || response.data.data.downloadUrl;
                    let content = `[${file.name}](${url})`;
                    editor.value.insert((selected) => {
                      return {
                        text: content,
                        selected: content,
                      };
                    });
                  }
                });
          })
        },
      },
    ],
  },
}

watchEffect(() => {
  content.value = props.mdContent
})

const handleCopyCodeSuccess = (code) => {
  let oInput = document.createElement('input')
  oInput.value = code
  document.body.appendChild(oInput)
  oInput.select()
  document.execCommand("Copy");
  oInput.remove()
}

const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  let file = files[0]
  let param = new FormData() // 创建form对象
  param.append('file', file, file.name) // 通过append向form对象添加数据
  let config = {
    headers: {'Content-Type': 'multipart/form-data', 'authorization': utilStrotage.get('token')}
  }
  axios.post(`/v1/common/files/upload`, param, config)
      .then(response => {
        if (response.data.status) {
          editor.value.insert((selected) => {
            return {
              text: `<img src="${response.data.data.previewUrl}" alt="${response.data.data.filename}">`,
              selected: content,
            };
          });
        }
      })
}

const handleClickImage = (images, currentIndex) => {
  window.open(images[currentIndex])
}

const handleChange = (val) => {
  // 父组件使用 v-model:value  或者 @update:value
  emit('update:value', val)
}

</script>

<style lang="scss">
.v-md-editor__main {
  img {
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s linear;
  }

  video {
    border-radius: 10px;
    transition: all .2s linear;

    &:hover {
      border-radius: 3px;
    }
  }

  hr {
    height: 1px;
    border: none;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), $color-primary, rgba(0, 0, 0, 0));
    margin: .8rem 0;
  }


  .github-markdown-body {
    font-family: inherit;
    transition: all .2s linear;
    letter-spacing: .5px;
    width: 100%;

    word-break: break-word;
    line-height: 1.75;
    font-weight: 400;
    font-size: 15px;
    position: relative;


    // 主题颜色
    $p-color: #279262;


    nav.table-of-contents {
      display: none;
    }

    /* 标题样式 */
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.5;
      margin-top: 25px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      font-weight: 600;
    }

    h1 {
      font-size: 30px;
      margin-bottom: 5px;
      color: $p-color;
    }

    h2 {
      font-size: 22px;
      display: inline-block;
      font-weight: 700;
      background: $p-color;
      color: #fff;
      padding: 6px 8px 0 0;
      border-top-right-radius: 6px;
      margin-right: 2px;
      box-shadow: 6px 3px 0 0 rgba(47, 132, 194, .2);

      &:before {
        content: " ";
        display: inline-block;
        width: 8px;
      }

      &:after {
        content: " ";
        position: absolute;
        display: block;
        width: calc(100% - 32px);
        border-bottom: 3px solid $p-color;
      }
    }

    h3 {
      font-size: 18px;
      padding-bottom: 0;
    }

    h4 {
      font-size: 16px;
    }

    h5 {
      font-size: 15px;
    }

    h6 {
      margin-top: 5px;
    }


    p {
      line-height: inherit;
      margin: 15px 0;
    }

    /* 横线样式 */
    hr {
      border: none;
      border-top: 1px dashed rgba($p-color, .15) !important;
      margin-top: 32px;
      margin-bottom: 32px;
      background-image: none;
    }

    /* 加粗样式 */
    strong {
      font-weight: 600;
      background-color: inherit;
      color: $p-color;
    }

    /* 斜体样式 */
    em {
      background-color: inherit;
      color: #949415;
    }

    a {
      text-decoration: none;
      color: $p-color;
      margin: 0 3px;
      border-bottom: 1px solid rgba($p-color, .6);

      &:active, &:hover {
        color: rgba($p-color, .6);
      }
    }

    a:before {
      content: "➤ ";
    }


    blockquote {
      padding: 1px 22px;
      margin: 22px 0;
      border-left: 6px solid $p-color;
      background-color: rgba($p-color, .1);
      border-radius: 2px;

      &:after {
        display: block;
        content: "";
      }

      > p {
        margin: 10px 0;
      }
    }

    /* 表格样式 */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 0.5rem auto;
    }

    thead tr {
      border: 1px solid red;
    }

    th,
    td {
      border: 1px solid #ececec;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      transition: all 0.3s linear;
      background-color: #f6f6f6;
    }

    ol, ul {
      padding-left: 28px;

      li {
        margin-bottom: 0;
        list-style: inherit;

        &::marker {
          color: $p-color;
        }

        .task-list-item {
          list-style: none;

          ol, ul {
            margin-top: 0;
          }
        }

        ol ol, ol ul, ul ol, ul ul {
          margin-top: 3px;
        }

        ol li {
          padding-left: 6px;
          color: #282d36;
        }
      }
    }


    del {
      color: $p-color;
    }


    /* 缩写样式 */
    abbr {
      text-decoration: none;
      border-bottom: 2px dashed $p-color;
      font-weight: bold;
      cursor: help;
      transition: all .2s linear;
    }


    input[type=checkbox]:checked:before {
      content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVQ4T72TMU7DQBBF318XdFR06egQEnAXRINEGlqgowoIR8AF4AZOZ4JEGq5AC5EixBU4A55BNrEVHAcSBTHlaubt37/zxZKlcn7n6mDPXJvz8IJ89HzWu8t7C8D2dfsY52ae4apHnLx0ktsCsHXZjiUuFgG40x2eJ/H/AhztB+zDUTpLwWj8jGkzxSHiHaMPrDQC8sMoilKzLAUqiKQjmb+ZuAdW80tmelCHODoNgSfP7AFprTTaRTzsJN1GEyuIZ7uW6TEEHwCtyV/6EVBKJHhfzgC0Xv/iXwEFBF4FG0378bd7sPQq5xK/hSnk6sdlX3mZrKkwLZKBeu8n9XuWEUE7X+YAAAAASUVORK5CYII=);
      position: relative;
      top: -1px;
      left: -1px;
    }


    .math .katex {
      font-family: Menlo, Monaco, Consolas, Courier New, monospace;
      word-break: break-word;
      border-radius: 2px;
      overflow-x: auto;
      background-color: #f6ffed;
      color: #52c41a;
      font-size: .87em;
      padding: .065em .4em;
    }

    @media (max-width: 720px) {
      h1 {
        font-size: 22px;
      }

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 18px;
      }
    }

    pre {
      width: 100%;
      margin: 0.8rem 0;
      border: 1px solid #f6f6f6;
    }

    code {
      word-break: break-word;
      border-radius: 2px;
      overflow-x: auto;
      background-color: #f6ffed;
      color: #52c41a;
      font-size: .9em;
      padding: .065em .4em;
    }

    pre code {
      width: 100%;
      font-size: 14px;
      border-radius: 4px;
      display: inline-block;
      font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
      box-sizing: border-box;
      word-break: break-all;
      padding: 1em;
      margin: 0;
    }

    pre.v-md-hljs-js {
      padding: 12px 2px 12px 40px !important;
      border-radius: 5px !important;
      position: relative;
      font-size: 14px !important;
      line-height: 22px !important;
      overflow: hidden !important;
      background: linear-gradient(180deg, rgba($p-color, .1), transparent) !important;

      &:before {
        content: "";
        display: block;
        height: 30px;
        width: 100%;
        position: absolute;
        left: 0px;
        top: -2px;
        background: url(data:image/png;base64,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) 10px 10px no-repeat;
        background-size: 40px
      }

      code {
        display: block !important;
        margin: 0 10px !important;
        margin-left: 0 !important;
        overflow-x: auto !important;
        background: transparent !important;
        color: inherit !important;
      }

      .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 28px;
        bottom: 12px;
        left: 0;
        font-size: 100%;
        width: 40px;
        text-align: center;
        letter-spacing: -1px;
        border-right: 1px solid #eee;
        user-select: none;
        counter-reset: linenumber;

        span {
          pointer-events: none;
          display: block;
          counter-increment: linenumber;

          &:before {
            content: counter(linenumber);
            color: #c1c0c0;
            display: block;
            font-size: .8rem;
            text-align: center;
          }
        }
      }

      b.name {
        position: absolute;
        top: 5px;
        right: 70px;
        z-index: 10;
        color: #999;
        pointer-events: none;
      }

      .copy-btn {
        position: absolute;
        top: 5px;
        right: 4px;
        z-index: 10;
        color: #333;
        cursor: pointer;
        background-color: rgba(#ffffff, .5);
        border: 0;
        border-radius: 2px;

        &:hover {
          background-color: rgba(#ffffff, 1);
        }
      }
    }


    video,
    img {
      border-radius: 8px;
      transition: all 0.3s linear;
    }

    video:hover,
    img:hover {
      border-radius: 3px;
    }


    audio {
      display: block;
      margin: 10px 0;
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
    }

    audio::-webkit-media-controls-panel {
      background-color: #f2f2f2;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }

    audio::-webkit-media-controls-play-button {
      color: var(--color-primary);
    }


    /* 自定义容器样式 */
    .tip-container,
    .warning-container,
    .danger-container,
    .details-container {
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 10px;

      .cu-title {
        font-weight: bold;
      }
    }

    .tip-container {
      border: 1px solid #8bc34a;
      background-color: #f1f8e9;

      .cu-title {
        color: #8bc34a;
      }
    }

    .warning-container {
      border: 1px solid #ffc107;
      background-color: #fff8e1;

      .cu-title {
        color: #ffc107;
      }
    }

    .danger-container {
      border: 2px solid #f44336;
      background-color: #ffebee;

      .cu-title {
        color: #f44336;
      }
    }

    .details-container {
      border: 1px solid #ddd;
      background-color: #f0f9ff;
    }

    /* 自定义容器摘要样式 */
    .details-summary {
      font-weight: bold;
      cursor: pointer;
    }

    /* 待办列表样式 */
    input[type="checkbox"] {
      width: 15px;
      height: 15px;
      border: 1px solid #d9d9d9;
      background-color: #fff;
      border-radius: 2px;
    }

    label {
      position: relative;
      padding-left: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    input[type="checkbox"]:disabled + label {
      opacity: 0.9;
      cursor: not-allowed;
      pointer-events: none;
    }

    input:checked + label::after {
      display: block;
    }

    /* 序列表样式 */
    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
      padding-left: 30px;
    }

    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-top: 10px;
      padding-left: 30px;
    }

  }

}
</style>

<template>
  <section class="g-captcha-layout" :style="{width: `${pWidth}px`}">
    <div class="image-wrapper" :style="pStyleCpd">
      <img class="bg-image" :src="puzzleImage" />
      <img class="slider" :src="sliderImage" :style="sStyleCpd" />
      <div v-show="loadingImg" class="loading-wrapper">
        <span class="current-loading-icon"></span>
        加载中...
      </div>
      <div
        class="refresh-wrapper"
        :style="{ 
          'background-image': `url(${refreshIcon})`,
          'cursor': isDisabledRefreshCpd ? 'not-allowed' : 'pointer'
        }"
        @click="refreshFn"
      ></div>
    </div>
    <div class="slider-bar-wrapper">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="code === CODE_ENUM.REQUEST_TOO_FREQUENTLY" class="reload">
        <img class="tip-icon" :src="failIcon" />
        <span>操作过于频繁，请点击</span>
        <span class="current-reload" @click="reset">重试</span>
      </div>
      <div v-else-if="code === CODE_ENUM.OK" class="success">
        <img class="tip-icon" :src="successIcon" />
        <span>验证成功！</span>
      </div>
      <div v-else class="default-wrapper">
        <div class="default error-bg default-transition" v-show="isCommonErrorCpd" :style="{width: `${stateBarWidth}px`}">
          <span 
            class="default-btn error-btn"
            :style="{ 'background-image': `url(${closeIcon})` }"
          >
          </span>
        </div>
        <div class="default" v-show="!isCommonErrorCpd" :class="{ 'error-bg': isCommonErrorCpd, 'default-transition': isCommonErrorCpd }" @mousedown="mouseDownFn" :style="{width: `${stateBarWidth}px`}">
          <span 
            class="default-btn" 
            :style="{ 'background-image': `url(${rightArrowIcon})` }"
          >
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let initX = null;
let initDate = null;
let currentX = null;

const STATE_BAR_MIN_WIDTH = 56;
const SLIDER_OFFSET = 5;
const CODE_ENUM = {
  OK: 0,
  // 隐含错误
  INVALID_REQUEST: -1,
  // 所请求的功能不支持
  NOT_SUPPORTED: -2,
  // 服务端内部错误，如内部调用超时等各种情况，
  INTERNAL_ERROR: -3,
  // 无效ID
  INVALID_ID: 1,
  // 请求太频繁
  REQUEST_TOO_FREQUENTLY: 2,
  // 验证失败
  VERIFY_FAIL: 3,
  // captchaId 过期
  ID_HAS_EXPIRED: 4
};

import successIcon from './images/success.png';
import failIcon from './images/fail.png';
import closeIcon from './images/close.png';
import refreshIcon from './images/refresh.png';
import rightArrowIcon from './images/right-arrow.png';
export default {
  name: 'captcha',
  props: {
    // 加载图片
    onLoadImage: {
      type: Function,
      required: true
    },
    // 拼图宽
    pWidth: {
      type: Number,
      default: 320
    },
    // 拼图长
    pHeight: {
      type: Number,
      default: 160
    },
    // 滑块宽
    sWidth: {
      type: Number,
      default: 60
    },
    // 滑块长
    sHeight: {
      type: Number,
      default: 60
    },
    // 验证成功后XX毫秒后执行onFinish
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      CODE_ENUM,
      successIcon,
      failIcon,
      closeIcon,
      refreshIcon,
      rightArrowIcon,
      // 滑块图片
      sliderImage: 'https://necaptcha.nosdn.127.net/7bb4f30dff564a86ac764b1d3743cc9a@2x.jpg',
      // 拼图图片
      puzzleImage: 'https://necaptcha.nosdn.127.net/7bb4f30dff564a86ac764b1d3743cc9a@2x.jpg',
      // 滑块top
      y: 10,
      // 滑块left
      x: 0,
      // 滑动区域宽度
      stateBarWidth: STATE_BAR_MIN_WIDTH,
      // 加载图片
      loadingImg: false,
      // 处于等待状态
      loading: false,
      // 后端状态码
      code: null
    }
  },
  computed: {
    pStyleCpd () {
      return {
        height: `${this.pHeight}px`
      }
    },
    sStyleCpd () {
      return {
        width: `${this.sWidth}px`,
        height: `${this.sHeight}px`,
        top: `${this.y}px`,
        left: `${this.x + SLIDER_OFFSET}px`
      }
    },
    /**
     * 通用错误
     */
    isCommonErrorCpd () {
      return ![CODE_ENUM.OK, CODE_ENUM.REQUEST_TOO_FREQUENTLY, null].includes(this.code);
    },
    /**
     * 禁用刷新按钮
     */
    isDisabledRefreshCpd () {
      return this.loadingImg || this.loading || this.code === CODE_ENUM.REQUEST_TOO_FREQUENTLY
    }
  },
  mounted () {
    this.init();
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.mousemoveFn);
    document.removeEventListener('mouseup', this.mouseupFn);
  },
  methods: {
    init () {
      document.addEventListener('mousemove', this.mousemoveFn);
      document.addEventListener('mouseup', this.mouseupFn);
      this.loadImageFn();
    },
    reset () {
      this.x = 0;
      this.stateBarWidth = STATE_BAR_MIN_WIDTH;
      this.code = null;
      this.loadImageFn();
    },
    refreshFn () {
      if (this.isDisabledRefreshCpd) return;
      this.reset();
    },
    loadImageFn () {
      this.loadingImg = true;
      this.onLoadImage().then(res => {
        this.sliderImage = res.sliderImage;
        this.puzzleImage = res.puzzleImage;
        this.y = res.y;
      }).finally(() => {
        this.loadingImg = false;
      });
    },
    mouseDownFn (e) {
      const { x } = e;
      initX = x;
      initDate = Date.now();
      this.disableSelectFn();
    },
    mousemoveFn (e) {
      if (initX) {
        currentX = e.x;
        const distance = currentX - initX;

        // -- 限制左右滑动的范围 -- start
        let stateWidthNow = (STATE_BAR_MIN_WIDTH + distance) > STATE_BAR_MIN_WIDTH ? STATE_BAR_MIN_WIDTH + distance : STATE_BAR_MIN_WIDTH;
        stateWidthNow = stateWidthNow > this.pWidth ? this.pWidth : stateWidthNow
        // -- 限制左右滑动的距离 -- end
        
        this.x = stateWidthNow - STATE_BAR_MIN_WIDTH;
        this.stateBarWidth = stateWidthNow;
      }
    },
    mouseupFn(e) {
      if (!initX) return;

      this.activeSelectFn();
      initX = null;

      const data = {
        sliderX: this.x + SLIDER_OFFSET,
        avgSpeed: (this.x + SLIDER_OFFSET)/(Date.now() - initDate)
      };

      this.loading = true;
      this.$emit('onConfirm', data, this.confirmCallBackFn);
    },
    confirmCallBackFn(res) {
      this.loading = false;
      this.code = res.code;
      if (this.code === CODE_ENUM.OK) {
        setTimeout(() => {
          this.$emit('onFinish', res);
        }, this.duration);
      } else if (this.code === CODE_ENUM.REQUEST_TOO_FREQUENTLY) {

      } else {
        this.loadImageFn();
        setTimeout(() => {
          this.x = 0;
          this.stateBarWidth = STATE_BAR_MIN_WIDTH;
          setTimeout(() => {
            this.code = null;
          }, 500);
        }, 100);
      }
    },
    /**
     * 禁用浏览器文本选中功能
     */
    disableSelectFn() {
      document.body.onselectstart = document.body.ondrag = () => false;
    },
    /**
     * 启用浏览器文本选中功能
     */
    activeSelectFn() {
      document.body.onselectstart = document.body.ondrag = () => true;
    }
  }
}
</script>

<style lang="less" scoped>
.g-captcha-layout {
  .tip-icon {
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }
  .image-wrapper {
    background: #999;
    position: relative;
    overflow: hidden;
    .bg-image {
      height: 100%;
      width: 100%;
    }
    .slider {
      position: absolute;
      z-index: 2;
    }
    .loading-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #eee;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .current-loading-icon {
        height: 30px;
        width: 30px;
        border: 2px solid #3685FF;
        border-radius: 50%;
        border-top: 2px solid transparent;
        display: inline-block;
        margin-bottom: 8px;
        animation: rotate 1.5s infinite linear;
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .refresh-wrapper {
      cursor: pointer;
      position: absolute;
      z-index: 99;
      height: 24px;
      width: 24px;
      background-color: rgba(0, 0, 0, .3);
      border-radius: 3px;
      top: 8px;
      right: 8px;
      background-size: 16px 16px;
      background-position: center center;
      background-repeat: no-repeat;
      &:hover {
        background-color: rgba(0, 0, 0, .6);
      }
    }
  }
  .slider-bar-wrapper {
    width: 100%;
    margin-top: 8px;
    background: #f4f6f8;
    height: 40px;
    border-radius: 1px;
    overflow: hidden;
    .loading {
      text-align: center;
      line-height: 40px;
    }
    .default-wrapper {
      height: 100%;
      width: 100%;
    }
    .default {
      background: #D0E5FF;
      min-width: 56px;
      height: 100%;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      position: relative;
      .default-btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 56px;
        height: 100%;
        background-color: #3685FF;
        background-size: 16px 16px;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .error-btn {
        background-color: #F65A5F;
      }
    }
    .error-bg {
      background: #FFDBDB;
    }
    .default-transition {
      transition: width .5s ease;
    }
    .success, .reload {
      color: #00B057;
      height: 100%;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .reload {
      color: #FE5B6C;
      .current-reload {
        color: #2375EC;
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
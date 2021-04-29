<template>
  <section style="padding: 20px">
    <h1>123</h1>
    <captcha @onConfirm="onConfirm"  :onLoadImage="onLoadImage" />
  </section>
</template>

<script>
import captcha from './captcha'
export default {
  components: {
    captcha
  },
  methods: {
    onConfirm(data, cb) {
      console.log(data);
      setTimeout(() => {
        cb({ code: 2 });
      }, 1000)
    },
    onLoadImage() {
      return new Promise((res => {
        setTimeout(() => {
          res({
            // 滑块图片
            sliderImage: 'https://necaptcha.nosdn.127.net/a8d55914a2d4491b8d331705d5d32fc2@2x.jpg',
            // 拼图图片
            puzzleImage: 'https://necaptcha.nosdn.127.net/a8d55914a2d4491b8d331705d5d32fc2@2x.jpg',
            // 滑块top
            y: 20,
          });
        },1000)
      }))
    }
  }
}
</script>

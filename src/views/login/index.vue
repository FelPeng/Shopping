<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input
          v-model="mobile"
          class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input
          v-model="picCode"
          class="inp" maxlength="4" placeholder="请输入图形验证码" type="text">
          <!--  图片验证码 -->
          <img v-if="picUrl"
          :src="picUrl"
          alt=""
          @click="getpicCode"
          >
        </div>
        <div class="form-item">
          <input
          v-model="smsCode"
          maxlength="6"
          class="inp" placeholder="请输入短信验证码:246810" type="text">
          <button
          @click="getCode"
          >{{Second === totalSecond ? '获取验证码' : Second + '秒后重新获取'}}</button>
        </div>
      </div>

      <div
      @click="login"
      class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { getMsgCode, getPicCode, codeLogin } from '@/api/login'
// Toast轻提示
// import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      picCode: '', // 用户输入的图像验证码
      mobile: '', // 用户输入的手机号
      smsCode: '', // 短信验证码
      picKey: '', // 将来请求传递的图形验证码唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      totalSecond: 60, // 总秒数
      Second: 60, // 当前秒数
      timer: null // 定时器id
    }
  },
  async created () {
    this.getpicCode()
  },
  destoryed () {
    clearInterval(this.timer)
  },
  methods: {
    // 获取图形验证码
    async getpicCode () {
      const { data: { base64, key } } = await getPicCode()
      // data.base64 做渲染
      // data.key 做验证
      // console.log(res)
      this.picUrl = base64
      this.picKey = key
      // console.log('获取图片')
      // toast 轻提示:提示获取图片成功
      // 1.导入调用
      // Toast('获取成功')
      // 2.this调用(只能组件内)
      this.$toast('图片加载成功')
    },
    // 验证手机号与图片验证码的合法性
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入合法的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入合法的验证码')
        return false
      }
      return true
    },
    // 验证短信验证码合法性
    msgcode () {
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$toast('请输入正确的短信验证码')
        return false
      }
      return true
    },
    // 获取短信验证码
    async getCode () {
      if (!this.validFn()) {
        return
      }
      // 开启定时器
      if (!this.timer && this.Second === this.totalSecond) {
        // 发送请求，获取验证码
        const res = await getMsgCode(this.picCode, this.picKey, this.mobile)
        // console.log(res)
        this.$toast(`${res.message}`)
        // 开启定时器
        this.timer = setInterval(() => {
          this.Second--
          // 关闭定时器
          if (this.Second <= 1) {
            clearInterval(this.timer)
            this.Second = this.totalSecond
          }
        }, 1000)
        // this.$toast('发送成功,请注意查收')
      }
    },
    // 登录功能
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!this.msgcode()) {
        return
      }
      const res = await codeLogin(this.mobile, this.smsCode)
      // console.log(res)
      // 提交个人权证信息
      this.$store.commit('user/setUserInfo', res.data)
      this.$toast(`${res.message}`)
      // 判断有无会跳地址
      const url = this.$route.query.backUrl || '/'
      this.$router.push(url)
    }

  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

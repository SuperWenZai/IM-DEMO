<template>
  <view class="page login">
    <view class="title">欢迎登录</view>
    <uni-forms class="form" :modelValue="loginForm" :rules="rules" validate-trigger="bind">
      <uni-forms-item name="userName">
        <uni-easyinput type="text" v-model="loginForm.userName" prefix-icon="person" placeholder="用户名" />
      </uni-forms-item>
      <uni-forms-item name="password">
        <uni-easyinput type="password" v-model="loginForm.password" prefix-icon="locked" placeholder="密码" />
      </uni-forms-item>
      <button class="btn-submit" @click="submit" type="primary">登录</button>
    </uni-forms>
    <navigator class="nav-register" url="/pages/register/register">
      没有账号,前往注册
    </navigator>
  </view>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

const { proxy }: any = getCurrentInstance();

const loginForm = ref({
  terminal: 1, // APP终端
  userName: '',
  password: ''
}).value

const rules = ref({
  userName: {
    rules: [{
      required: true,
      errorMessage: '请输入用户名',
    }]
  },
  password: {
    rules: [{
      required: true,
      errorMessage: '请输入密码',
    }]
  }
}).value

const submit = () => {
  proxy.$http({
					url: '/login',
					data: loginForm,
					method: 'POST'
				}).then(loginInfo => {
					console.log("登录成功,自动跳转到聊天页面...")
					uni.setStorageSync("userName", loginForm.userName);
					uni.setStorageSync("password", loginForm.password);
					uni.setStorageSync("loginInfo", loginInfo);
					// 调用App.vue的初始化方法
					getApp().$vm.init()
					// 跳转到聊天页面   
					uni.switchTab({
						url: "/pages/chat/chat"
					})
				})
}

</script>

<style lang="scss" scoped>
	.login {
		.title {
			padding-top: 150rpx;
			padding-bottom: 50rpx;
			color: royalblue;
			text-align: center;
			font-size: 60rpx;
			font-weight: 600;
		}

		.form {
			padding: 50rpx;

			.btn-submit {
				margin-top: 80rpx;
				border-radius: 50rpx;
			}
		}

		.nav-register {
			position: fixed;
			width: 100%;
			bottom: 100rpx;
			color: royalblue;
			text-align: center;
			font-size: 32rpx;
		}
	}
</style>

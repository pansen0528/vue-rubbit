import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from "@/apis/user.js"
import { useCartStore } from './cartStore'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true,
})
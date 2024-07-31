import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//测试接口函数
/*import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})*/

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
  mounted(el, binding) {
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
        }
      },
    )
  }
})

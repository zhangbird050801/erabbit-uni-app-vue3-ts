import { useMemberStore } from "@/stores"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions){
    // 非 http 开头需要拼接地址
    if(!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时
    options.timeout = 10000
    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    // 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if(token) {
      options.header.Authorization = token
    }
    // console.log(options)
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T>{
  code: String
  msg: String
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res){
        // 状态码 2 开头
        if(res.statusCode >= 200 && res.statusCode < 300)
          resolve(res.data as Data<T>)
        // 401 错误，清理用户信息并且跳转到登录页
        else if(res.statusCode == 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误'
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试'
        })
        reject(err)
      }
    })
  })
}

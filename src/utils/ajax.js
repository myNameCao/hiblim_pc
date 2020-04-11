

const axios = require('axios').default
const {path}  = require('../lib/baseApi').default

const instance = axios.create({
  baseURL:process.env.REACT_APP_HOST,
  timeout: 15000,
  contentType: 'application/json',
  complete: function (xhr, status) {
    if (status === 'timeout') {
      xhr.abort()
    }
  }
}) // 站点统一的配置// 注入请求拦截
export const  ajax = (P) => {
  return instance(
    {
      method: P.type || 'POST',
      url: path[P.url],
      params: P.params ? P.params : null,
      data: P.data ? P.data : null
    }
  ).then((res) => {
    // 状态码的处理
    P.success && P.success(res.data)
  }).catch(function (err) {
    P.error && P.error(err)
  })
} //web请求: ajax封装


export const  checkoutTel = (srt)=>{

   /*eslint no-useless-escape: "off"*/
  const telReg = {
     'en-HK':/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
     'zh-CN':/^(\+?0?86\-?)?1[345789]\d{9}$/,
     'zh-TW':/^(\+?886\-?|0)?9\d{8}$/
   };

   /*eslint no-useless-escape: "off"*/
   let val = Object.values(telReg).some((item)=>{
     return item.test(srt)
   })
   return  val
  }



/**
 * @description 可重试的请求方法
 * @param {string} url 请求地址
 * @param {number} maxCount 最大重试次数
 */
function request(url: string, maxCount = 5) {
  return fetch(url).catch((err) => {
    console.log('count :>> ', maxCount)
    maxCount <= 0 ? Promise.reject(err) : request(url, maxCount - 1)
  })
}

// example
request('https://vercle.test.com', 6)
  .then((resp) => {
    console.log(resp)
  })
  .catch((err) => {
    console.log(`e${err}`)
  })

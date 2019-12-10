const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getTimestamp = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1 < 10
	const day = date.getDate()

	return `${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}`
}

const getRandomString = (len = 32) => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
　for (let i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos))
	}
	return pwd
}

const getSuffix = filename => {
	const pos = filename.lastIndexOf('.')
	let suffix = ''
	if (pos != -1) {
		suffix = filename.substring(pos)
	}
	return suffix
}

const checkPhone = phone => new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(phone)

const checkEmail = email => new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(email)

const getCountDownTime = timestamp => {
  //结束时间
  var endDate = new Date(timestamp);
  //当前时间
  var nowDate = new Date();
  //相差的总秒数
  var totalSeconds = parseInt((endDate - nowDate) / 1000);

  // 小时
  var hours = Math.floor(totalSeconds % (60 * 60));
  //分钟
  var minutes = Math.floor(totalSeconds % (60 * 60 * 60))
  //秒
  var seconds = totalSeconds % (60 * 60 * 60)
  //输出到页面
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
}

export {
  formatTime,
  formatNumber,
  getTimestamp,
  getRandomString,
  getSuffix,
  checkPhone,
  checkEmail,
  getCountDownTime,
}

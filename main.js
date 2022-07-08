const LinksSocialMedia = {
  github: 'RaniBitWin',
  youtube: 'channel/UCO0jnL7E5hjfr32JSzWrMfA',
  facebook: 'ranieler',
  instagram: 'RaniBitWin',
  twitter: 'RaniBitWin'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

var hands = []
hands.push(document.querySelector('#secondhand > *'))
hands.push(document.querySelector('#minutehand > *'))
hands.push(document.querySelector('#hourhand > *'))

var cx = 100
var cy = 100

function shifter(val) {
  return [val, cx, cy].join(' ')
}

var date = new Date()
var hoursAngle = (360 * date.getHours()) / 12 + date.getMinutes() / 2
var minuteAngle = (360 * date.getMinutes()) / 60
var secAngle = (360 * date.getSeconds()) / 60

hands[0].setAttribute('from', shifter(secAngle))
hands[0].setAttribute('to', shifter(secAngle + 360))
hands[1].setAttribute('from', shifter(minuteAngle))
hands[1].setAttribute('to', shifter(minuteAngle + 360))
hands[2].setAttribute('from', shifter(hoursAngle))
hands[2].setAttribute('to', shifter(hoursAngle + 360))

for (var i = 1; i <= 12; i++) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  el.setAttribute('x1', '100')
  el.setAttribute('y1', '30')
  el.setAttribute('x2', '100')
  el.setAttribute('y2', '40')
  el.setAttribute('transform', 'rotate(' + (i * 360) / 12 + ' 100 100)')
  el.setAttribute('style', 'stroke: #ffffff;')
  document.querySelector('svg').appendChild(el)
}

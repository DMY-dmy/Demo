// 代码适配
function adapter(){
    // 设置根字体大小

    // 拿到设备独立像素，也就是设计稿的整体宽度
    const w = document.documentElement.clientWidth
    // less 中根字体大小，设备独立像素/10
    const rootFont = w / 10
    // 字体样式
    document.documentElement.style.fontSize = rootFont + 'px'

}

adapter()

window.onresize = adapter 


// 点击切换逻辑开始

// 获取元素，随后需要切换的元素
const tabs = document.querySelectorAll('.tabbar-item')

// 获取图片元素
const imgs = document.querySelectorAll('.img')

// 获取文字元素
const  texts = document.querySelectorAll('.text')

// 获取内容元素
const contents = document.querySelectorAll('.content-item')

// 外层循环是返回当前点击的定位，
// 内层是为了遍历到所有图标，
// 将他们全部变成普通的，
// 然后在利用闭包的特性，
// 来把当前已经点击的那个元素变成高亮

// 循环遍历每一个底部按钮
for (let i = 0; i< tabs.length; i++) {
    // 监听每个按钮的点击事件，谁点击谁切换
  tabs[i].addEventListener('touchstart',function(){

    
    // 给对应图片改变成高亮，div.img添加active类名
    for (let j = 0; j < tabs.length; j++) {
        // 排他，把所有的img的active去掉，在加上去
        // .add加上 .remove移除 .toggle判断取反
        imgs[j].classList.remove  ('active')

         // 文字也，
        // .add加上 .remove移除 .toggle判断取反
        texts[j].classList.remove  ('active')
        
        contents[j].classList.remove  ('active')
    }

     // 因为上面用的let，所以下面算当前作用域可以直接用i，形成闭包
     imgs[i].classList.add  ('active')
     // 因为上面用的let，所以下面算当前作用域可以直接用i，形成闭包
     texts[i].classList.add  ('active')
    // 切换content内容
    contents[i].classList.add  ('active')
  })
    }
### 观象授时
- 方案1
  + pageadmin 网站模板改
  + 源网站文件保存在 /origin/wzmb_one.zip
- 方案2:2017/8/30 14:57
  + 源文件 /origin/wzmb_two.zip
- 方案3:2017/8/30 17:13
  + 源文件 /origin/wzmb_three.zip
- 方案4:2017/9/4 17:04
  + 源文件 /origin/wzmb_four.zip
  + 部分源代码 /gxss/four/
  + 主页暂定 增加商品页面
  + 2017/9/5 17:10
    + 大部分页面完成  ui需继续调整
  + 2017/9/10 2:18
    + 产品展示页面 图片宽度小于图片自身宽度时,比例不正确
      + 原因:内容页添加时 图片设置宽高以行内样式添加到页面中
      + 解决:取消图片宽高设置,同时list_store.html和show_store.html添加部分样式
    + 改动部分
      + 增加page_app.html
      + style/five 修改/css/style.css及部分图片  可全部替换
- 方案5:2017/9/21 13:46
  + 源文件 /origin/wzmb_five.zip
- mod:2017/10/16
  + todo app页面 观象授石 >> 观象授时
- mod:2017/11/28
  + 首页轮播改为phpcms广告位
  + 修改文件位置 phpcms/template/default/poster/imagechange.html
  + 修改方式,将原js文件内容修改近imagechange.html中
  + 将生成js代码加入index.html文件中,生成位置,caches/poster_js/11(广告id).js
      
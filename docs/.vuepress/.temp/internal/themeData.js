export const themeData = JSON.parse("{\"encrypt\":{},\"home\":\"/\",\"lastUpdated\":false,\"contributors\":false,\"author\":{\"name\":\"九歌·太一\"},\"darkmode\":\"toggle\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"开发环境\",\"link\":\"/Environment/\"},{\"text\":\"命令手册\",\"children\":[{\"text\":\"Linux\",\"link\":\"/Command/Linux/\"},{\"text\":\"MarkDown\",\"link\":\"/Command/Markdown/\"}]},{\"text\":\"数据库\",\"children\":[{\"text\":\"MySQL\",\"link\":\"/DataBase/MySQL/\"},{\"text\":\"Redis\",\"link\":\"/DataBase/Redis/\"}]},{\"text\":\"设计模式\",\"link\":\"/DesignPattren/\"}],\"sidebar\":{\"/Environment/\":[{\"text\":\"Docker\",\"link\":\"Docker\"},{\"text\":\"Git\",\"link\":\"Git\"},{\"text\":\"JDK\",\"link\":\"JDK\"},{\"text\":\"Maven\",\"link\":\"Maven\"},{\"text\":\"Node\",\"link\":\"Nodejs\"}],\"/DesignPattren/\":[{\"text\":\"六大原则\",\"link\":\"SOLID\"},{\"text\":\"创造模式\",\"collapsible\":true,\"children\":[]},{\"text\":\"行为模式\",\"collapsible\":true,\"children\":[]},{\"text\":\"结构模式\",\"collapsible\":true,\"children\":[]}],\"/Command/Linux\":[{\"text\":\"cat：查看.md\",\"link\":\"cat：查看.md\"},{\"text\":\"chown：更改所有者.md\",\"link\":\"chown：更改所有者.md\"},{\"text\":\"cp：复制.md\",\"link\":\"cp：复制.md\"},{\"text\":\"du：查看大小.md\",\"link\":\"du：查看大小.md\"},{\"text\":\"mount：磁盘挂载.md\",\"link\":\"mount：磁盘挂载.md\"},{\"text\":\"zip：压缩.md\",\"link\":\"zip：压缩.md\"}],\"/Command/Markdown/\":[{\"text\":\"LaTex\",\"link\":\"LaTex.md\"},{\"text\":\"mermaid\",\"link\":\"mermaid.md\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

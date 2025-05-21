# css
采用less

前端（博客展示页面）：

主要技术栈为react+hooks+TS
react相关库React-Router、Redux等
AntD组件库（自定义样式/按需导入）
ahooks库提供常用的hooks
axios网络请求库
echarts图标库绘制饼图
时间格式化工具dayjs
markdown格式渲染工具marked
代码高亮渲染工具highlight.js
其他常用工具库等

后端：

后端使用腾讯云CloudBase云端一体化后端云服务，包括：

用户管理：管理员登录、未登录访问
数据库：存放管理员的博客数据
网站托管：托管博客静态网页
云函数：部署邮箱提醒API，有新评论/回复时触发，发送邮件提醒

其他：

eslint规范代码风格
commitlint保证git commit提交规范
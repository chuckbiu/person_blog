1. ts环境


- 使用`typescript`编写代码
- 使用`commitlint`保证`git commit`提交规范
- 使用`eslint`规范代码风格
- 使用`husky`在每次提交之前，触发`commitlint`与`eslint`
- 区分开发环境、生产环境，并抽离公共配置
- CSS 预处理器使用`scss`

### 新功能



新增的其实就一个：

- 新增主题切换功能，一键切换**黑**/**蓝**/**灰**三种主题，保存至`localStorage`，下次打开时自动切换至已选的主题
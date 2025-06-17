import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        // --- 新增/修改这里：对未使用的变量发出警告，忽略函数参数 ---
        '@typescript-eslint/no-unused-vars': [
          'warn', // 设置为警告
          {
            argsIgnorePattern: '^_', // 允许使用下划线开头的参数来表示其未使用
            varsIgnorePattern: '^_', // 允许使用下划线开头的变量来表示其未使用
            caughtErrorsIgnorePattern: '^_', // 忽略catch块中未使用的错误变量
            // 'all' 或 'none'，是否检查函数参数。'none'表示不检查
            // 'all' 表示检查所有参数，'after-used' 表示检查使用后的参数
            args: 'none', // 不检查函数参数
          },
        ],
    },
  },
)

module.exports = {
  extends: [
    'airbnb',
    'react-app', //  react帮配置好了一些语法，譬如箭头函数
    'plugin:prettier/recommended' // prettier配置
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0, // 关闭airbnb对于jsx必须写在jsx文件中的设置
    'react/prop-types': 0, // 关闭airbnb对于必须添加prop-types的校验
    // "linebreak-style": [2, "unix"],
    'linebreak-style': [0, 'error', 'windows'],
    // semi: [2, "always"],
    'no-empty': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-case': 2,
    'no-extra-parens': [2, 'functions'],
    'no-self-compare': 2,
    'accessor-pairs': 2,
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'constructor-super': 2,
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-mixed-spaces-and-tabs': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react-in-jsx-scope': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0, // 可以使用操作符
    'no-param-reassign': 0,
    'no-shadow': 0,
    'prefer-destructuring': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-unstable-nested-components': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'default-param-last': 1,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 0,
    'import/no-mutable-exports': 0,
    'prefer-const': 0,
    'react/function-component-definition': 0,
    'react/no-array-index-key': 0,
    'react-hooks/exhaustive-deps': 0,
    'func-names': 0,
    'no-debugger': 0,
    'spaced-comment': 0,
    'react/jsx-no-useless-fragment': 0,
    'prefer-template': 0
  }
}

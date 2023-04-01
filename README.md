模仿 antd 从零开始 react+ts

0.流程，代码一切都规范化
参考文档：https://www.cnblogs.com/xiaozhumaopao/p/12641440.html

1.配置 eslint
添加 eslint 安装
cnpm i eslint-config-airbnb eslint-plugin-import -D
cnpm i eslint-plugin-prettier

2.classnames 用于动态添加 classname
这里可以根据各属性动态添加，如果属性值为 true 则为其添加该类名；值为 false 则不添加

classNames('foo', 'bar'); // => 'foo bar'相当于引入了 foo、和 bar 两个类
classNames('foo', { bar: true }); // => 'foo bar'
let buttonType = 'primary'; 动态引入 class 名
classNames({ [`btn-${buttonType}`]: true });

<Button className={classnames({
base: true,
disabled: this.props.form.valid,
})}>
<Button/>

3. Button 继承原有的 button 属性

3.测试用例 框架 jest
官网 use matehrs 写法文档

运行 npx jest jest.test.js
一直运行 npx jest jest.test.js --watcher

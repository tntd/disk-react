# 小而美的 DMS Web 管理系统
同盾UED团队倾情推出极简DMS，复杂系统只需要一个组件搞定，而且暴露出来的api也非常简单，必须要的参数只有action，action返回的是一个Promise对象；

## 系统截图
基本信息
<div>
    <a href="https://tnt.tongdun.me" target="_blank">
        <img width="100%" src="https://camo.githubusercontent.com/8df3b2d7d7a38dee77fa53091c4c7f67fbed736411a8cb8a2852e246370d37e7/68747470733a2f2f696d6730332e736f676f7563646e2e636f6d2f6170702f612f3130303532303134362f3238623639646433363961643936326637346432366262303136333136306539">
    </a>
</div>
SQL窗口
<div>
    <a href="https://tnt.tongdun.me" target="_blank">
        <img width="100%" src="https://camo.githubusercontent.com/69dcce1b201ebe98c29bab7f737528953fe39fd03077c1fb09ac6b8c5a0ee4a0/68747470733a2f2f696d6730322e736f676f7563646e2e636f6d2f6170702f612f3130303532303134362f3839313964333030333532313862366536396366646137313865376330303432">
    </a>
</div>


## 安装
```bash
npm i @tntd/dms-react --save
```

## 页面引用
```jsx
import React from 'react';
import Dms from '../lib';
import mockJsonBySql from './mock';
import 'antd/dist/antd.css';

const Home = props => (
    <div>
        <h4>自定义Home</h4>
        <pre style={{ backgroundColor: '#fff', padding: '20px' }}>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
);

const App = () => (
    <Dms
        isDevelopmentEnv={true}
        title="星辰DMS"
        action={(sql, { sqls } = {}) => {
            console.log('excute sql:', sql, sqls);
            return new Promise(resolve => {
                resolve(
                    mockJsonBySql(sql)
                );
            });
        }}
        renderHome={Home}
    />
);

export default App;
```

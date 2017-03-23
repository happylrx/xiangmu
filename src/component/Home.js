import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section className="index">
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>基本信息
                                </dt>
                                <dd>
                                    <span>个人信息:</span>刘瑞欣 / 男 / 22岁
                                </dd>
                                <dd>
                                    <span>应聘岗位:</span>前端工程师
                                </dd>
                                <dd>
                                    <span>现居住地:</span>河北秦皇岛
                                </dd>
                                <dd>
                                    <span>目前情况:</span>可随时到岗
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>联系方式
                                </dt>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-phone"></i>
                                        联系电话:
                                    </span>
                                    13623356228
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-weixin"></i>
                                        联系微信:
                                    </span>
                                    shitanwei666666
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-QQ"></i>
                                        联系QQ:
                                    </span>
                                    1157109753
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-gmail"></i>
                                        联系邮箱:
                                    </span>
                                   1157109753@qq.com
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-github"></i>
                                        github:
                                    </span>
                                    <a href="https://github.com/happylrx">https://https://github.com/happylrx</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-markdown"></i>
                                        Markdown笔记:
                                    </span>
                                    <a href="https://happylrx.github.io/">https://happylrx.github.io/</a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>主要技能
                                </dt>
                                <dd className="skill">
                                    <ul>
                                        <li className="primary">HTML</li>
                                        <li className="primary">CSS</li>
                                        <li className="primary">Javascript</li>
                                        <li className="primary">jQuery</li>
                                        <li className="secondary">git</li>
                                        <li className="secondary">React</li>
                                        <li className="secondary">Ajax</li>
                                        <li className="secondary">JSON</li>
                                        <li className="secondary">ES6</li>
                                        <li className="know">HTTP</li>
                                        <li className="secondary">PS</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>技能详解
                                </dt>
                                <dd className="detail-skill">
                                    <ul>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTML / CSS</h4>
                                            <p>能够编写语义化的HTML，熟练运用div+css 浮动布局。</p>
                                            <p>webpack自动化工具的运用， 进行模块化开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Javascript</h4>
                                            <p>熟悉原生的Javascript，对原型，原型链，对象，闭包等都有一些了解。能脱离jQuery等库编写一些常见的功能，如轮播图，购物车等等。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>jQuery</h4>
                                            <p>熟悉jQ的用法，能使用jQuery完成常见功能的开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>git</h4>
                                            <p>有自己的github账号，能使用git实现代码的上传、分支合并、克隆、等一些操作。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>React /  Ajax / JSON  / ES6</h4>
                                            <p>能使用ES6语法和React库进行模块化的开发，能实现基本的页面布局和常见的功能，轮播，TODOMVC等。掌握了 React-router实现页面的无刷新体验 、axios或者JQ 来实现Ajax请求数据实现页面的局部刷新，Ant-design /Material-ui组件库的运用等。 </p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>PS</h4>
                                            <p>熟练使用PS、进行基本的网页设计</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>自我评价
                                </dt>
                                <dd>
                                  <p>活泼开朗、乐观向上、兴趣广泛、适应力强、上手快、勤奋好学、脚踏实地、认真负责、坚毅不拔、吃苦耐劳、勇于迎接新挑战。</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home;

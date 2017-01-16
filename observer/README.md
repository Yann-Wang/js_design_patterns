#### 发布订阅模式

##### 目录
- 自定义事件的实现方法
- 通用实现方法
- 增加特色功能： 存放离线事件、创建命名空间

##### 优点
- 时间上的解耦
- 对象之间的解耦

##### 缺点
- 创建订阅者本身需要一定的时间和内存
- 如果过度使用，对象和对象之间的必要联系将被深埋在背后，导致程序难以跟踪维护和理解

##### 应用
- 异步编程
- 完成松耦合的代码编写
- 帮助实现中介者模式
- 参与MVC/MVVM的架构实现
- JavaScript DOM 本身也是基于事件驱动的

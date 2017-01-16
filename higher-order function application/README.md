##### 高阶函数应用
- 柯里化: 函数首先接受一些参数，然后返回另外一个参数，刚才传入的参数在函数形成的闭包中被保存起来
- 反柯里化: 当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法
- 函数节流: 使用场景--函数被触发的频率太高（函数是浏览器自动调用的）
- 分时函数: 使用场景--函数被触发的频率太高（函数是用户主动调用的）
- 惰性加载函数: 使用场景--在第一次使用该函数时，才根据实际情况动态生成该函数
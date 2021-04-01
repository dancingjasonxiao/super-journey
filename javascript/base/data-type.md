# data-type 数据类型

<!-- ![data-type](/assets/data-type.png) -->
![data-type](https://github.com/dancingjasonxiao/super-journey/blob/main/assets/data-type.png?raw=true)

### 基础类型

基础类型存储在 **栈内存**，被引用或拷贝时，会创建一个完全相等的变量。

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### 引用类型

引用类型存储在 **堆内存**，存储的是地址，多个引用指向同一个地址。

- Object
  - Array
  - Function
  - Date
  - RegExp
  - Math

### 类型检测

#### 方法一：typeof

1. **可以准确判断基础数据类型（null 除外）**
   - null 返回 'object'（null 本身不是对象）
   - 其他返回相对应的类型（**小写**）

2. **无法判断引用数据类型（function 除外）**
   - function 返回 'function'
   - 其他返回均为 'object'

3. 语法

    ```javascript
    typeof operand
    typeof (operand)
    // operand 一个表示对象或原始值的表达式，其类型将被返回。
    ```

#### 方法二：instanceof

instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

 1. **可以准确判断引用数据类型**
 2. **无法正确判断基础数据类型**
 3. 语法

     ```javascript
     object instanceof constructor
     // object： 某个实例对象
     // constructor：某个构造函数
     ```

#### 方法三：Object.prototype.toString.call()

通过Object 的原型方法toString()统一返回格式为 “[object Xxx]” 的字符串，Xxx 就是对象的类型。**Xxx 第一个首字母是大写**（注意：使用 **typeof 返回的是小写**）

 1. 对于 Object 对象，直接调用 toString() 就能返回 [object Object]
 2. 对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息。

### 类型转换

#### 强制转换

##### Number()

1. 如果是布尔值，true 和 false 分别被转换为 1 和 0；
2. 如果是数字，返回自身；
3. 如果是 null，返回 0；
4. 如果是 undefined，返回 NaN；
5. 如果是字符串，遵循以下规则：
   - 如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；
   - 如果字符串中包含有效的浮点格式，将其转换为浮点数值；
   - 如果是空字符串，将其转换为 0；
   - 如果不是以上格式的字符串，均返回 NaN；

6. 如果是 Symbol，抛出错误；
7. 如果是对象，并且部署了 [Symbol.toPrimitive]，那么调用此方法，否则调用对象的 valueOf() 方法，然后依据前面的规则转换返回的值；如果转换的结果是NaN，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值。

##### parseInt()

##### parseFloat()

##### toString()

##### String()

##### Boolean()

- 除了 undefined、null、false、''、0（包括 +0，-0）、NaN 转换出来是false，其他都是 true。

#### 隐式转换

- 逻辑运算符（&&、||、!）
- 运算符（+、-、*、/）
- 关系操作符（>、<、<=、>=）
- 相等运算符（==）
- if / while 条件操作

#### 对象转换

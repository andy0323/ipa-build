# ipa-build

ipa-build是针对iOS项目的打包工具，能够一键生成ipa的开发工具。

[![npm version](https://badge.fury.io/js/ipa-build.svg)](http://badge.fury.io/js/ipa-build)

## how to install 

1. 打开你的终端Terminal
*  输入`npm -v`查看是否安装npm
*  如果没有安装，请到[nodejs官网](http://nodejs.org/)进行安装
*  npm安装完成以后，终端运行`npm install -g ipa-build`
*  终端运行`ipa-build -h`确认安装成功

如果还有其他疑问，可以参照[npm相关资料](https://www.npmjs.org/doc/misc/npm-developers.html)，希望可以帮助你更好得了解它

## Command

	ipa-build ${PROJECT_DIR} -v -o ${IPA_OUTPUT_PATH}
	
**参数（必填项）：** 

`${PROJECT_DIR}`代表项目路径，只要指向项目主文件夹即可。

注意事项：

1. PROJECT_DIR为**必选项**，否则无法定位打包项目工程文件。
*  目前`IPA_OUTPUT_PATH`仅能传入一个。


**可选项：**

| 可选项 | 参数用途    | 参数例子  | 默认参数                |  
|-------|------------|---------|------------------------|
| -v    | 打印日志    | 无需参数  | 无输出                  |
| -o    | ipa输出路径 | ~/ipa   | 终端当前路径下的build文件夹|

## Usages

1. 打开终端Terminal
*  输入`cd`指令进入你的项目文件夹
*  输入`ipa-build .`生成脚本
*  输入`open build`获取ipa文件

## Test

如何测试ipa-build？

1. 创建一个iOS项目工程
2. 设置Build Setting中的Code Settings证书配置项。
3. `Command + B`，确认编译通过保证无误。
4. 打开终端，`cd`到项目路径下，执行`ipa-build`
5. 执行完毕，提示Success成功后，执行`open .`
6. 将`/IPA_BUILD_DIR/ipa`文件导入设备，检查安装包的完整。
7. 执行过程中若出现异常、可以通过issue说明原因，我会及时更新。

##Contributing

*  Fork it
*  Create your feature branch (git checkout -b my-new-feature)  
*  Commit your changes (git commit -am 'Add some feature')  
*  Push to the branch (git push origin my-new-feature)  
*  Create new Pull Request  

## History

- v0.6.0 pod项目工程地址查询优化
- v0.5.0 兼容pod项目
- v0.4.0 代码整理
- v0.3.0 引入app-parser模块
- v0.2.0 雏形版本
- v0.1.0 初始化版本

## Welcome fork and feedback

- write by `andy` andy_ios@163.com
- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
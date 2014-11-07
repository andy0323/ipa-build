# ipa-build

ipa-build是针对iOS项目的打包工具，能够一键生成ipa的开发工具。

## how to install 

全局安装打包工具，打开你的终端Terminal，调用下面的命令即可。

	npm install -g ipa-build

## Command

	ipa-build project_path -v -o ipa_output_path
	
**参数：** 

project_path代表项目路径，只要指向项目主文件夹即可，目前仅能传入一个。

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

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com
- write by `andy` andy_ios@163.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
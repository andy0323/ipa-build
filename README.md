# ipa-build

ipa-build是针对iOS项目的打包工具，能够一键生成ipa的开发工具。

## how to install 

全局安装打包工具，打开你的终端Terminal，调用下面的命令即可。

1. `npm install -g badge-cli`
*  `npm install -g ipa-build`
*  `badge -n ipa-build`

## Command

	ipa-build project_path -v -o ipa_output_path
	
**参数（必填项）：** 

project_path代表项目路径，只要指向项目主文件夹即可。

注意事项：

1. project_path为**必选项**，否则无法定位打包项目工程文件。
*  目前`project_path`仅能传入一个。


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

##Contributing

Fork it
Create your feature branch (git checkout -b my-new-feature)  
Commit your changes (git commit -am 'Add some feature')  
Push to the branch (git push origin my-new-feature)  
Create new Pull Request  

## History

- v0.1.0 初始化版本

## Welcome fork and feedback

- write by `andy` andy_ios@163.com
- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
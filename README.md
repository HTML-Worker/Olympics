# Olympics
# 前端架构说明
1. 安装node（安装过则跳过本步骤）
2. 在该目录下打开命令窗口
3. 执行命令 npm install安装开发依赖，执行完成后该目录增加node_modules文件夹
4. 全局安装gulp(安装过则跳过本步骤),执行命令 npm install gulp -g
5. 全局安装bower(安装过则跳过本步骤),执行命令 npm install bower -g
6. 执行命令 bower install，执行完成后该目录增加bower_components文件夹
7. 执行命令gulp，执行完成后该目录增加build文件夹,并且自动运行 localhost:6050端口监听，在浏览器打开即可访问
8. 执行命令gulp后，自动watch ./app目录下的文件，有修改会自动编译
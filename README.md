# CodeShell IntelliJ IDEA Extension

`codeshell-intellij`项目是基于[CodeShell大模型](https://github.com/WisdomShell/codeshell)开发的支持[IntelliJ IDEA、Pycharm、GoLang](https://www.jetbrains.com/zh-cn/products/)等多种IDE的智能编码助手插件，支持python、java、c++/c、javascript、go等多种编程语言，为开发者提供代码补全、代码解释、代码优化、注释生成、对话问答等功能，旨在通过智能化的方式帮助开发者提高编程效率。

## 环境要求

- [CodeShell 模型服务](https://github.com/WisdomShell/llama_cpp_for_codeshell)已启动
- IDE 版本要求在2022.2至2023.2之间

## 插件编译

如果要从源码进行打包，请先获取代码：

```bash
git clone https://github.com/WisdomShell/codeshell-intellij.git
```
- 项目使用Gradle管理依赖，点击`刷新`按钮回自动重新加载依赖
- 本地运行插件：`Gradle`-`CodeShell`-`Task`-`intellij`-`runIde`
- 在`runIde`右键，可选择使用Debug模式启动

![插件DEBUG截图](https://resource.zsmarter.cn/appdata/codeshell-intellij/screenshots/debug-plugin.png)

### 打包插件

- 本地生成插件安装包：`Gradle`-`CodeShell`-`Task`-`intellij`-`buildPlugin`
- 打包任务执行完成后，插件安装包在项目根目录下的`build/distributions`目录中

### 安装插件

- 安装入口：`Settings`-`Plugin`-`Install Plugin from Disk...`，在打开的资源选择窗口中选择插件安装包即可

![插件安装截图](https://resource.zsmarter.cn/appdata/codeshell-intellij/screenshots/install-plugin-disk.png)



##  模型服务

[`llama_cpp_for_codeshell`](https://github.com/WisdomShell/llama_cpp_for_codeshell)项目提供[CodeShell大模型](https://github.com/WisdomShell/codeshell) 4bits量化后的模型服务，模型名称为`codeshell-chat-q4_0.gguf`。以下为部署模型服务步骤：

### 获取代码

```bash
git clone https://github.com/WisdomShell/llama_cpp_for_codeshell.git
cd llama_cpp_for_codeshell
make
```

注意：在 macOS 上，默认情况下启用了Metal架构，启用Metal 可以将模型加载到 GPU 上进行运行，从而显著提升性能。对于非 Apple Silicon 芯片的 Mac 用户，在编译时可以使用 `LLAMA_NO_METAL=1` 或 `LLAMA_METAL=OFF` 的 CMake 选项来禁用Metal构建，从而使模型正常运行。

### 下载模型

在 [Hugging Face Hub](https://huggingface.co/WisdomShell/CodeShell-7B-Chat-int4/blob/main/codeshell-chat-q4_0.gguf)将模型下载到本地后，将模型放置在以上代码中的 `llama_cpp_for_codeshell/models` 路径，即可从本地加载模型。

```bash
git clone https://huggingface.co/WisdomShell/CodeShell-7B-Chat-int4/blob/main/codeshell-chat-q4_0.gguf
```

### 部署模型

使用`llama_cpp_for_codeshell`项目中的`server`命令即可提供API服务。

```bash
./server -m ./models/codeshell-chat-q4_0.gguf --host 127.0.0.1 --port 8080
```

注意：对于编译时启用了 Metal 的情况下，您也可以在命令行添加参数 `-ngl 0 `显式地禁用Metal GPU推理，从而使模型正常运行。

## 配置插件

- 设置CodeShell大模型服务地址
- 配置是否自动触发代码补全建议
- 配置补全的最大tokens数量
- 配置问答的最大tokens数量

![插件配置截图](https://resource.zsmarter.cn/appdata/codeshell-intellij/screenshots/code_config.png)

## 功能特性

### 1. 代码辅助

- 对一段代码进行解释/优化/清理
- 为一段代码生成注释/单元测试
- 检查一段代码是否存在性能/安全性问题

在IDE侧边栏中打开插件问答界面，在编辑器中选中一段代码，在鼠标右键CodeShell菜单中选择对应的功能项，插件将在问答界面中给出相应的答复。

在问答界面的代码块中，可以点击复制按钮复制该代码块，也可点击插入按钮将该代码块内容插入到编辑器光标处。

![代码辅助截图](https://resource.zsmarter.cn/appdata/codeshell-intellij/screenshots/code_inte.png)

### 2. 智能问答

- 支持多轮对话
- 可编辑问题，重新提问
- 对任一问题，可重新获取回答
- 在回答过程中，可以打断

![智能问答截图](https://resource.zsmarter.cn/appdata/codeshell-intellij/screenshots/code_chat.png)

## 开源协议
Apache 2.0
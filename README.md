# starter

#### 介绍
读书破万卷，下笔如有神

#### 项目架构
vitePress + Vue3 + Markdown

#### 安装教程

1.  依赖：npm install
2.  运行：npm run dev
3.  构建：npm run build（默认输出ESM格式的包，如需输出CommonJS或UMD格式的包，需要在package.json中把“type”: “module”去掉，或把.vitepress目录下的config.mts后缀改成config.ts）
4.  github pages部署构建： npm run add-build || 把dist的内容拷贝到根目录中

#### 使用说明

1.  快捷部署：
    deploy.config.ts 填写服务器配置
    npm run deploy:upload 部署前端代码
    npm run deploy:revert 回滚前端代码

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

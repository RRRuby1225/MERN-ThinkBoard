# MERN 笔记应用

这是一个使用MERN技术栈(MongoDB, Express, React, Node.js)开发的笔记应用，提供了创建、查看、编辑和删除笔记的功能。

## 技术栈

### 前端
- **React 19** - 用户界面库
- **Vite 7** - 前端构建工具
- **Tailwind CSS 4** - 实用优先的CSS框架
- **DaisyUI** - 基于Tailwind的组件库
- **React Hot Toast** - 通知提示组件
- **Axios** - HTTP客户端
- **Lucide React** - 图标库
- **React Router 7** - 路由管理

### 后端
- **Node.js** - JavaScript运行时
- **Express 5** - Web应用框架
- **MongoDB Cloud** - 云数据库服务
- **Mongoose** - MongoDB对象模型工具
- **Upstash Redis** - Redis云服务，用于速率限制


## 项目结构

```
MERN_NOTE_WEBAPP/
├── .gitignore
├── package.json
├── backend/
│   ├── package.json
│   └── src/
│       ├── config/         # 数据库和Redis配置
│       ├── controllers/    # 业务逻辑控制器
│       ├── middleware/     # 中间件(如速率限制)
│       ├── models/         # 数据模型
│       ├── routes/         # API路由
│       └── server.js       # 服务器入口文件
└── frontend/
    ├── package.json
    ├── index.html
    ├── public/
    └── src/
        ├── components/     # 可复用组件
        ├── lib/            # 工具函数
        ├── pages/          # 页面组件
        ├── App.jsx         # 应用主组件
        ├── main.jsx        # 应用入口
        └── index.css       # 全局样式
```

## 功能特点

- 创建、查看、编辑和删除笔记
- 响应式设计，适配各种设备
- 美观的UI界面 (使用Tailwind和DaisyUI)
- API速率限制保护 (使用Upstash Redis)
- 生产环境和开发环境配置

## 安装与运行

### 前提条件
- Node.js (v16+)
- MongoDB账户 (或本地MongoDB)
- Upstash Redis账户 (可选，用于速率限制)

### 环境变量设置

在backend目录下创建.env文件:

```
MONGODB_URI=你的MongoDB连接字符串
PORT=5001
UPSTASH_REDIS_REST_URL=你的Upstash Redis URL
UPSTASH_REDIS_REST_TOKEN=你的Upstash Redis Token
NODE_ENV=development
```

### 安装依赖

```bash
# 安装根目录依赖
npm install

# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

### 启动应用

#### 开发模式

```bash
# 启动后端 (在backend目录)
npm run dev

# 启动前端 (在frontend目录)
npm run dev
```

#### 生产模式

```bash
# 构建前端 (在frontend目录)
npm run build

# 启动生产服务器 (在根目录)
npm run start
```

## 部署

应用配置为在生产环境中从后端服务器提供前端静态文件，简化部署流程。

1. 在frontend目录运行 `npm run build` 生成静态文件
2. 确保backend/.env中设置 `NODE_ENV=production`
3. 在根目录运行 `npm run start` 启动应用

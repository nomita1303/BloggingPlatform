# 📝 Blogging Platform

A full-stack MERN blogging platform with authentication and an admin portal.

## 🗂️ Project Structure

```
blogging-platform/
├── .gitignore              # Single consolidated ignore file
├── .env.example            # Environment variable template
├── README.md               # This file
├── package.json            # Root scripts (run both client & server)
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/
│       │   ├── admin/      # Admin portal pages
│       │   ├── auth/       # Login, Register pages
│       │   └── blog/       # Blog listing, detail pages
│       ├── services/       # Axios API call functions
│       ├── utils/          # Helper functions
│       └── App.js
└── server/                 # Express.js backend
    ├── config/             # DB connection
    ├── controllers/        # Route handler logic
    │   ├── authController.js
    │   ├── blogController.js
    │   └── adminController.js
    ├── middleware/         # Auth & admin guards
    │   ├── auth.js
    │   └── adminAuth.js
    ├── models/             # Mongoose schemas
    │   ├── User.js
    │   ├── Post.js
    │   └── Category.js
    ├── routes/             # Express routers
    │   ├── auth.js
    │   ├── blog.js
    │   └── admin.js
    └── server.js           # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/nomita1303/BloggingPlatform.git
cd BloggingPlatform

# 2. Set up environment variables
cp .env.example server/.env
# Edit server/.env with your values

# 3. Install all dependencies
npm run install:all

# 4. Start development servers
npm run dev
```

### Scripts (from root)

| Command | Description |
|---|---|
| `npm run dev` | Start both client & server concurrently |
| `npm run server` | Start Express server only |
| `npm run client` | Start React client only |
| `npm run install:all` | Install deps for root, client & server |

## 🔑 API Endpoints

### Auth
| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Blog
| Method | Route | Description |
|---|---|---|
| GET | `/api/blog` | Get all posts |
| GET | `/api/blog/:id` | Get single post |
| POST | `/api/blog` | Create post (auth required) |
| PUT | `/api/blog/:id` | Update post (auth required) |
| DELETE | `/api/blog/:id` | Delete post (auth required) |

### Admin
| Method | Route | Description |
|---|---|---|
| GET | `/api/admin/users` | Get all users (admin only) |
| DELETE | `/api/admin/users/:id` | Delete user (admin only) |
| GET | `/api/admin/posts` | Get all posts (admin only) |

## 🛠️ Tech Stack

**Frontend:** React, React Router, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Auth:** JWT, bcryptjs  

## 📄 License

MIT

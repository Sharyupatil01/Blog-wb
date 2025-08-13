# 📖 Blog-wb

A simple blogging backend API built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**.  
It allows users to create posts, add comments, and like/unlike posts, demonstrating core CRUD operations and handling relationships between collections.

---

## 🚀 Features
- **Create a Blog Post** – Add a post with a title and body.
- **View All Posts** – Retrieve all posts with their likes and comments.
- **Add Comments** – Add a comment linked to a specific post.
- **Like / Unlike Posts** – Add or remove likes from a post.
- **MongoDB Relationships** – Posts reference Likes and Comments using ObjectId.

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Environment Variables:** dotenv
- **Architecture:** MVC (Model-View-Controller)


## Project Structure
- controllers/
  - postController.js | Handles post-related logic
  - commentController.js | Manages comment operations
  - likeController.js | Controls like functionality
- models/
  - postmodel.js | Defines post schema
  - commentmodel.js | Defines comment schema
  - likemodel.js | Defines like schema
- routes/
  - Blogroutes.js | API endpoints for blog features
- config/
  - database.js | Database connection setup
- .env | Stores environment variables (e.g., DB_URL, PORT)
- package.json | Lists dependencies and scripts
- server.js | Express server entry point

## Setup
1. Clone repository
2. Run `npm install`
3. Create `.env` with required variables
4. Start server: `npm start`

## Requirements
- Node.js
- MongoDB (or configured database)

## Usage
- Access endpoints like `/api/posts`, `/api/comments`, `/api/likes` via Postman or frontend


 ## Key Features
 Create Post: Store blog title & body in MongoDB.

 Get All Posts: Fetch posts along with populated likes and comments.

 Add Comments: Create a comment and link it to a specific post.

 Like/Unlike: Add or remove likes from a post.

 Database Connection: Centralized in database.js using Mongoose.




![Screenshot 2025-04-06 163722](https://github.com/user-attachments/assets/bee20ef7-9452-4816-849f-d1e41ca9b245)
![Screenshot 2025-04-06 163053](https://github.com/user-attachments/assets/cb7e3ad9-4b47-49f5-b2bf-cbde677c51e4)
![Screenshot 2025-04-06 155447](https://github.com/user-attachments/assets/631a9d38-f42b-48ae-a76f-f96b58e6f1d8)
![Screenshot 2025-04-06 155438](https://github.com/user-attachments/assets/12c38004-eff9-411c-b414-c02cebcf639e)
![Screenshot 2025-04-06 155425](https://github.com/user-attachments/assets/5414257c-1a08-4b8f-8a93-896627f37845)

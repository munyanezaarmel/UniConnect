# UniConnect

**UniConnect** UniConnect is a dynamic social media platform designed for students and individuals to connect, share ideas, and engage with their communities. Built with a modern tech stack, UniConnect offers a rich set of features to foster interaction, creativity, and collaboration. Whether you're posting updates, liking and commenting on posts, following peers, or engaging in direct messaging, UniConnect provides a seamless and intuitive user experience across devices.

## Features
- **Infinite Scrolling Feeds**
- **File Uploads**
- **Like, Comment, Follow, Bookmark**
- **Direct Messaging with Stream**
- **Notifications**
- **Hashtags & Mentions**
- **Full-Text Search**
- **Responsive Design**
- **Dark/Light Themes**
- **Rich Text Editing with TipTap**
- **Real-Time Validation**
- **Deployed on Vercel**

## Running the Project Locally

### Prerequisites
- Node.js
- npm
- PostgreSQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/munyanezaarmel/UniConnect.git
   cd uniconnect
   npm install
   
Create a .env file in the root directory.
Add your required environment variables:
```bash
DATABASE_URL=your_database_url
NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID=your_client_id
NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET=your_client_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
Run database migrations:
bash
Copy code
npx prisma migrate dev

Run the development server:

Copy code
npm run dev


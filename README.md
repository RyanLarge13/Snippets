# Snippets App

Welcome to the Snippets App! This app is built using Next.js, Prisma, and Clerk for authentication. It allows users to create, read, update, and delete code snippets, as well as interact with them by liking, favoriting, and commenting.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Utilizes Clerk for authentication, allowing users to securely register and log in.

- **Create, Read, Update, Delete (CRUD):** Users can create, read, update, and delete their code snippets.

- **Like and Favorite Snippets:** Users can like and favorite snippets, making it easy to keep track of their favorite code pieces.

- **Comments:** Engage in discussions by commenting on snippets to provide feedback, ask questions, or share insights.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed on your system:

- Node.js: [Install Node.js](https://nodejs.org/)
- PostgreSQL: [Install PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone this repository

   ```shell
   git clone https://github.com/RyanLarge13/Snippets.git
   ```

2. Navigate to project directory

```
cd snippets-app
```

3. Install dependencies

```
npm install
```

4. Configure your environment variables by creating a .env.local file in the project root and setting the necessary environment variables. Here's an example: 

```
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/your_database
CLERK_API_KEY=your_clerk_api_key
```

5. Run the app

```
npm run dev
```

Your Snippets App should now be running on http://localhost:3000.

### Usage
You can access the app in your web browser at http://localhost:3000 (or the respective URL where you have deployed it).

Explore the app's features, create snippets, like/favorite them, comment on snippets, and manage your code collection

### Authentication
The app uses Clerk for user authentication. You can sign up, log in, and manage your profile through the Clerk authentication system.

### Database
This app uses PostgreSQL as the database to store and manage code snippets. You can customize the database settings in the .env.local file.

### Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push to your fork and submit a pull request.
Please make sure to follow the Code of Conduct and Contributing Guidelines.

### License
This project is licensed under the MIT License.
# BMW Product Management System

## Overview
This project is a full-stack web application for managing BMW products. It allows users to view, add, edit, and delete products. The application is built using modern web technologies and follows a modular architecture for scalability and maintainability.

## Features
- **User Authentication**: Secure login and registration using JWT and bcrypt.  
- **Product Management**:
  - View all products with search and filter functionality.
  - Add new products with details like name, price, category, and image.
  - Edit existing products.
  - Delete products.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Dynamic Navigation**:
  - Login/Sign Out toggle based on user authentication.
  - Manage Products link for logged-in users.
- **Product Details**: View detailed information about a specific product.
- **Footer**: A footer with social media links and branding.

## Technologies Used
### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **Sequelize**: ORM for database management.
- **MySQL**: Relational database for storing product and user data.
- **bcrypt**: Password hashing for secure authentication.
- **jsonwebtoken**: JWT for secure API authentication.

### Frontend
- **React.js**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API requests.
- **Vite**: Build tool for fast development.

## Folder Structure
```
Back/
  Config/       # Database configuration
  Controllers/  # API controllers for products and authentication
  Models/       # Sequelize models for database tables
  Routes/       # API routes
  index.js      # Entry point for the backend server

Client/
  shop/
    src/
      Components/  # React components
      App.jsx      # Main React app component
      main.jsx     # React entry point
      index.css    # Global styles
    vite.config.js # Vite configuration
```

## How to Run the Project
### Prerequisites
- Node.js and npm installed.
- MySQL database set up.

### Backend Setup
1. Navigate to the `Back/` directory:
   ```bash
   cd Back
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `Client/shop/` directory:
   ```bash
   cd Client/shop
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Database Setup
1. Create a MySQL database named `shop_main`.
2. Update the database credentials in `Back/Config/db.js`.
3. Sync the Sequelize models:
   Uncomment the `sequelize.sync()` line in `Back/Config/db.js` and run the backend server once.

## Future Enhancements
- Add user roles (e.g., admin, customer).
- Implement pagination for product listings.
- Add image upload functionality.
- Enhance UI/UX with animations and transitions.
- Add unit and integration tests.

## License
This project is licensed under the BigNeji License.
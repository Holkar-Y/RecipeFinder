# 🍽️ RecipeFinder

A responsive recipe discovery application built with React.js that allows users to explore recipes, search by ingredients or recipe names, filter by difficulty, sort recipes, and manage their personal favorites.

## ✨ Features

- **Recipe Discovery:** Fetch and display recipes using the DummyJSON Recipes API.
- **Search Recipes:** Search recipes by name or ingredients.
- **Sorting:** Sort recipes by highest rating and shortest cooking time.
- **Difficulty Filter:** Filter recipes by Easy, Medium, and Hard difficulty levels.
- **Recipe Details:** View recipe images, ingredients, instructions, cuisine, ratings, calories, and cooking time.
- **User Authentication:** Register and log in using a frontend-based authentication system.
- **Protected Routes:** Restrict access to Profile and Favorites pages for unauthenticated users.
- **Favorites Management:** Add and remove recipes from favorites.
- **User Profile:** View personal information and total saved recipes.
- **Persistent Storage:** Maintain user sessions and individual favorites using Local Storage.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop screens.
- **Mobile Navigation:** Responsive hamburger menu for smaller screens.

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** React Hooks (useState, useEffect)
- **API:** DummyJSON Recipes API
- **Storage:** Browser Local Storage
- **Development Tool:** Vite
- **Version Control:** Git & GitHub

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd RecipeFinder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🌐 API Used

RecipeFinder uses the [DummyJSON Recipes API](https://dummyjson.com/recipes) to fetch recipe data.

## 📚 What I Learned

- Building reusable React components.
- Managing application state using React Hooks.
- Fetching and displaying data from REST APIs.
- Implementing search, sorting, and filtering functionality.
- Managing navigation and protected routes using React Router.
- Working with Local Storage for data persistence.
- Building responsive interfaces using Tailwind CSS.
- Handling user authentication flows and form validation.

## 🔒 Note on Authentication

This project uses frontend-based authentication with Local Storage for demonstration purposes. It is not production-secure. A real-world authentication system should use a backend, secure password hashing, and appropriate session management.

---

**Built with React.js and Tailwind CSS.**

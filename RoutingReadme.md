# React Router Complete Guide

A complete guide to learning routing in React using **react-router-dom**.

---

# Table of Contents

1. What is Routing?
2. Installing React Router
3. BrowserRouter
4. Routes and Route
5. Link
6. NavLink
7. useNavigate
8. Dynamic Routes
9. useParams
10. Query Parameters
11. Nested Routes
12. Outlet
13. Layout Routes
14. Navigate
15. Protected Routes
16. 404 Routes
17. Lazy Loading Routes
18. Practice Project

---

# 1. What is Routing?

Routing means showing different components/pages based on the URL.

Example:

```
example.com/
example.com/about
example.com/contact
```

Each URL displays a different React component.

## Traditional Website

```
Click Link
    |
Server Request
    |
New HTML Page Loads
```

## React SPA

```
Click Link
    |
React Router Changes URL
    |
Component Changes
    |
No Page Refresh
```

React uses **client-side routing**.

---

# 2. Installation

Install React Router:

```bash
npm install react-router-dom
```

---

# 3. BrowserRouter

Wrap your application with BrowserRouter.

`main.jsx`

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>;
```

BrowserRouter enables routing functionality.

---

# 4. Routes and Route

Import:

```jsx
import { Routes, Route } from "react-router-dom";
```

Example:

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

## Explanation

`path`

Defines URL.

Example:

```
/about
```

`element`

Defines component to render.

---

# 5. Link Component

`Link` is used for navigation without refreshing the page.

Import:

```jsx
import { Link } from "react-router-dom";
```

Example:

```jsx
<Link to="/about">About</Link>
```

Normal anchor tag:

```html
<a href="/about"> About </a>
```

causes page reload.

React Link does not reload.

---

# 6. NavLink Component

NavLink is similar to Link but knows the active route.

Example:

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>;
```

---

## Active Styling

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  About
</NavLink>
```

When URL is:

```
/about
```

The color becomes red.

---

# Link vs NavLink

| Link                | NavLink                      |
| ------------------- | ---------------------------- |
| Simple navigation   | Navigation with active state |
| No active detection | Detects current route        |
| Used everywhere     | Mostly Navbar/Sidebar        |

---

# 7. useNavigate Hook

Used for navigation using JavaScript.

Import:

```jsx
import { useNavigate } from "react-router-dom";
```

Example:

```jsx
function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

Common use cases:

- Login success
- Form submit
- Logout
- Button navigation

---

# 8. Dynamic Routes

Dynamic routes contain changing values.

Example:

```
/user/101
/user/202
```

Route:

```jsx
<Route path="/user/:id" element={<User />} />
```

`:id` is dynamic.

---

# 9. useParams

Get dynamic values from URL.

Example:

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID : {id}</h1>;
}
```

URL:

```
/user/101
```

Output:

```
User ID : 101
```

---

# 10. Query Parameters

Used for filtering and searching.

Example URL:

```
/products?category=mobile
```

Get values:

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

const category = searchParams.get("category");
```

Output:

```
mobile
```

---

# 11. Nested Routes

Nested routes allow child pages inside a parent page.

Example:

```jsx
<Route path="/services" element={<Services />}>
  <Route path="webdev" element={<WebDevelopment />} />
</Route>
```

URL:

```
/services/webdev
```

Structure:

```
Services

 |
 |
WebDevelopment
```

---

# 12. Outlet

Outlet displays child routes.

Parent component:

```jsx
import { Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>

      <Outlet />
    </div>
  );
}
```

Without Outlet:

Child component will not appear.

---

# 13. Layout Routes

Used for common UI.

Example:

```
Navbar

Page Content

Footer
```

Layout:

```jsx
function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
```

Routes:

```jsx
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />
</Route>
```

---

# 14. Navigate Component

Used for redirecting.

Example:

```jsx
import { Navigate } from "react-router-dom";

<Navigate to="/login" />;
```

---

# 15. Protected Routes

Used to protect private pages.

Example:

```
User Login

     |

Dashboard
```

Protected Route:

```jsx
function ProtectedRoute({ children }) {
  const login = true;

  if (login) {
    return children;
  }

  return <Navigate to="/login" />;
}
```

Usage:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

# 16. 404 Page

For invalid URLs.

Example:

```jsx
<Route path="*" element={<NotFound />} />
```

If user visits:

```
/abcxyz
```

Show:

```
Page Not Found
```

---

# 17. Lazy Loading Routes

Loads components only when needed.

Example:

```jsx
import { lazy } from "react";

const About = lazy(() => import("./About"));
```

Use:

```jsx
<Suspense fallback={<h1>Loading...</h1>}>
  <About />
</Suspense>
```

Benefits:

- Faster loading
- Better performance

---

# Practice Project

Build a routing project:

```
React Router App

|

├── Home

├── About

├── Contact

├── Services

|     |
|     ├── Web Development
|     |
|     └── App Development

|

├── Products

|     |
|     └── Product Details

|

├── Login

|

├── Dashboard

|

└── 404 Page
```

---

# Concepts Covered

BrowserRouter  
 Routes  
 Route  
 Link  
 NavLink  
 useNavigate  
 useParams  
 useSearchParams  
 Nested Routes  
 Outlet  
 Layout Routes  
 Navigate  
 Protected Routes  
 404 Handling  
 Lazy Loading

---

# Learning Goal

After completing this guide, students should be able to create complete React applications with multiple pages, navigation, authentication routes, and reusable layouts.

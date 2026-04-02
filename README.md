# Assignment1-DynamicWeb-25630765-ThorntumChulasereekul
This is an Assignment 1 - Dynamic Web Interface to a Database System for 32516 Internet Programming - Autumn 2026 at UTS.

Sydney Tech Shopping Centre Dynamic Web Application

This project demonstrates how a modern web application can dynamically manage a shopping cart without page reloads.
It solves the problem of slow, static shopping experiences by providing:
- Real‑time product display
- Instant cart updates
- Smooth quantity adjustments
- Automatic total price calculation
The system shows how frontend and backend technologies work together to create a responsive, interactive user experience.

Technical Stack Overview
Frontend
- React.js — Component‑based UI, dynamic rendering
- JavaScript — Logic and state management
- CSS — Custom styling for layout, product cards, and cart UI

Backend
- FastAPI (Python) — High‑performance REST API
- Endpoints for products, cart CRUD operations
- Automatic JSON responses

Database
- MySQL — Stores product data and cart items

Deployment (Local)
- Frontend served via Vite development server
- Backend served via Uvicorn
- MySQL running locally through MySQL Workbench

Feature List
- Single‑Page Application (SPA)
- Add, update, and remove items from the cart
- Live‑updating total price
- Responsive layout
- FastAPI backend with CRUD operations
- MySQL database integration

Structure
backend
- shop_api.py for FastAPI routes (products + cart)
- shop_crud.py for Database logic (CRUD operations)
- db_schema.sql as an SQL file to recreate the database
- README.md for Backend setup instructions
frontend
- App.jsx for Main React component
- App.css for Main styling
- index.css for Global styles
- Products.jsx as a component for the Product list UI
- Cart.jsx as a component for the Cart UI + total price
- package.json for Frontend dependencies
- README.md for Main project documentation

Challenge
- Connecting the React frontend to the FastAPI backend, especially handling asynchronous fetch requests and ensuring the UI is updated correctly.
- Designing a clean, responsive layout that displayed products consistently, including resizing images and aligning the grid.
- Managing the MySQL database to be correct and usable.
- Implementing live total price updates, which required understanding React’s state system and how changes propagate through components.
- Help me improve my knowledge of full‑stack development and API‑driven interfaces.

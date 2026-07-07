# GameVault

## Project Description

GameVault is a personal game tracker built with React, TypeScript, React Router, TanStack Query, Zustand, Tailwind CSS, and json-server. The application allows users to browse a catalog of games, search by title, filter games by status, view detailed information about each game, update the game's status, assign a rating, and save personal notes.

This project was created for Assignment 4 in CSCI 39548: Practical Web Development at Hunter College.

---

# Theme

I chose a video game tracker called **GameVault**. Instead of tracking books or movies, this application helps users organize video games they want to play, are currently playing, have completed, or have dropped.

---

# Features

- Browse a catalog of games
- Search games by title
- Filter games by status
- View an individual game's details
- Update game status
- Rate games from 1–5
- Save personal notes
- Light/Dark theme toggle
- Comfortable/Compact density setting
- Theme and density persist across page reloads

---

# Technologies Used

- React
- TypeScript
- React Router
- TanStack Query
- Zustand
- Tailwind CSS
- json-server
- Vite

---

# Project Structure

```
src/
│
├── components/
│   └── Navbar.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── ItemPage.tsx
│   ├── StatusPage.tsx
│   ├── AboutPage.tsx
│   └── NotFoundPage.tsx
│
├── services/
│   └── api.ts
│
├── store/
│   └── useUiStore.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Setup Instructions

## Install dependencies

```bash
npm install
```

## Start the backend

```bash
npm run server
```

The backend will run on:

```
http://localhost:3001
```

## Start the React application

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

(or another available Vite port such as 5174)

---

# Database

The application uses json-server with two database files:

- db.json
- db.seed.json

The application stores game information including:

- Title
- Creator
- Genre
- Year
- Status
- Rating
- Personal Notes

---

# Screenshots

Add 2–3 screenshots here before submitting.

Example:

## Home Page

*![alt text](<Screenshot 2026-07-07 005809.png>)*

## Game Detail Page

*![alt text](<Screenshot 2026-07-07 005837.png>)*

## About Page

*![alt text](<Screenshot 2026-07-07 005830.png>)*

---

# Stretch Features

No stretch features were implemented.

---

# What I Learned

During this assignment I learned how to:

- Configure React Router
- Create dynamic routes using useParams
- Store search state using useSearchParams
- Fetch server data using TanStack Query
- Update server data using useMutation
- Invalidate queries after mutations
- Manage global UI state with Zustand
- Persist settings using Zustand's persist middleware
- Build responsive interfaces with Tailwind CSS
- Connect a React frontend to json-server

---

# Author

Angel Flores

CSCI 39548 – Practical Web Development

Hunter College
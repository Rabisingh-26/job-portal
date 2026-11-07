# 💼 Job Portal – Frontend Web Application

A modern Job Portal frontend built using **React.js and Vite**. This application provides an intuitive interface for exploring job opportunities, searching and filtering job listings, sorting results, and saving interesting jobs for later.

The project focuses on frontend development, reusable React components, state management, and creating an interactive user experience.

## 🚀 Features

- **Home Page:** Landing page with a hero section, job search functionality, and featured job listings.
- **Browse Jobs:** Explore available job opportunities.
- **Search Functionality:** Search jobs by job title and location.
- **Filter Jobs:** Filter listings by employment type, work mode, and location.
- **Sort Jobs:** Sort job listings by:
  - Newest first
  - Highest salary
  - Lowest salary
  - Job title (A–Z)
- **Job Details:** View detailed information about individual job listings.
- **Save Jobs:** Save interesting job listings for later.
- **Saved Jobs:** View previously saved job opportunities.
- **Login Modal:** Interactive login interface with basic form validation.
- **Persistent Storage:** Uses browser localStorage to maintain saved jobs after refreshing the page.
- **Responsive UI:** Designed with a clean and user-friendly interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and layouts |
| JavaScript (ES6+) | Application functionality |
| React.js | Component-based UI development |
| Vite | Development environment |
| React Router DOM | Page navigation and routing |
| Lucide React | Icons |
| localStorage | Saving jobs in the browser |

## 📂 Project Structure

```text
JobPortal/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── JobCard.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── SortDropdown.jsx
│   │   ├── SaveButton.jsx
│   │   ├── LoginModal.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── SavedJobs.jsx
│   │   └── Apply.jsx
│   │
│   ├── data/
│   │     └── jobs.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rabisingh-26/job-portal.git
```

### 2. Navigate to the Project Folder

```bash
cd job-portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit the local development URL:

```text
http://localhost:5173
```

## 📚 Concepts Practiced

- React functional components and JSX.
- Props and state management.
- React Hooks (`useState`, `useEffect`).
- React Router DOM.
- URL search parameters (`useSearchParams`).
- JavaScript array methods (`map`, `filter`, `sort`, `includes`).
- Conditional rendering.
- Event handling.
- Component reusability.
- localStorage for data persistence.
- Form handling and validation.
- CSS Flexbox, Grid, positioning, and styling.

## 📌 Project Scope

This is a **frontend-only application**.

- Job listings are managed using static sample data.
- Saved jobs are stored in browser localStorage.
- The login interface demonstrates basic frontend form validation.
- No backend server, database, or real authentication system is currently implemented.

## 👨‍💻 Author

**Rabi Singh**

B.Tech – Computer Science & Design

- GitHub: [Rabisingh-26](https://github.com/Rabisingh-26)
- Repository: [Job Portal](https://github.com/Rabisingh-26/job-portal)

---

*Built to strengthen practical frontend development skills through hands-on project development.*

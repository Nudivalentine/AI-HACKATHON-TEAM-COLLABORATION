# AI Student Assistant – Frontend Prototype

A modern, interactive dashboard prototype for students to autonomously manage their academic journey. Designed to help students track unit progress, upcoming assessments, timetables, and receive AI‑powered recommendations.

![Dashboard Preview](preview.png) <!-- you can add a screenshot later -->

---

## ✨ Features

- **Login Page** – Simple demo authentication (any credentials work).
- **Dashboard Home** – Overview cards (total, completed, in‑progress, remaining units), unit progress bars, upcoming deadlines, recent alerts, and AI recommendations.
- **Units Tracker** – View all units with status (Completed / In Progress / Not Started), grades, and an "Add Unit" form.
- **Timetable** – Weekly grid showing scheduled classes; add new classes via a form.
- **CAT Manager** – List of assessments with deadlines and status (pending, submitted, graded); add new assessments.
- **Results & GPA** – Semester‑wise grade tables and overall GPA display.
- **Profile & Settings** – Edit personal information and toggle notification preferences.
- **Dark Mode** – Toggle between light and dark themes (preference saved in `localStorage`).
- **Responsive Design** – Works on mobile, tablet, and desktop.

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **Tailwind CSS** – Utility‑first styling (via CDN)
- **Font Awesome 6** – Icons
- **Vanilla JavaScript** – Interactivity (page navigation, forms, dark mode)

No build tools or dependencies required – just open the file in a browser.

---

## 🚀 Getting Started

1. **Clone or download** this repository.
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).
3. Click the **Demo Login** button on the login page to enter the dashboard.
4. Use the sidebar to navigate between sections.
5. Toggle dark mode using the moon/sun icon in the bottom‑left corner.
6. Try the **Add** buttons on various pages – they reveal simple input forms (UI demonstration only).

> **Note:** All data is mock and stored only in the browser’s memory. Refreshing the page will reset any changes.

---

## 📁 Project Structure

The entire application is contained in a single HTML file with embedded CSS and JavaScript.  
Key sections:

- **Login Page** (`#loginPage`)
- **Dashboard Layout** (`#dashboardPage`) – sidebar + main content area
- **Pages** (each with an `id="page-..."`):
  - `home` – Dashboard overview
  - `units` – Unit tracker
  - `timetable` – Weekly schedule
  - `cats` – CAT manager
  - `results` – Grades and GPA
  - `profile` – User settings
- **JavaScript functions** handle login, page switching, form toggling, dark mode, and local storage.

---

## 🎨 Customization

- **Colors** – Modify the Tailwind color palette in the `<style>` block or adjust classes.
- **Mock Data** – Replace the static content (e.g., unit lists, deadlines) with dynamic data from an API.
- **Add Real Backend** – Connect the login form to an authentication endpoint, replace mock tables with fetched data, and implement persistent storage.

---

## 📌 Future Enhancements

- Integration with a real backend (Node.js / Python) and database.
- Live notifications via WhatsApp/email (using Twilio, SendGrid).
- AI‑powered personalized recommendations based on student performance.
- Calendar sync (Google Calendar, .ics exports).
- File uploads for CAT submissions.

---

## 📄 License

This project is for demonstration purposes. Feel free to use and modify it for your own needs.

---

## 🙌 Acknowledgements

Built with Tailwind CSS and Font Awesome. Inspired by the need to help students graduate on time.
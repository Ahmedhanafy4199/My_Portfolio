# Ahmed Hanafy Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS to showcase my projects, technical skills, and professional experience. The portfolio focuses on performance, clean UI, responsiveness, and interactive user experience.

## Features

- **Dynamic Typography & Animations:** Custom typing effects for roles and modern micro-interactions.
- **Tailwind CSS Styling:** Full conversion to Tailwind CSS v3 with sleek glassmorphism, responsive grids, and customized dark-theme accents.
- **Highlights Section:** Custom showcases of major accomplishments (interactive UIs, document pipelines, architecture details).
- **Interactive Experience & Skills Tab:** Switch between Frontend and other technical skills with animated progress bars.
- **Dynamic Timeline:** Professional history tracking experiences and roles.
- **Fully Responsive Design:** Optimized for all screen sizes, from mobile phones to high-resolution desktops.
- **Contact Form Integration:** Wired up with **EmailJS** to send messages directly to Gmail, plus direct WhatsApp redirection.
- **Floating Glassmorphic Navbar:** Smooth scroll tracking and section indicators.

## Tech Stack

- **Core Framework:** React.js (v18+)
- **Styling:** Tailwind CSS (v3.4.17), PostCSS, Autoprefixer
- **Icons:** React Icons (`react-icons`)
- **Libraries:** 
  - `emailjs-com` for serverless email submission
  - `swiper` for sliding showcases
- **Dev Tools:** Create React App (CRA)

---

## How to Setup and Run Locally

Follow these steps to run the portfolio website on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v16 or higher) and **npm** installed. You can check your versions by running:
```bash
node -v
npm -v
```

### 2. Clone or Extract the Project
If using Git, clone the repository:
```bash
git clone <repository-url>
cd My_Portfolio
```
Or navigate directly to the project folder if you already have it.

### 3. Install Dependencies
Run the following command in the project root directory to install all required packages:
```bash
npm install
```

### 4. Start the Development Server
Run the project locally:
```bash
npm start
```
This will open the site on [http://localhost:3000](http://localhost:3000) (or another port if 3000 is occupied).

---

## Folder Structure

```text
portfolio-react/
├── public/
└── src/
    ├── assets/          # Project assets (images, PDFs, illustrations)
    ├── components/
    │   └── Nav/         # Floating navigation component
    ├── sections/        # Page sections
    │   ├── About/       # About Me section
    │   ├── Contact/     # Contact Form & links
    │   ├── Experience/  # Skill Bars & Experience Tabs
    │   ├── Footer/      # Footer branding & copyright
    │   ├── Header/      # Hero introduction & visual
    │   ├── Highlights/  # Core projects & Zinad IT accomplishments
    │   ├── Portfolio/   # Featured projects showcase
    │   └── Services/    # Professional services offered
    ├── App.jsx          # Main App controller
    ├── index.css        # Global CSS & Tailwind layers
    └── index.js         # DOM entrypoint
```

---

*Made  by Ahmed Hanafy*

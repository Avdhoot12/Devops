# DevOps Full-Stack ML Web App

## Overview

This project is a demonstration of a full-stack machine learning web application built with a focus on DevOps principles. It features a **React frontend** (using Vite) communicating with a **Flask backend** hosting a lightweight NLP sentiment analysis model powered by **TextBlob**.

The application provides real-time sentiment classification of user input text — showcasing the core skills of containerization, automation readiness, and continuous integration/deployment potential.

---

## Tech Stack

- **Frontend:** React (scaffolded with Vite for lightning-fast development)
- **Backend:** Flask (Python) REST API
- **ML Model:** Pre-trained sentiment analysis via TextBlob
- **Communication:** HTTP REST API with JSON payloads
- **Development Environment:** Local machine

---

## Project Structure

project-root/
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── venv/ # Python virtual environment (excluded from git)
├── frontend/
│ ├── src/
│ │ └── App.jsx
│ ├── package.json
│ └── vite.config.js
├── README.md
└── ...

yaml
Copy
Edit

---

## Setup Instructions

### Backend Setup

1. Navigate to the `backend/` directory:
    ```bash
    cd backend
    ```
2. Create and activate a virtual environment:
    - On **Windows (PowerShell):**
      ```powershell
      python -m venv venv
      .\venv\Scripts\Activate.ps1
      ```
    - On **Linux/macOS:**
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the Flask server:
    ```bash
    python app.py
    ```
   The backend will be available at `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the `frontend/` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Access the frontend UI at `http://localhost:5173`.

---

## How It Works

- The React frontend displays a textarea where users can input text.
- On clicking the **Analyze** button, the input text is sent to the Flask backend via a POST request.
- The Flask backend uses TextBlob to analyze the sentiment polarity.
- It returns either `"Positive"` or `"Negative"` sentiment in JSON format.
- The frontend displays the result dynamically on the page.

---

## Next Steps (Planned)

- Dockerize frontend and backend applications for containerized deployment.
- Implement Ansible playbooks for automated infrastructure setup.
- Build CI/CD pipelines using Jenkins for automated testing and deployment.
- Deploy the full stack on AWS EC2 instances with proper monitoring and scaling.
- Set up HTTPS and domain routing with NGINX.

---

## Contact

For questions or collaboration, reach out at [your.email@example.com].

---

*Built by Viking — forging DevOps skills, one container at a time.*

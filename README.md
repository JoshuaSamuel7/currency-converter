# 💱 Currency Converter Application

A fast, accurate, and visually appealing **currency conversion web application** that enables users to convert any amount between 30+ international currencies using real-time exchange rates. This full-stack application leverages the **Frankfurter API** for up-to-date currency data, integrates with a **Node.js + Express** backend, and features a clean, user-friendly **React** frontend interface.

This project showcases the seamless integration of third-party APIs, effective client-server communication, and modern UI development using custom CSS and React components. Designed with usability in mind, the app delivers intuitive interactions, quick responsiveness, and clear conversion outputs.

---

## 🚀 Live Preview
Click on 👇<br/>
[Currency Converter](https://mycurrencyconv.vercel.app/)
---
---
---



![curr](https://github.com/user-attachments/assets/34408346-ad44-418a-9e29-1fb87d3a324d)

## 🧰 Tech Stack

| Layer     | Technologies Used                                  |
|-----------|----------------------------------------------------|
| Frontend  | React, JSX, CSS                                    |
| Backend   | Node.js, Express.js                                |
| API       | [Frankfurter Currency API](https://www.frankfurter.app) |
| Tools     | Axios, CORS, body-parser, JavaScript (ES6)         |
| Styling   | Custom CSS, Flexbox layout                         |

---

## 📁 Folder Structure

```
currency-local/
├── back/
│   ├── app.js                # Express server logic
│   ├── package.json
│   └── package-lock.json
│
├── front/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Converter.jsx  # Main conversion component
│   │   ├── style.css          # Application styling
│   │   ├── App.jsx            # Main app entry
│   │   └── index.js           # React DOM render
│   ├── package.json
└── .gitignore
```

## ✨ Features
Feature	Description
💱 Live Currency Rates	Get real-time conversion values using Frankfurter API.
🔽 Dropdown Selections	Choose from over 30 global currencies with proper formatting and symbols.
🧮 Accurate Calculations	Automatically fetch and display converted values based on user input.
⚠️ Input Validation	Alerts users when input is invalid or missing.
🎨 Responsive UI	Elegant layout with background image and modern typography.
🔁 Bi-directional Support	Convert between any two currency pairs easily.

## 🖼️ User Interface
The UI features a polished form for entering the amount, selecting source and target currencies, and a submit button to trigger conversion. Results are displayed instantly below the form with high readability and contrast.


## 🔗 API Integration
The application consumes the Frankfurter API for exchange rate data.

Example API Call:
```
GET https://api.frankfurter.app/latest?from=USD&to=INR&amount=100
Response:
json
Copy
Edit
{
  "amount": 100,
  "base": "USD",
  "date": "2025-07-03",
  "rates": {
    "INR": 8321.20
  }
}
```
## 🧠 Component Breakdown
🔹 Converter.jsx
Handles:

Form state via useState

API calls via axios

Error handling and validation

Dynamic rendering of conversion results

🔹 style.css
Applies:

Background image

Responsive layout using flexbox

Button and input stylings

Font, spacing, and UI transitions

## ⚙️ Backend Overview
The Express.js backend serves as a bridge between the frontend and Frankfurter API, abstracting the API call and reducing direct API exposure.

app.js Sample Logic:
```
app.post("/input", (req, res) => {
  const { fromdenom, todenom, amt } = req.body;
  const url = `https://api.frankfurter.app/latest?from=${fromdenom}&amount=${amt}&to=${todenom}`;
  
  fetch(url)
    .then(response => response.json())
    .then(json => res.send(json))
    .catch(error => res.status(500).send({ error: 'Failed to fetch data' }));
});
```
##🛠️ Installation & Run Locally
```
# Clone the repo
git clone https://github.com/yourusername/currency-converter-app

# Backend
cd currency-local/back
npm install
node app.js

# Frontend
cd ../front
npm install
npm start
The backend runs on localhost:8000, and the React frontend runs on localhost:3000.
```

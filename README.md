

# 🛡️ TechShield – A Community Safety Platform

*Built during Hack De Science @ Ojass '24, NIT Jamshedpur*

**TechShield** is a safety-first, community-powered platform developed during a 36-hour hackathon hosted by **NIT JSR** as part of **Ojass '24**. 

---

## 🚀 Key Features

### 🧾 1. Legal Assistance

Navigating India’s legal system is tough. Our platform simplifies this by:

* Offering document help and step-by-step guidance.
* Taking a small brokerage (just like Groww) to complete paperwork on behalf of users.
* Saving time and making justice more accessible.

### 💬 2. Community Forum

A place to share, learn, and stay alert:

* Users can post scams, share experiences, and ask for help.
* Future plans include **location-based scam search** and **sharing data with local authorities** to improve community awareness.

### 🚨 3. SOS (Coming Soon)

In emergencies, every second matters:

* A system to automatically send messages/calls to hospitals or police depending on the crisis.
* Aimed at reducing emergency response time significantly.

### 🎓 4. Courses

One-stop hub for safety education:

* Content creators can upload courses related to societal safety.
* We take a small cut from each purchase, promoting creator and user benefit simultaneously.

---

## 🛠️ Tech Stack

| Category     | Technologies Used                                  |
| ------------ | -------------------------------------------------- |
| Frontend     | React.js, React-Bootstrap, Styled Components       |
| Backend      | Node.js, Express.js                                |
| Database     | MongoDB, Mongoose                                  |
| Auth & Logic | JWT, Passport.js, Redux Toolkit, Express Validator |
| Payments     | Stripe                                             |
| Utilities    | Multer, Joi, Helmet, Morgan, Nanoid                |

> ❌ **Note:** We did **not** use Redis in this project.

---

## 📦 Client Dependencies

```json
"dependencies": {
  "@reduxjs/toolkit": "^2.2.2",
  "@stripe/stripe-js": "^3.2.0",
  "axios": "^1.6.8",
  "bootstrap": "^5.3.3",
  "react": "^18.2.0",
  "react-bootstrap": "^2.10.2",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.1",
  "react-redux": "^9.1.0",
  "react-router-dom": "^6.22.3",
  "redux": "^5.0.1",
  "redux-thunk": "^3.1.0",
  "socket.io-client": "^4.7.5",
  "styled-components": "^6.1.8"
}
```

---

## 🧱 Server Dependencies

```json
"dependencies": {
  "axios": "^1.6.8",
  "bcryptjs": "^2.4.3",
  "body-parser": "^1.20.2",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "express-async-handler": "^1.2.0",
  "express-validator": "^7.0.1",
  "helmet": "^7.1.0",
  "joi": "^17.12.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.5.0",
  "mongoose": "^8.2.4",
  "morgan": "^1.10.0",
  "multer": "^1.4.5-lts.1",
  "nanoid": "^5.0.6",
  "nodemon": "^3.1.0",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "shortid": "^2.2.16",
  "socket.io": "^4.7.5",
  "stripe": "^14.24.0",
  "winston": "^3.13.0"
}
```

---

## 📁 Project Structure

```
techshield/
├── client/               # React Frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── ...
├── server/               # Node.js + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js v20+
* MongoDB instance (local or Atlas)
* Stripe API keys

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/techshield.git
cd techshield

# Setup frontend
cd hackathon
npm install

# Setup backend
cd server
npm install

# Run both servers separately or use a dev tool like concurrently
```

---

## 🧩 Future Plans

* 🔔 Fully functional SOS system with third-party integrations (Twilio, etc.)
* 📍 Location-based scam filtering and visualization
* 🧠 AI/ML-based scam detection (in future iterations)
* 📊 Admin dashboard for moderation
* 📱 Mobile version with React Native

---

## 🏁 Conclusion

**TechShield** is more than just a hackathon project — it’s a step toward using tech for a **safer, smarter, and more informed society**. We hope to grow this idea beyond the hackathon and make a real impact!

---

## 🙏 Acknowledgements

* ✨ **Hack De Science – Ojass '24**
* 👨‍💻 Open source libraries and dev communities
* 💪 Every individual working towards social good

---


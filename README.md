<div align="center">

![github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)
![markdown](https://img.shields.io/badge/Markdown-181717.svg?style=for-the-badge&logo=Markdown&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-181717?style=for-the-badge&logo=vercel&logoColor=white)

# SmartLint – AI Powered Code Reviewer
An **AI-powered code review system** capable of analyzing code in any programming language, with a unique capability to review and lint neonLang, a custom programming language.
</div>

---

##  Project Overview

SmartLint automates code review by leveraging AI to analyze code quality, suggest improvements, detect bugs, and enforce best practices across multiple programming languages. Its unique support for neonLang empowers developers using this custom language with tailored linting and feedback.

---

>[!NOTE]
>## Features
>- AI-powered code review supporting any programming language
>- Intelligent suggestions for code quality improvements, bug detection, and best practices.  
>- Green, yellow, and red icons represent correct code, suggested fixes, and errors respectively.
>- Special, custom linting rules and full support for the custom language neonLang
>- Clean and responsive UI 

---

<div align="center">

| Layer      | Tech Used |
|------------|-----------|
|Frontend|![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)|
|Backend|![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)|
|AI Logic |![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)|

</div>

---

## Directory Structure

```bash


Recovaid/
│
├── client/
│   ├── public/                   # Static assets
│   ├── src/                      # React source files
│   │   ├── assets/               # Images, fonts, etc.
│   │   ├── pages/                # Page-level components
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── dockerfile
│   ├── .env                      # Environment variables
│   ├── package.json              # client meta data
│   ├── package-lock.json         # dependency tree
│   ├── eslint.config.js        
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── vercel.json               # Vercel deployment config
│
│
├── server/                       # Express backend
│   ├── src/
│   │   ├── configs/              # Config file for environment vars
│   │   ├── controllers/          # Route controllers (handle req/res)
│   │   ├── services/             # Business logic layer
│   │   ├── routes/               # Route definitions
│   │   ├── utils/                # Misc utilities (e.g., nodemailer)
│   │   └── index.js              # App entry point
│   │
│   ├── dockerfile                
│   ├── .env                      # Environment variables
│   ├── package.json              # Server meta data
│   ├── package-lock.json         # dependency tree
│   └── vercel.json               # Vercel deployment config
│
│
├── docker-compose.yml           # config file for dockerfiles
├── README.md                     # Project documentation
└── LICENSE                       # License file

```
---
<br>
<p align="center"><a href="https://github.com/Nilanjan-Mondal/Recovaid/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=BSD&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>

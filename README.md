# 🧠 GenAI Code Assistant

GenAI Code Assistant is an AI-powered coding companion designed to make debugging faster, smarter, and more human.  
Built using React.js, Node.js, MongoDB Atlas, HTML, CSS, and JavaScript, it leverages the OpenAI API (trained up to October 2023) to analyze, understand, and fix code errors in real time.

---

## 🚀 Features

- 🔍 **Smart Code Analysis** – Detects syntax and logical errors across multiple languages.  
- ⚙️ **Instant Fixes** – Provides corrected versions of code instantly.  
- 💬 **Human-Like Explanations** – Explains *why* an error occurred and *how* it was fixed.  
- 🧩 **Side-by-Side View** – Compare your original and improved code easily.  
- ☁️ **Cloud Storage** – Saves user sessions securely using **MongoDB Atlas**.  
- 🌐 **Modern Frontend** – Intuitive **React.js** interface for seamless interaction.  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Node.js** | Backend runtime |
| **Express.js** | Server handling |
| **MongoDB Atlas** | Cloud database |
| **HTML5 / CSS3** | UI and layout |
| **JavaScript (ES6)** | Core scripting language |
| **OpenAI API** | AI-powered code analysis |

---

## ⚡ How It Works

1. Ask any question to the editor.  
2. The backend (Node.js + Express) sends it to the OpenAI model for analysis.  
3. The AI identifies issues, explains them, and returns a fixed version.  
4. The frontend (React.js) displays both versions side by side.  
5. User sessions and code history are saved in MongoDB Atlas.  

---

## 🧰 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/someshm17/GEN-AI.git

# Navigate to the project directory
cd OPENAI

# Install dependencies
npm install

# Start the development server
npm run dev

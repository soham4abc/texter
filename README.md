# Texter

<div align="center">

![Texter Logo](https://user-images.githubusercontent.com/63705023/220127902-8c178f10-6dab-4fad-8941-5a2b3876d2b7.png)

Convert images into editable text instantly

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.6+-blue.svg)](https://www.python.org/downloads/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/sohambanerjee4abc/texter)

</div>

## 📝 Table of Contents
- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Development](#development)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Demo](#demo)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 About

Texter is a powerful web application that converts text from images into editable .docx files. Whether you have scanned documents, screenshots, or any images containing text, Texter makes it easy to extract and edit that content in a familiar document format. Perfect for students, professionals, and anyone needing to digitize text from images.

## ✨ Features

- **Intelligent Text Extraction**
  - Support for PNG and JPEG image formats
  - High-accuracy OCR processing
  - Maintains text formatting where possible
  
- **Multiple Language Support**
  - Primary support for English text recognition
  - Extensible architecture for adding more languages
  
- **Document Management**
  - Direct export to editable .docx format
  - Preserve text layout and structure
  - Batch processing capabilities
  
- **User Experience**
  - Intuitive web interface
  - Drag-and-drop file upload
  - Real-time conversion progress
  - Mobile-responsive design

## 🛠 Technology Stack

### Backend
- Python 3.6+
- Tesseract OCR Engine
- Flask (REST API)
- Python-docx (Document generation)
- JWT for authentication

### Frontend
- HTML5/CSS3
- JavaScript (ES6+)
- PHP 7.4+
- Bootstrap 5 (Responsive Design)
- AJAX for async operations

## 🚀 Getting Started

### Prerequisites

- Python 3.6 or higher
- pip (Python package manager)
- Tesseract OCR engine
- Web server with PHP 7.4+
- Git (optional, for cloning the repository)
- Node.js and npm (for frontend development)

### Installation

#### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sohambanerjee4abc/texter.git
   cd texter
   ```

2. Create and activate virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   # or
   .\venv\Scripts\activate  # Windows
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Install Tesseract OCR:
   ```bash
   # Linux
   sudo apt install tesseract-ocr -y
   
   # macOS
   brew install tesseract
   
   # Windows
   # Download installer from https://github.com/UB-Mannheim/tesseract/wiki
   ```

5. Configure environment:
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

6. Start the backend server:
   ```bash
   cd Backend/API
   python api.py
   ```

#### Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the backend URL:
   ```javascript
   // Edit assets/js/custom.js
   const backendUrl = 'http://your-backend-url';
   ```

4. Deploy to web server or start development server:
   ```bash
   npm run dev
   ```

## 🔧 Development

1. Fork and clone the repository
2. Create feature branch: `git checkout -b feature-name`
3. Run tests: `python -m pytest`
4. Submit PR with comprehensive description

## 💻 Usage

1. Access the web interface
2. Upload image(s) containing text
3. Select output preferences
4. Click "Convert"
5. Download the generated .docx file

## 📚 API Documentation

### Endpoints

#### Health Check
```http
GET /users
```

#### File Upload
```http
POST /upload
Content-Type: multipart/form-data

Parameters:
- file: Image file (required)
- language: OCR language (optional)
```

## 🎥 Demo

Watch Texter in action:

https://user-images.githubusercontent.com/63705023/220131548-23ee961d-7586-4f21-a187-b9c5ca6b5a2c.mp4

## ❗ Troubleshooting

### Common Issues

1. **OCR Not Working**
   - Verify Tesseract installation
   - Check image quality
   - Ensure proper language pack installation

2. **Backend Connection Failed**
   - Verify API URL in frontend config
   - Check CORS settings
   - Ensure proper port configuration

## 🤝 Contributing

We love your input! We want to make contributing to Texter as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Development Process
1. Fork the repo and create your branch from `main`
2. Add tests for any new code
3. Ensure tests pass
4. Update documentation
5. Submit pull request

### Code Style
- Follow PEP 8 for Python code
- Use ESLint for JavaScript
- Keep code modular and documented

## 📞 Contact

- Project Link: [https://github.com/sohambanerjee4abc/texter](https://github.com/sohambanerjee4abc/texter)
- Report Issues: [Issue Tracker](https://github.com/sohambanerjee4abc/texter/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by the Texter team
</div>




# Texter

<div align="center">

![Texter Logo](https://user-images.githubusercontent.com/63705023/220127902-8c178f10-6dab-4fad-8941-5a2b3876d2b7.png)

Convert images into editable text instantly

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

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
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

Texter is a powerful web application that converts text from images into editable .docx files. Whether you have scanned documents, screenshots, or any images containing text, Texter makes it easy to extract and edit that content in a familiar document format.

## ✨ Features

- **Image to Text Conversion**: Support for PNG and JPEG image formats
- **Multiple Language Support**: Primary support for English text recognition
- **Document Export**: Direct export to editable .docx format
- **Web Interface**: User-friendly interface for easy file upload and conversion
- **RESTful API**: Backend API for integration with other applications
- **Real-time Processing**: Quick and efficient text extraction

## 🛠 Technology Stack

### Backend
- Python
- Tesseract OCR Engine
- Flask (REST API)
- Python-docx (Document generation)

### Frontend
- HTML5/CSS3
- JavaScript
- PHP
- Bootstrap (Responsive Design)

## 🚀 Getting Started

### Prerequisites

- Python 3.6 or higher
- pip (Python package manager)
- Tesseract OCR engine
- Web server with PHP support
- Git (optional, for cloning the repository)

### Installation

#### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sohambanerjee4abc/texter.git
   cd texter
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install Tesseract OCR (Linux):
   ```bash
   sudo apt install tesseract-ocr -y
   ```
   For other operating systems, please refer to the [Tesseract documentation](https://github.com/tesseract-ocr/tesseract).

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the frontend URL in the `.env` file

5. Start the backend server:
   ```bash
   cd Backend/API
   python api.py
   ```

6. Verify the installation:
   - Send a GET request to `/users` endpoint
   - You should receive a "works" response

#### Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Configure the backend URL:
   - Open `assets/js/custom.js`
   - Update the `backendUrl` variable with your backend server address

3. Deploy the frontend files to your web server

## 💻 Usage

1. Access the web interface through your browser
2. Upload an image containing text (PNG or JPEG format)
3. Click the "Convert" button
4. Download the generated .docx file with the extracted text

## 📚 API Documentation

### Endpoints

- `GET /users` - Health check endpoint
- `POST /upload` - Upload image for text extraction
  - Request: Multipart form data with image file
  - Response: .docx file download

## 🎥 Demo

Watch Texter in action:

https://user-images.githubusercontent.com/63705023/220131548-23ee961d-7586-4f21-a187-b9c5ca6b5a2c.mp4

## 🤝 Contributing

We welcome contributions to Texter! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by the Texter team
</div>




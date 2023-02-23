# Texter
### Convert images into editable text instantly
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63705023/220127902-8c178f10-6dab-4fad-8941-5a2b3876d2b7.png" />
</p>

## Utility:

This software can convert text in image into editable .docx file. Any PNG or JPEG image with text in it can be used to generate a .docx file.

## Technology used:

This software pre-trained AI models for recognition of English charachters. This is done with the help of the `Tesseract` python package.

## Installation and Implementation:

- The Software has been divided into Frontend and Backend and can be used seperately in two different servers.

- In Backend the required Python packages can be installed using the `requirements.txt` file
- `sudo pip install -r requirements.txt`

- In linux enviornment you may need to install additional package `sudo apt install tesseract-ocr -y`
- Set the `.env` mentioning the address of the frontend (.env.example provided)
- Run the `aapi.py` script located in `Backend/API`
- send a `GET` request to `/users` endpoint. It should return `works`. That means it's working.

- Frontend Setup: Change the `Frontend/assets/js/custom.js` Backend URL to the url of the backend server.
- Deploy the frontend.

## See the Application in Action here:



https://user-images.githubusercontent.com/63705023/220131548-23ee961d-7586-4f21-a187-b9c5ca6b5a2c.mp4

## Want to improve our application?
You are free to create an issue for the same and raise respective Pull Requests. We appriciate your effort!! 




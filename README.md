React Real-Time Chat Application
Welcome to the React Real-Time Chat Application repository! This project is a dynamic chat platform built with React and Firebase, designed to offer a seamless real-time communication experience. Below you'll find details about the project, including its features, setup instructions, and how to contribute.

Table of Contents
Features
Tech Stack
Installation
Usage
Contributing
License
Contact
Features
Real-Time Messaging: Instantly send and receive messages without page reloads.
User Authentication: Secure user login and registration using Firebase Authentication.
Responsive Design: A user-friendly interface that adapts to various screen sizes.
Emoji Picker: Enhanced messaging with emoji support.
Push Notifications: Stay updated with new messages via push notifications.
Image Uploads: Share images within the chat.
Real-Time Data Synchronization: Ensures instant updates across all users.
Tech Stack
Frontend: React, Material-UI
Backend: Firebase (Authentication, Firestore)
Deployment: Netlify
Installation
Follow these steps to set up the project locally:

Clone the Repository

bash
Copy code
git clone https://github.com/geekdhruv/Chatify-Chat-App.git
cd Chatify-Chat-App
Install Dependencies

Ensure you have Node.js installed. Then, run:

bash
Copy code
npm install
Set Up Firebase

Go to the Firebase Console.

Create a new project and configure Firebase Authentication and Firestore.

Add your Firebase configuration to the .env file:

plaintext
Copy code
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Start the Development Server

bash
Copy code
npm start
Navigate to http://localhost:3000 to see the application in action.

Usage
Login/Register: Use the authentication features to log in or register a new account.
Chat: Start chatting with real-time updates. Use the emoji picker and image upload features to enhance your communication.
Contributing
We welcome contributions! Please follow these guidelines:

Fork the repository.
Create a new branch for your changes.
Make your modifications and test thoroughly.
Submit a pull request describing your changes.
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, feel free to reach out:

Email: vashisthadhruv61@gmail.com
LinkedIn: Dhruv Vashistha
GitHub: geekdhruv

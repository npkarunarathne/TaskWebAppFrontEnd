README
Project Title
TodoWebApplication

Description

TodoWebApplication is a web application designed to manage todo lists with different statuses. The application allows users to manage their tasks by creating, updating, and filtering them based on status and date range. Users can also upload images as attachments to their tasks. The application uses ReactJS and Material-UI to provide a modern and responsive user interface. Authentication is handled through Auth0 to ensure secure user login and task management.

Features

User Authentication: Secure login using Auth0.
Task Management: Create, update, and delete todo items.
Task Details:
Task Name
Task Description
Attachment (Image file upload)
Task Filtering: Filter tasks by:
Status (Todo, In Progress, Done)
Date Range (Created Date)
Status Toggle: Easily change task status with a toggle button.
Responsive UI: Designed with Material-UI for a responsive and user-friendly interface.
Technologies Used
Frontend: ReactJS
UI Framework: Material-UI
Authentication: Auth0
Image Upload: API endpoint for image upload
API Management: @reduxjs/toolkit for API interactions

Installation

Clone the Repository:
bash
Copy code
git clone https://github.com/npkarunarathne/TaskWebAppFrontEnd
Navigate to the Project Directory:
bash
Copy code
cd TaskWebAppFrontEnd
Install Dependencies:
bash
Copy code
npm install
Configuration
Auth0 Configuration:

Set up Auth0 credentials and add them to your environment configuration file (e.g., .env).
API Endpoints:

Ensure the API endpoint for image uploads is configured correctly in your application.
Usage
Start the Development Server:

bash
Copy code
npm start
Open the Application:

Navigate to http://localhost:5173 in your browser.
Features:

Log in using your Auth0 credentials.
Create, update, and manage tasks.
Filter tasks by status and date range.
Use the toggle button to change task statuses.

Acknowledgments
Material-UI: For the UI framework.
Auth0: For authentication services.

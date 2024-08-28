# TodoWebApplication

## Description

TodoWebApplication is a web-based task management system built with ReactJS and Material-UI. It allows users to create, update, and filter todo items based on status and date range. The application features secure user authentication through Auth0 and supports image attachments for tasks.

## Features

- **User Authentication**: Secure login using Auth0
- **Task Management**: Create, update, and delete todo items
- **Task Details**:
  - Task Name
  - Task Description
  - Attachment (Image file upload)
- **Task Filtering**:
  - By Status (Todo, In Progress, Done)
  - By Date Range (Created Date)
- **Status Toggle**: Easily change task status with a toggle button
- **Responsive UI**: Designed with Material-UI for a modern and user-friendly interface

## Technologies Used

- Frontend: ReactJS
- UI Framework: Material-UI
- Authentication: Auth0
- API Management: @reduxjs/toolkit
- Image Upload: Custom API endpoint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/npkarunarathne/TaskWebAppFrontEnd
   ```

2. Navigate to the project directory:
   ```bash
   cd TaskWebAppFrontEnd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. **Auth0 Setup**:
   - Set up your Auth0 account and create an application
   - Add Auth0 credentials to your environment configuration file (e.g., `.env`)

2. **API Endpoints**:
   - Ensure the API endpoint for image uploads is correctly configured in your application

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open the application:
   - Navigate to `http://localhost:5173` in your web browser

3. Using the application:
   - Log in using your Auth0 credentials
   - Create, update, and manage tasks
   - Filter tasks by status and date range
   - Use the toggle button to change task statuses

## License


## Acknowledgments

- [Material-UI](https://material-ui.com/) for the UI framework
- [Auth0](https://auth0.com/) for authentication services


# React Chat Application Frontend

This repository contains the frontend for a chat application built with React and Socket.IO, as well as a personal website built using Docusaurus.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://your-repo-url.git
    cd your-repo-url
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

Update the server URL in the `my-react-page.js` file:

```javascript
socket.current = io('http://YOUR_BACKEND_SERVER_URL/');
```

### Running the Application

To run the application locally, use the following command:

```bash
npm start
```
This will start the development server and open the application in your default web browser.

### Building for Production

To create a production build, use the following command:

```bash
npm run build
```

This will create a build directory with the optimized production files.

## Deployment

You can deploy the production build to any static file hosting service. If you are using Google Cloud Run, follow these steps:

### Build a Docker image

```bash
docker build -t your-image-name .
```
    
### Push the Docker image to Google Artifact Registry

```bash
docker push your-image-name
```

Deploy the image to Google Cloud Run using the Google Cloud Console or the gcloud command line tool.

### Usage
Navigate to the deployed application URL.
Enter the password to log in.
Start sending and receiving messages in the chat room.

## Troubleshooting
If you encounter CORS issues, ensure that the backend server has the appropriate CORS settings:

```javascript
app.use(cors({
  origin: '*'
}));
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

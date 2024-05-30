
# Personal Website with Chat Application

This repository contains the frontend for a chat application built with React and Socket.IO, as well as a personal website built using Docusaurus.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/cpcl1217/marknote.github.io.git
    cd marknote.github.io.git
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

## Backend Server

This frontend application is designed to work with the backend server provided in the following repository: [my-web-backend](https://github.com/cpcl1217/my-web-backend).

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

## Architecture

![image](https://github.com/cpcl1217/marknote.github.io/assets/136040246/c63bc624-f6c5-4898-a163-3a4139a2810e width=300 height=300)

When users access this website, they first connect to the nearest CDN server through the CDN. This request is then routed to the External Load Balancer (LB). Due to the presence of a Web Application Firewall (WAF), the user's IP address is sent to the WAF for security checks. Once verified, the request is sent back to the External LB, which then distributes the traffic to the server. Users can then connect to the Cloud Run instance hosting the frontend via the Backend Service, successfully browsing the website. Since I have implemented a chat feature, this Cloud Run instance also hosts the backend server, primarily handling message transmission and reception.


## High Availability Verification

After demonstrating the website architecture, how can we ensure that the website truly has high availability? Next, we will verify high availability by performing stress tests using two tools: K6 and LOIC. K6 is used for WebSocket traffic validation, while LOIC tests whether the website can withstand DDoS attacks.

### K6 Test Results

![image](https://github.com/cpcl1217/marknote.github.io/assets/136040246/def412ad-2aa3-4877-9d14-1868452f510d)

For the K6 test, I conducted a five-minute test with up to ten concurrent users continuously transmitting messages. There are two versions: one without high availability and one with high availability. The table shows that, in terms of data transmission, latency, and the number of established connections, the website with high availability clearly performs better. This verifies that a high availability architecture can significantly enhance the website's performance and stability under high traffic, ensuring a better user experience.

### LOIC Test Results

![image](https://github.com/cpcl1217/marknote.github.io/assets/136040246/44858a25-bb8e-4bd5-b335-a332104528b2)

For the LOIC test, I also used two versions. I used 60 threads, with each thread sending 100 attack packets, totaling 6000 attacks per test. Dividing the tests at 9 o'clock, I conducted two tests for each type of website. The graph shows that during the period from 8:45 to 8:49, the latency continuously spiked, but after 9 o'clock, the latency returned to normal. This indicates that the high availability architecture can effectively prevent DDoS attacks.


### Usage

1. Navigate to the deployed application URL.
2. Enter the password to log in.
3. Start sending and receiving messages in the chat room.

## Troubleshooting

If you encounter CORS issues, ensure that the backend server has the appropriate CORS settings:

```javascript
app.use(cors({
  origin: '*'
}));
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

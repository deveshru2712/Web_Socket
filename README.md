# Web_Socket

A simple real-time messaging application built with React, TypeScript, and WebSockets.

## Features and Functionality

*   **Real-time Messaging:** Sends and receives messages instantly using WebSocket communication.
*   **Client-Server Architecture:** Utilizes a WebSocket server (Node.js) to broadcast messages to connected clients.
*   **User Interface:** A basic React-based UI for sending and displaying messages.

## Technology Stack

*   **Client:**
    *   React
    *   TypeScript
    *   Vite
    *   HTML
    *   CSS
*   **Server:**
    *   Node.js
    *   ws (WebSocket library)
    *   http

## Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn
*   Basic knowledge of React, TypeScript, and WebSockets

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/deveshru2712/Web_Socket.git
    cd Web_Socket
    ```

2.  **Install server-side dependencies:**

    ```bash
    cd src
    npm install ws
    cd ..
    ```

3.  **Install client-side dependencies:**

    ```bash
    cd client
    npm install
    # or
    yarn install
    cd ..
    ```

## Usage Guide

1.  **Start the WebSocket server:**

    ```bash
    cd src
    node index.ts
    ```

    This will start the server on port 8080.  You should see the message `Server is listening on port 8080` in your terminal.

2.  **Start the React client:**

    ```bash
    cd client
    npm run dev
    # or
    yarn dev
    ```

    This will start the React development server.  The application will typically be accessible at `http://localhost:5173/`. Check the terminal output from `npm run dev` or `yarn dev` for the exact URL.

3.  **Open the application in your browser:**

    Navigate to the URL provided by the React development server (e.g., `http://localhost:5173/`).

4.  **Send and receive messages:**

    Type your message in the input field and click the "Submit" button.  The message will be sent to the server and broadcasted to all connected clients, including yourself.  You will see the messages appearing in the message queue above the input field.

## API Documentation

This project implements a simple WebSocket API.

*   **WebSocket Endpoint:** `ws://localhost:8080`
*   **Data Format:** Text-based messages.  The server echoes back any received message to all connected clients.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your branch to your forked repository.
5.  Submit a pull request to the main repository.

## License Information

No license specified. All rights reserved by the owner of this repository.

## Contact/Support Information

For questions or support, please contact [deveshru2712](https://github.com/deveshru2712) through GitHub.
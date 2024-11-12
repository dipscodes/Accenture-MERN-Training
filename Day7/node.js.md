# Node.js Notes

## Introduction to Node.js

- **Definition**: Node.js is an open-source, cross-platform runtime environment that allows JavaScript to be run on the server side.
- **Built on**: Google Chrome's V8 JavaScript engine.
- **Primary Use**: Build scalable and fast network applications, especially for handling I/O-bound tasks.

## Key Features of Node.js

1. **Asynchronous and Event-Driven**: Non-blocking I/O makes it efficient for real-time applications.
2. **Single-Threaded with Event Loop**: Uses a single thread to handle requests but can manage many concurrent requests through the event loop.
3. **Cross-Platform**: Runs on Windows, Linux, and macOS.
4. **Lightweight and Fast**: Leveraging the V8 engine, Node.js executes JavaScript code efficiently.
5. **Rich Package Ecosystem**: NPM (Node Package Manager) provides thousands of libraries for various functionalities.

## Core Concepts

### Event Loop

- Node.js uses an event-driven architecture, which helps manage multiple client requests efficiently.
- **Event Loop Phases**: Includes timers, pending callbacks, idle/prepare, poll, check, and close callbacks.

### Callbacks

- A function passed as an argument to another function, executed after a specific task is completed.
- Essential for asynchronous operations, e.g., reading files, making network requests.

### Promises and Async/Await

- **Promises**: Represent the completion or failure of an asynchronous operation.
- **Async/Await**: Modern syntax to handle asynchronous code, making it more readable.

## Modules in Node.js

- **Modules**: Encapsulate code and can be imported/exported across files.
- **Built-in Modules**:
  - `fs`: For interacting with the file system.
  - `http`: For creating HTTP servers.
  - `path`: For handling file and directory paths.
  - `os`: Provides operating system-related utilities.
  - `events`: For handling and triggering events.

### Creating Custom Modules

- Export functionality using `module.exports`.
- Import modules using `require()`.

## Node Package Manager (NPM)

- **Purpose**: Manages packages or libraries, making it easier to share and reuse code.
- **Commands**:
  - `npm init`: Initialize a new project.
  - `npm install <package>`: Install a package.
  - `npm install -g <package>`: Install a package globally.
  - `npm uninstall <package>`: Remove a package.

## Building a Simple HTTP Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

## Advantages of Node.js

- Highly scalable due to asynchronous, non-blocking nature.
- Large ecosystem and community support.
- Great for microservices and API-based architectures.

## Use Cases of Node.js

- Real-time applications (chat applications, gaming servers).
- RESTful API servers.
- Data streaming applications.
- Single-page applications (SPAs).

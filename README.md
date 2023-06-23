## Technologies Used

This application is built using the following technologies for creation of blog posts.

- **Node.js**: A JavaScript runtime environment that allows running JavaScript code on the server side.
- **Express.js**: A fast and minimalist web application framework for Node.js that provides a set of robust features for web and API development.
- **EJS (Embedded JavaScript)**: A simple templating language that allows generating dynamic HTML markup with JavaScript.

## MVC Architecture

This application follows the MVC (Model-View-Controller) architectural pattern, which promotes a separation of concerns and modular design.

- **Model**: Represents the data and business logic of the application. It interacts with the data source (e.g., database) and provides an interface to fetch, update, and manipulate data.
- **View**: Handles the presentation layer of the application. It renders the user interface based on the data received from the controller and displays it to the user.
- **Controller**: Acts as an intermediary between the model and view. It receives user requests, interacts with the model to retrieve data, and passes that data to the view for rendering. It also handles user input and triggers appropriate actions.
  The MVC approach helps in organizing the codebase, improving maintainability, and facilitating collaboration among developers working on different parts of the application.

## Application Structure

The structure of the application follows the MVC architectural pattern:

- app.js: The main entry point of the application where the Express server is initialized and configured.
- controllers/: This directory contains the controller files that handle user requests, interact with the model, and pass data to the views.
- models/: This directory contains the model files that encapsulate the data and business logic of the application.
- views/: This directory contains the EJS templates used for rendering dynamic HTML content.
- public/: This directory is used to serve static files such as CSS stylesheets and client-side JavaScript files.

## Resources

- Node.js Documentation
- Express.js Documentation
- EJS Documentation
- [MVC Architecture Overview](https://en.wikipedia.org/wiki/Model–view–controller)

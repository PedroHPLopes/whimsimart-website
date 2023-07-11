# Project Name

Website Development using Large Language Models

## Published Website 
The whimismart ECommerce, selling innovative and non-existant items is published at https://pedrohplopes.github.io/whimsimart-website/index.html

## Description
This is a challenge of the Generative Networks Course from I2A2 - Institut d'Intelligence Artificielle Appliquée.
This project aims to build a ECommerce website using only Large Language Models (LLMs). The entire process, including generating ideas, generating code snippets, writing documentation, and even generating image prompts, was done using LLMs. The website was developed using the ChatGPT model provided by OpenAI. Images used on the website were generated using Bing Image Creator.

## Project Requirements

The website consists of three different pages: Login Page, Reset Page, and Items Page.

### Login Page

- The login page verifies if the user has filled both the email and password fields.
- If both fields are filled, the user is redirected to the items page.
- The login page also provides a link to redirect to the reset password page.

### Reset Page

- The reset page verifies if the email field is filled.
- If the email field is filled, a pop-up message is displayed, indicating that the recovery email has been sent. After that, the user is redirected to the login page.

### Items Page

- The items page lists at least 10 items.
- Each item is displayed with an ID, name, and price.
- When an item is clicked, it expands to show a short description.

The scripts used in this project are to be written in JavaScript.

## Implementation Details

The project was carried out by following the steps outlined in the conversation with the ChatGPT model. The initial idea for the project was generated through brainstorming with the model, and subsequent discussions led to the development of the website structure, functionality, and styling. The model generated the image prompts used.

The website project folder structure is as follows:
- `index.html`: The login page.
- `reset.html`: The password reset page.
- `items.html`: The items page.
- `css/`: Folder containing the CSS stylesheets.
- `js/`: Folder containing the JavaScript files.
- `img/`: Folder containing the image assets.
- `items/`: Folder containing the `items.json` file with item data.

## Possible Improvements

- Implement server-side validation for the login and reset pages to enhance security.
- Add user authentication functionality using backend technologies like Node.js or Django.
- Enhance the user interface with more engaging designs and animations.
- Implement a shopping cart feature for the items page to allow users to add items to their cart.
- Improve responsiveness to ensure the website works well on various devices and screen sizes.
- Optimize the website's performance, such as reducing file sizes and optimizing code execution.

## Contributors

- https://chat.openai.com/chat
  - https://chat.openai.com/share/0a824b46-8cc5-434a-a8f2-2070295bb646
  - https://chat.openai.com/share/44eb8378-b065-46b3-b7ef-f4e85141c691
- https://www.bing.com/images/create

Please feel free to contribute to this project by making improvements or suggesting new features.

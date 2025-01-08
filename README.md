# Projet FullStack Restaurant  
Application created by Bercier Thomas, Degouey Corentin, Wilhelm Arno
## Table of Contents  
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [License](#license)  

## Installation  

### Prerequisites  
Ensure you have the following installed on your machine:  
- **Node.js** (v14.x or later)  
- **Angular CLI** (v12.x or later)  
- **MongoDB** (v4.x or later)  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/skiiing73/Projet_FullStack_Restaurant  
   ```  

2. Navigate to the project folder:  
   ```bash  
   cd Projet_FullStack_Restaurant  
   ```  

3. Add the `config.js` file in the root folder (`Projet_FullStack_Restaurant`).  

4. Connect to the university VPN using Cisco AnyConnect (or your university’s VPN client).  

5. Run the `run.ps1` script in your powershell:  
   ```bash  
   ./run.ps1 
   ```  
6. If the script doesn't work :
   Navigate to App_Restaurant:
    ```bash
     ng serve
    ```
    Navigate to Back_End :
   ```bash  
   node api.js
   ``` 
7. Open your browser and go to [http://localhost:4200](http://localhost:4200).
   
8.Put your windows in the developper mode of your browser and choose a smartphonelayout.

---

## Technologies Used  

- **Angular**: Front-end framework for building the user interface.  
- **MongoDB**: NoSQL database for storing orders and user data.  
- **Express.js**: Backend framework for handling server logic.  
- **Node.js**: Server-side environment for running the backend.  
- **Bootstrap** (optional): For styling the front-end components.  

---

## Features  

- **Account Creation**: Users can create an account and register.  
- **Menu Browsing**: Users can browse the menu and place orders.  
- **Dish Feedback**: Users can leave comments on dishes and see feedback from others.  
- **Quick Reorder**: Users can reorder previous purchases with a single click.  
- **Dish Suggestions**: Personalized dish suggestions displayed on the basket page.  
- **Profile Management**: Users can access their profile page to update their name or email.  
- **About Us Page**: Provides details about the restaurant and its story.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  



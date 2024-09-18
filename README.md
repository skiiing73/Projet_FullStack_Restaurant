Here’s an example README in English for your restaurant order application:

---

# Restaurant Order Application

## Description
This application allows restaurant staff and customers to manage orders efficiently. Users can place orders, view them, and administrators can manage them. The app uses **Angular** for the front-end interface and **MongoDB** for data storage.

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v14.x or later)
- **Angular CLI** (v12.x or later)
- **MongoDB** (v4.x or later)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/restaurant-order-app.git
   ```

2. Navigate to the project folder:

3. Install the dependencies for both client and server:
   ```bash
   npm install
   ```

4. Set up the MongoDB database:
   - Install MongoDB and ensure it’s running.
   - Create a new database called `restaurant_orders`.
   - Configure your MongoDB URI in the server configuration file (`src/environments/environment.ts`).

5. Start the development server:
   ```bash
   ng serve
   ```

6. Open your browser and go to `http://localhost:4200`.

## Technologies Used

- **Angular**: Front-end framework for building the user interface.
- **MongoDB**: NoSQL database used to store order and user data.
- **Express.js**: Backend framework (if applicable).
- **Node.js**: Server-side environment to run the backend.
- **Bootstrap** (optional): For styling the front-end components.

## Features
- User can browse the menu and place orders.
- Orders are stored in a MongoDB database.
- Admin can manage orders (view, update status, etc.).
- Responsive design for desktop and mobile users.

## Usage

- **Frontend**: Developed using Angular. The main components include:
  - `OrderComponent`: Displays the menu and order form.
  - `OrderListComponent`: Lists all orders.
  - `AdminComponent`: Allows admins to manage orders.

- **Backend** (if applicable): 
  - MongoDB is used to store the data.
  - Express.js handles API requests for managing orders.

## Import Modules
For the front-end, make sure you import the necessary Angular modules:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and create a pull request.

## License
This project is licensed under the MIT License.

--- 

This should give you a good starting point for the README of your project! Let me know if you need further customization.
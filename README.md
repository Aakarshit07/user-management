# User Management App

This is a simple User Management application that allows users to:
- Add a new user.
- Edit an existing user.
- List all users.
- Delete a user.

## Features
- Add, edit, and list user details (name, email, department).
- Simple and responsive form to handle user input.
- User data is displayed in a clean and organized manner.
- Ability to delete a user.
  
## Challenges Faced

### 1. **User Listing Table**
   One of the main challenges during the development process was listing the users in a table format. Ensuring that all user data was displayed correctly and responsively was a bit tricky, especially when trying to handle dynamic updates after adding or editing users.

### 2. **Form for Adding and Editing Users**
   Another challenge was ensuring that the form worked smoothly for both adding and editing users. I needed to handle the scenario where the form inputs would reset correctly when no initial data was provided, while also being able to update an existing user when the form was populated with their data.

## Improvements If Given More Time
- **Error Handling:** I would improve error handling for scenarios like empty fields or incorrect email format.
- **User Validation:** Adding more robust user validation for fields like email (e.g., checking if the email is already in the system).
- **Styling Enhancements:** I would further enhance the styling and improve the user experience by adding animations or better UI components.

## Setup Instructions

If you want to set up this project locally, follow the steps below.

### 1. **Clone the Repository**

```bash
git clone https://github.com/Aakarshit07/user-management.git
cd user-management-app
```

### 2. **Install Required Dependencies**

```bash
npm install
```

### 3. **Start the Development Server on Localhost**

```bash
npm run dev
```
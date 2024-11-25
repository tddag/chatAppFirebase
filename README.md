### Live Demo 

https://td-chatappfirebase.netlify.app/

<img width="600" alt="chatAppFirebase" src="https://user-images.githubusercontent.com/34137087/235575823-2de64dd4-133e-4570-ba10-afef31041680.png">


# Setup

- Install [Node](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Clone the repository `https://github.com/tddag/chatAppFirebase`
- Install dependencies `npm install`
- Set up Firebase
    - Update Storage Access as required - Firebase -> Storage -> Rules:
    ```
        rules_version = '2';
        service firebase.storage {
        match /b/{bucket}/o {
            match /{allPaths=**} {
            allow read, write: if
                request.time < timestamp.date(2024, 5, 23);
            }
        }
        }
    ```
- Setup environment variables:
  - <table>
        <tr>
            <th>Variable</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_API_KEY</td>
            <td>AIzaSy.....</td>
            <td>Firebase API Key</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_AUTH_DOMAIN</td>
            <td>chatappfirebasetd.firebaseapp.com</td>
            <td>Firebase Auth Domain</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_PROJECT_ID</td>
            <td>chatappfirebasetd</td>
            <td>Firebase Project ID</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_STORAGE_BUCKET</td>
            <td>chatappfirebasetd.appspot.com</td>
            <td>AAAAAAA</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_MESSAGE_SEND_ID</td>
            <td>27940.....</td>
            <td>Firebase Message Send ID</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_APP_ID</td>
            <td>1:27940....:web:8ad9....</td>
            <td>Firebase App ID</td>
        </tr>                          
                                                  
    </table>
- Run the application `npm run start`

# Functionalities
- User Authentication:
    <table>
        <tr>
            <td><img src="./screenshots/user_authentication_1.png" alt="user_authentication_1"></td>
            <td><img src="./screenshots/user_authentication_2.png" alt="user_authentication_2"></td>
            <td><img src="./screenshots/user_authentication_3.png" alt="user_authentication_3"></td>
        </tr>
    </table>
- Search User by Email/Name, Real Time Messages, File Sharing
    <table>
        <tr>
            <td><img src="./screenshots/search_user.png" alt="search_user"></td>
            <td><img src="./screenshots/real_time_message.png" alt="real_time_message"></td>
        </tr>
    </table>

# Technologies/Libraries
- React: Web library
- Firebase Storage: Files Storage
- Firebase FireStore: NoSQL database for storing and syncing data in real-time
- SaSS: CSS preprocessor
- uuid: 128-bit ID generator



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

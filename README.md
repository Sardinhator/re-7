# re-7

## Requirements

- Gradle 8.x.x
- Java 17 
- Node
- React x

### **Project Structure**
```plaintext
my-project/
├── src/                          # Contains backend (Spring Boot) and frontend (React) together
│   ├── main/
│   │   ├── java/                 # Spring Boot backend code
│   │   │   └── com/example/app/
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       └── repository/
│   │   ├── resources/            # Spring Boot resources
│   │   │   ├── application.properties
│   │   │   ├── static/           # React build files (after npm run build)
│   │   │   └── templates/
│   │   └── frontend/             # React source code
│   │       ├── public/
│   │       ├── src/
│   │       ├── package.json
│   │       └── ...
├── pom.xml (or build.gradle)     # Spring Boot dependencies
└── README.md
```

---

### **Workflow**
1. **Backend (Spring Boot)**:
    - Develop APIs under `src/main/java/com/example/app/controller`.
    - Use `application.properties` to configure backend settings like database or CORS.

2. **Frontend (React)**:
    - Place the React app under `src/main/frontend/`.
    - During development, run React on `http://localhost:3000` and Spring Boot on `http://localhost:8080`.

3. **Frontend-Backend Integration**:
    - Use `proxy` in `package.json` to redirect API calls to the backend during development:
      ```json
      "proxy": "http://localhost:8080"
      ```

4. **Building for Production**:
    - Build the React app:
      ```bash
      cd src/main/frontend
      npm run build
      ```
    - Copy the React `build/` directory to `src/main/resources/static/`:
      ```bash
      cp -R build/* ../resources/static/
      ```

5. **Run Both Together**:
    - Start Spring Boot, and it will serve the React app along with APIs from the backend.

---

### **Deployment**
For deployment, a single build artifact (JAR or WAR) will contain both the backend and the frontend:
1. Run `mvn package` (or `gradle build`) to package the app.
2. Deploy the JAR/WAR to your server (e.g., AWS EC2, Heroku).


Great choice! Vite is a modern build tool known for its speed and simplicity, making it ideal for React projects. Here’s how you can set up your React project with Vite:

---

### **Steps to Initialize a React App with Vite**

#### **1. Install Vite**
Navigate to your `frontend/` directory and run the following command to create a new Vite project:
```bash
npm create vite@latest . --template react
```

#### **2. Install Dependencies**
After the setup, install the dependencies:
```bash
npm install
```

---

### **Project Structure**
Once Vite is set up, your `frontend/` directory will look like this:
```plaintext
frontend/
├── node_modules/         # Installed dependencies
├── public/               # Public assets
├── src/                  # React source code
│   ├── App.jsx           # Main React component
│   ├── index.jsx         # Entry point for the app
│   └── ...
├── index.html            # HTML template
├── package.json          # Project configuration
├── vite.config.js        # Vite configuration
└── ...
```

---

### **3. Start the Development Server**
Run the following command to start the development server:
```bash
npm run dev
```

This will start the server on a local port (usually `http://localhost:5173`). Open this URL in your browser to see the default React app.

---

### **4. Proxy API Requests to Spring Boot**
To connect your React app with the Spring Boot backend during development, add a proxy in the `vite.config.js` file:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

Now, you can make API calls using relative paths, like:
```javascript
fetch('/api/endpoint');
```

---

### **5. Build for Production**
When you're ready to deploy your React app, run:
```bash
npm run build
```

This will generate optimized static files in the `dist/` directory.

---

### **6. Integrate with Spring Boot**
1. Copy the contents of the `dist/` directory to `src/main/resources/static/` in your Spring Boot project:
   ```bash
   cp -R dist/* ../backend/src/main/resources/static/
   ```

2. Restart the Spring Boot application. The React app will now be served from the backend.

---

**Developer Quick Start Guide**

---

### 1. Setting Up the Development Environment

To get started quickly, follow these steps to set up the project on your local machine:

#### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (v8 or later, comes with Node.js)
- **Ionic CLI**
- **Angular CLI**

#### Install Ionic CLI
```bash
npm install -g @ionic/cli
```

#### Clone the Repository
```bash
git clone <repository-url>
cd BaseClientSetup
```

#### Install Project Dependencies
```bash
npm install
```

---

### 2. Running the Application

#### Start the Development Server
```bash
ionic serve
```
This will:
- Start the local development server.
- Automatically open the app in your default browser.
- Reload the app whenever changes are made.

#### Running on a Device or Emulator
```bash
ionic capacitor run android
ionic capacitor run ios
```

Make sure to configure Android Studio or Xcode as required for your platform.

---

### 3. Building for Production

To build a production-ready version of the app:
```bash
npm run build
```
This will generate optimized files in the `www/` directory, ready for deployment.

---

### 4. Testing

#### Unit Tests
Run the unit tests:
```bash
npm run test
```

#### End-to-End (E2E) Tests
Run E2E tests:
```bash
npm run e2e
```

---

### 5. Adding New Features

#### Creating a New Page
To generate a new page using the Ionic CLI:
```bash
ionic generate page <page-name>
```
This will create a new folder under `src/app/pages/<page-name>/` with the required files.

#### Creating a New Component
To generate a reusable component:
```bash
ionic generate component <component-name>
```
This will create a new folder under `src/app/components/<component-name>/`.

---

### 6. Coding Standards

#### General Guidelines
- Use **TypeScript** for all logic and **SCSS** for styling.
- Follow **Angular best practices** for component, service, and module design.
- Use **standalone components** where possible.

#### File Naming Conventions
- **Pages**: `<page-name>.page.ts` (e.g., `home.page.ts`)
- **Components**: `<component-name>.component.ts` (e.g., `menu.component.ts`)
- **Services**: `<service-name>.service.ts` (e.g., `auth.service.ts`)

---

### 7. Helpful Commands

| Command                        | Description                                    |
|--------------------------------|------------------------------------------------|
| `ionic serve`                  | Start the development server                  |
| `npm run build`                | Build the app for production                  |
| `npm run test`                 | Run unit tests                                |
| `npm run e2e`                  | Run end-to-end tests                          |
| `ionic generate page <name>`   | Generate a new page                           |
| `ionic generate component <name>` | Generate a reusable component                 |

---

### 8. Key Files and Directories

| File/Directory               | Purpose                                            |
|------------------------------|----------------------------------------------------|
| `src/app/components`         | Shared reusable components                         |
| `src/app/pages`              | Application pages                                  |
| `src/app/services`           | Application services (business logic, API calls)   |
| `src/environments`           | Environment-specific configuration files           |
| `src/assets`                 | Static assets (images, fonts, etc.)               |
| `global.scss`                | Global styles                                      |

---

### 9. Contact Information
For any questions or assistance, please contact the project maintainer:
- **Name**: [Your Name]
- **Email**: [Your Email]
- **Slack/Teams**: [Your Workspace Info]

Happy coding!


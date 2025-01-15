**Project Architecture Guide**

---

### 1. Overview of the Project Architecture

This project is built using **Ionic with Angular**, leveraging standalone components where possible to ensure modularity, maintainability, and performance. Below is a breakdown of the project’s key architectural components and structure:

---

### 2. Project Directory Structure

The project follows a modular directory structure to promote separation of concerns and ensure easy navigation for developers:

```
src/
├── app/
│   ├── components/       // Shared UI components
│   │   ├── footer/       // Footer component
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.scss
│   │   │   └── footer.component.ts
│   │   ├── header/       // Header component
│   │   │   ├── header.component.html
│   │   │   ├── header.component.scss
│   │   │   └── header.component.ts
│   │   └── menu/         // Menu component
│   │       ├── menu.component.html
│   │       ├── menu.component.scss
│   │       └── menu.component.ts
│   ├── pages/            // Feature pages
│   │   ├── dashboard/    // Dashboard feature
│   │   │   ├── dashboard.page.html
│   │   │   ├── dashboard.page.scss
│   │   │   ├── dashboard.page.ts
│   │   │   └── dashboard-routing.module.ts
│   │   ├── home/         // Home feature
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   └── home.page.ts
│   │   └── login/        // Login feature
│   │       ├── login.page.html
│   │       ├── login.page.scss
│   │       └── login.page.ts
│   ├── services/         // Business logic and services
│   │   └── library-menu.service.ts
│   ├── shared/           // Shared utilities and modules
│   │   ├── shared.module.ts
│   │   └── directives/
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app-routing.module.ts
│   └── main.ts
├── assets/               // Static files
├── environments/         // Environment configurations
│   ├── environment.ts
│   └── environment.prod.ts
└── styles/               // Global styles
    └── global.scss
```

---

### 3. Key Components of the Architecture

#### 3.1 Components

**Shared Components** (in `components/`):
- Components like `footer`, `header`, and `menu` are reusable across multiple pages.
- These components are declared as **standalone components** to ensure they are self-contained and easily importable.

**Feature-Specific Components** (in `pages/`):
- Each feature page (e.g., `dashboard`, `home`, `login`) is isolated with its own HTML, SCSS, and TypeScript files.
- Routing for each feature is defined in `*-routing.module.ts` files.

---

#### 3.2 Services

All business logic and API calls are handled in the `services/` folder. For example, `library-menu.service.ts` manages menu-related logic. Services follow the **singleton pattern** and are injected using Angular’s dependency injection.

---

#### 3.3 Shared Module

The `shared/` folder contains reusable utilities, directives, and a `shared.module.ts` that exports commonly used Angular and Ionic modules (e.g., `FormsModule`, `ReactiveFormsModule`, `IonicModule`).

---

#### 3.4 Routing

Routing is configured in `app-routing.module.ts` using **lazy loading** to load feature pages only when needed. For example:
```typescript
const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  }
];
```

---

### 4. Standalone Components

This project uses **Angular standalone components** to minimize module dependencies. Each standalone component imports its own required modules. Example:

```typescript
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {}
```

---

### 5. Coding Standards

- **Consistent Naming Conventions**: Use `*.component.ts` for shared components and `*.page.ts` for feature pages.
- **Lazy Loading**: Ensure all feature modules are lazily loaded.
- **Modularity**: Minimize coupling between modules and use shared services for common logic.
- **SCSS for Styling**: Use SCSS for styles and ensure consistent use of global variables (e.g., colors, font sizes).

---

### 6. Developer Workflow

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd BaseClientSetup
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   ionic serve
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Testing**:
   ```bash
   npm run test
   ```

---

### 7. Key Tools and Configurations

- **Angular CLI**: Handles builds, serves, and testing.
- **Ionic CLI**: For serving and managing Ionic components.
- **Capacitor**: For accessing native device features.
- **Browserslist**: For managing browser compatibility (defined in `.browserslistrc`).

---

### 8. Next Steps for New Developers

- Familiarize yourself with the directory structure.
- Review existing services and components.
- Use the provided routing and shared modules to add new features.

---

This document should serve as a comprehensive guide to understanding and extending the project.


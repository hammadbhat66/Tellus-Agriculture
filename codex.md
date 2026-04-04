# Codex AI Notes for Tellus-Agriculture (React Native)

This file documents the project structure, current implementation status, and important workflows for contributors and AI assistants.

## Project Summary

- **Project**: Tellus-Agriculture
- **Framework**: React Native 0.84.1 with TypeScript 5.8.3
- **Platforms**: iOS + Android
- **State Management**: Redux Toolkit 2.x with Redux-Persist
- **Navigation**: React Navigation 7.x (Native Stack + Bottom Tabs)
- **HTTP Client**: Axios with interceptors
- **Storage**: AsyncStorage
- **Debugging**: Reactotron
- **Testing**: Jest + React Test Renderer
- **App Shell**: `App.tsx`, `index.js`

## Current Implementation Status

### ✅ **Completed (Boilerplate & Infrastructure)**
- Project structure and organization
- Dependencies and modern libraries
- TypeScript, Babel, Metro configuration
- Redux store with persistence and Reactotron
- Navigation routing (auth/unauth conditional)
- iOS/Android build configurations
- SplashScreen with animations
- Testing framework setup
- Basic theme colors

### ⚠️ **Partially Implemented (Scaffolded)**
- Auth flow (endpoints defined, reducer empty, interceptors commented)
- API layer (axios config, endpoints for auth only)
- Screen components (placeholders with basic text)
- Theme system (colors only, no typography/spacing)

### 🔴 **Not Implemented**
- Shared UI components (buttons, inputs, modals)
- Custom hooks
- Form validation
- Error handling system
- Loading states
- Business logic for screens (Herd, Event, Inventory, Insight, AddNewCow)

## Key Folders & Files

### Root Level
- `App.tsx` - Main app component with Redux Provider and Navigation
- `index.js` - React Native entry point
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel presets
- `metro.config.js` - Metro bundler config
- `jest.config.js` - Testing configuration
- `app.json` - App manifest

### `src/`
- **`api/`** - API layer
  - `axiosConfig.js` - Axios instance with interceptors (token handling commented)
  - `apiEndpoints.js` - API endpoint definitions (auth only)
  - `urlFuncs.js` - Generic HTTP wrapper functions
- **`assets/`** - Static assets
  - `fonts/` - Custom fonts (empty)
  - `icons/` - Icon assets (empty)
  - `images/` - Image assets (logo.png, images.tsx)
- **`hooks/`** - Custom React hooks (empty)
- **`redux/`** - State management
  - `auth.tsx` - Auth slice (interfaces defined, actions empty)
  - `combineReducers.js` - Root reducer
- **`router/`** - Navigation configuration
  - `_screenNames.tsx` - Screen name constants
  - `AuthRoutes.tsx` - Authenticated user routes (Tab navigator)
  - `router.tsx` - Main router with auth/unauth conditional
  - `UnauthRoutes.tsx` - Unauthenticated routes (Splash → GettingStarted)
- **`screens/`** - UI screens
  - `SplashScreen/` - Animated splash with logo
  - `GettingStarted/` - Placeholder screen
  - `Herd/`, `Event/`, `Inventory/`, `Insight/` - Main app screens (placeholders)
  - `AddNewCow/` - Modal screen (placeholder)
- **`sharedComponents/`** - Reusable UI components (empty)
- **`utils/`** - Utilities and constants
  - `apiConfig.tsx` - API configuration (localhost URL)
  - `constants.js` - App constants (empty)
  - `helperFunctions.tsx` - Helper functions (ErrorType interface only)
  - `theme/colors.tsx` - Color palette

### Platform-Specific
- **`android/`** - Android build configuration
- **`ios/`** - iOS build configuration and Xcode project

### Other
- **`store/`** - Redux store configuration
- **`__tests__/`** - Test files
- **`vendor/`** - Third-party bundles

## Important Workflows & Commands

### Development
```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run tests
npm test

# Lint code
npm run lint
```

### Debugging
- Use Reactotron for Redux debugging (configured in store.js)
- Check console logs in Metro terminal
- Use React Native Debugger for advanced debugging

### API Configuration
- Current API URL: `http://localhost:3000/api/v1/` (development only)
- Auth endpoints defined but token handling incomplete
- Axios interceptors need completion for token injection and refresh

## Common Questions & Locations

### Auth Flow
- **Where is auth state managed?** → `src/redux/auth.tsx` (scaffolded, needs implementation)
- **Where are auth API calls?** → `src/api/apiEndpoints.js` (SIGN_IN_PHONE, VERIFY_PHONE, etc.)
- **Where is token handling?** → `src/api/axiosConfig.js` (commented out, needs completion)

### Navigation
- **How to add a new screen?** → Add to `src/router/_screenNames.tsx`, create component in `src/screens/`, update routes in `AuthRoutes.tsx` or `UnauthRoutes.tsx`
- **Where is routing logic?** → `src/router/router.tsx` (conditional based on `auth.loggedIn`)

### State Management
- **How to add new Redux slice?** → Create in `src/redux/`, add to `combineReducers.js`
- **Where is store configured?** → `store/store.js` (Redux Toolkit + Persist + Reactotron)

### Styling & Theme
- **Where are colors defined?** → `src/utils/theme/colors.tsx`
- **How to add theme properties?** → Extend theme structure (currently minimal)

### API Integration
- **How to add new endpoints?** → Add to `src/api/apiEndpoints.js`, use in components
- **Where is HTTP client configured?** → `src/api/axiosConfig.js`

## Next Steps & Priorities

1. **Complete Auth Flow**: Implement token handling, login/logout logic, and auth state management
2. **Build UI Components**: Create reusable buttons, inputs, modals, and form components
3. **Implement Screen Logic**: Add business logic to placeholder screens
4. **API Integration**: Add endpoints for Herd, Event, Inventory, Insight features
5. **Error Handling**: Add global error boundaries and user-friendly error states
6. **Environment Config**: Set up .env files for different environments (dev/staging/prod)
7. **Testing**: Add comprehensive tests for components, reducers, and API calls

## Architecture Notes

- Uses Redux Toolkit for modern Redux patterns
- Navigation follows authentication-based conditional routing
- API layer uses Axios with centralized configuration
- Theme system is minimal and needs expansion
- Testing framework is set up but needs more test coverage
- Follows React Native best practices with TypeScript for type safety


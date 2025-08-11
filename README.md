# RHP Components

A modern React component library built with TypeScript, powered by the **Augment Design System**. This comprehensive design system provides accessible, responsive, and consistent UI components designed for building high-quality web applications across enterprise, mobile, and web contexts.

## 🎯 Design System Vision

The Augment Design System is the foundation for building cohesive, high-quality front-end experiences. It empowers teams to deliver efficient, accessible, and consistent user interfaces that align seamlessly with design principles and support evolving application needs. More than just a component library, Augment represents a way of working that brings design and development together, streamlines implementation, and reduces long-term maintenance costs.

## ✨ Key Features

- 🎨 **Design System-Aligned**: Built on principles and tokens defined by the Augment design system
- ♿ **WCAG 2.2 AA Compliant**: Components follow accessibility best practices and legal requirements
- 🧱 **Component-Driven Architecture**: Designed for composition and reuse across applications
- 🧪 **Storybook Integration**: Interactive documentation with component playground
- ⚙️ **Design Token System**: Comprehensive theming with CSS custom properties
- 📱 **Multi-Context Support**: Optimized for enterprise, mobile, and modern web applications
- 🔧 **TypeScript First**: Full TypeScript support with strict type checking
- 🚀 **Modern Build System**: Built with Vite for fast development and optimized production
- 🎭 **Pattern Library**: Proven solutions for common interface challenges
- 🔄 **Figma Integration**: Direct alignment between design and code implementation

## 🏗️ Design System Principles

### What is a Design System?

Design Systems bring order and cohesion to digital products. They help protect the brand, elevate the user experience, and increase the speed and efficiency of designing and building products. Like LEGO bricks that allow construction of diverse models through imagination, software components enable various builds with guidelines ensuring consistent, high-quality results.

### Core Benefits

#### **Consistency Between Design and Code**
Components are built directly from Figma tokens, layouts, and patterns, ensuring what designers provide is visually accurate and implementation-ready.

#### **Shared Language and Efficiency**
Cross-functional teams reduce handover friction, speed up design reviews, and avoid redundant solutions through common patterns and vocabulary.

#### **Accessibility and Standards Built-In**
Keyboard support, dark mode, RTL, WCAG compliance, and responsiveness are engineered into every component.

#### **Lower Maintenance Cost**
Supported system means fewer one-off fixes, less custom CSS, and smaller surface area for regressions.

#### **Strategic Alignment**
Using the design system positions projects for maintainability, support, and future growth with better upgrade paths and collaboration opportunities.

### Design Principles

#### **Clarity**
Remove ambiguity. Make it easy to understand what's happening and what to do next.

#### **Efficiency**
Support the task. Reduce unnecessary steps and anticipate user needs.

#### **Consistency**
Use the same solution for the same problem. Avoid unnecessary variation.

#### **Craft**
Be intentional. Design with care and respect for people's time and focus.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

Install the library in your React project:

```bash
npm install @rhp/rhp-components
# or
yarn add @rhp/rhp-components
# or
pnpm add @rhp/rhp-components
```

### Basic Usage

```tsx
import React from 'react';
import { Button, TextField, Card, ThemeProvider } from '@rhp/rhp-components';
import '@rhp/rhp-components/dist/style.css';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <TextField label="Enter your name" placeholder="John Doe" />
        <Button variant="primary">Submit</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;
```

### Development Setup

For contributing or local development:

```bash
# Clone the repository
git clone <repository-url>
cd rhp-components

# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Run tests
npm test

# Build the library
npm run build
```

## 📁 Project Structure

```
rhp-components/
├── src/
│   ├── components/          # React components with individual folders
│   │   ├── Button/         # Button component with tests and stories
│   │   ├── TextField/      # TextField component with tests and stories
│   │   └── ...            # Other components following same structure
│   ├── theme/              # Theme configuration and providers
│   ├── styles/             # Design system styles and tokens
│   │   ├── css/           # Generated CSS tokens
│   │   ├── icons/         # Icon system
│   │   └── settings.scss  # Main SCSS entry point
│   ├── tokens/             # Design system tokens
│   └── index.ts            # Main library entry point
├── .storybook/             # Storybook configuration
├── dist/                   # Built library files (generated)
├── types/                  # TypeScript declarations (generated)
└── storybook-static/       # Built Storybook documentation (generated)
```

## 🧩 Available Components

The library provides 50+ React components organized by category:

### Layout & Structure
- **Box**: Flexible container with spacing and layout props
- **Container**: Responsive container with max-width constraints
- **Row/Col**: Grid system for responsive layouts
- **Spacer**: Flexible spacing component
- **Divider**: Visual separator with customizable styles

### Navigation
- **AppBar**: Application header with navigation elements
- **BottomNavigation**: Mobile-friendly bottom navigation
- **Breadcrumbs**: Hierarchical navigation trail
- **Navigation**: Sidebar navigation component
- **MenuBar**: Horizontal menu with dropdown support

### Form Controls
- **Button**: Primary action button with variants
- **IconButton**: Compact button with icon
- **TextField**: Text input with validation and styling
- **TextArea**: Multi-line text input
- **Select**: Dropdown selection component
- **Checkbox**: Boolean input with indeterminate state
- **Radio**: Single selection from options
- **Switch**: Toggle switch for boolean values
- **Slider**: Range input for numeric values

### Data Display
- **Table**: Basic table component
- **DataTable**: Advanced table with sorting, filtering, pagination
- **Card**: Content container with header, body, actions
- **Chip**: Compact element for tags or filters
- **Tag**: Labeled element for categorization
- **Avatar**: User profile image or initials
- **Status**: Status indicator with color coding

### Feedback & Overlays
- **AlertBadge**: Notification badge with count
- **AlertModal**: Modal dialog for confirmations
- **Toast**: Temporary notification messages
- **Notification**: Persistent notification component
- **Modal**: Overlay dialog for content
- **Dialog**: Confirmation and form dialogs
- **Drawer**: Slide-out panel for navigation or content
- **Popover**: Contextual overlay for additional information
- **Tooltip**: Hover information display

### Specialized Components
- **DatePicker**: Date selection component
- **DateTimePicker**: Date and time selection
- **ColorPicker**: Color selection interface
- **FileInput**: File upload component
- **ProgressLinear**: Linear progress indicator
- **ProgressCircular**: Circular progress indicator
- **SkeletonLoader**: Loading placeholder component

## 🎨 Usage Guide

### Basic Component Usage

```tsx
import { Button, TextField, Card } from '@rhp/rhp-components';

function ContactForm() {
  return (
    <Card>
      <Card.Title>Contact Information</Card.Title>
      <Card.Text>
        <TextField
          label="Full Name"
          placeholder="Enter your name"
          required
        />
        <TextField
          label="Email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </Card.Text>
      <Card.Actions>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </Card.Actions>
    </Card>
  );
}
```

### Theme Provider Setup

Wrap your application with the ThemeProvider to enable design system theming:

```tsx
import { ThemeProvider } from '@rhp/rhp-components';
import '@rhp/rhp-components/dist/style.css';

function App() {
  return (
    <ThemeProvider theme="light"> {/* or "dark" */}
      <YourApplication />
    </ThemeProvider>
  );
}
```

### Component Composition

Components are designed for composition and flexibility:

```tsx
import { Box, Button, Icon } from '@rhp/rhp-components';

function ActionPanel() {
  return (
    <Box display="flex" gap="md" padding="lg">
      <Button variant="primary" size="lg">
        <Icon name="a-icon-plus" />
        Add Item
      </Button>
      <Button variant="secondary" size="lg">
        <Icon name="a-icon-edit" />
        Edit
      </Button>
    </Box>
  );
}
```

## 🎨 Design System & Customization

### Design Tokens

Design tokens are technology-agnostic variables that organize and consolidate UI properties like color, spacing, and typography. They provide flexibility and control over fundamental building blocks, ensuring designers and developers share a common language.

#### **Why Design Tokens Matter**

- **Single Source of Truth**: Unified approach across design and development
- **Easy Updates**: Push style changes through entire product suite
- **Consistency**: Establish reusable design decisions
- **Trusted Experience**: Create consistent user experience

#### **Token Structure**

**Primitive Tokens** - Core values defining available style options:
```css
/* Base color values */
--a-color-blue-500: #0066cc;
--a-color-gray-900: #1a1a1a;

/* Base spacing values */
--a-space-4: 4px;
--a-space-8: 8px;
--a-space-16: 16px;
```

**Semantic Tokens** - Applied values for specific use cases:
```css
/* Color tokens */
--a-primary-bg-default: var(--a-color-blue-500);
--a-primary-txt-default: #ffffff;
--a-neutral-bg-default: #ffffff;
--a-neutral-txt-default: var(--a-color-gray-900);

/* Typography tokens */
--a-text-md-default: 400 16px/24px Inter, sans-serif;
--a-text-lg-strong: 600 18px/28px Inter, sans-serif;

/* Spacing tokens */
--a-spacing-xs: var(--a-space-4);
--a-spacing-sm: var(--a-space-8);
--a-spacing-md: var(--a-space-16);
--a-spacing-lg: 24px;

/* Elevation tokens */
--a-elevation-100: 0 1px 3px rgba(0, 0, 0, 0.12);
--a-elevation-200: 0 4px 6px rgba(0, 0, 0, 0.12);
```

#### **Token Modes**

Modes allow the same token to have different values based on context:

```css
/* Light mode */
:root {
  --a-neutral-bg-default: #ffffff;
  --a-neutral-txt-default: #1a1a1a;
}

/* Dark mode */
:root[data-theme="theme-dark"] {
  --a-neutral-bg-default: #1a1a1a;
  --a-neutral-txt-default: #ffffff;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  :root {
    --a-spacing-lg: 16px; /* Reduced spacing on mobile */
  }
}
```

### Custom Theming

Override design tokens to customize the appearance:

```css
/* Custom theme overrides */
:root {
  --a-primary-bg-default: #ff6b35;
  --a-primary-bg-hover: #e55a2b;
  --a-primary-txt-default: #ffffff;
}

/* Dark theme support */
:root[data-theme="theme-dark"] {
  --a-neutral-bg-default: #1a1a1a;
  --a-neutral-txt-default: #ffffff;
}
```

### Utility Classes

The library provides utility classes for common styling needs:

```tsx
// Using utility classes
<div className="rhp-bg-primary rhp-text-primary rhp-elevation-200">
  <p className="rhp-typography-body">Styled with utility classes</p>
</div>
```

### Component Styling

Components use BEM methodology for predictable CSS classes:

```css
/* Button component classes */
.rhp-button { /* Base button styles */ }
.rhp-button--primary { /* Primary variant */ }
.rhp-button--large { /* Large size */ }
.rhp-button__icon { /* Icon within button */ }
```

### SCSS Customization

For advanced customization, you can import and modify SCSS files:

```scss
// Import design tokens
@use '@rhp/rhp-components/src/styles/settings.scss';

// Override variables before importing components
$custom-primary-color: #ff6b35;

// Import specific component styles
@use '@rhp/rhp-components/src/components/Button/button.scss';
```

## ♿ Accessibility & Compliance

### Accessibility Standards

The Augment Design System adheres to **WCAG 2.2 Level AA** standards and supports compliance with international accessibility laws including:

- **Australia**: Disability Discrimination Act (DDA)
- **Europe**: European Accessibility Act (EAA)
- **USA**: Americans with Disabilities Act (ADA)

### Built-in Accessibility Features

- **Keyboard Navigation**: All interactive elements support keyboard access
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Color Contrast**: Meets WCAG AA contrast requirements
- **Focus Management**: Visible focus indicators and logical tab order
- **Responsive Design**: Works across devices and screen sizes
- **Dark Mode Support**: Accessible color schemes for all themes

### Accessibility Best Practices

When using components, follow these guidelines:

```tsx
// ✅ Good: Proper labeling and semantic structure
<form>
  <TextField
    label="Email Address"
    type="email"
    required
    aria-describedby="email-help"
  />
  <div id="email-help">We'll never share your email</div>
  <Button type="submit">Submit Form</Button>
</form>

// ✅ Good: Accessible button with icon
<Button aria-label="Delete item">
  <Icon name="a-icon-delete" aria-hidden="true" />
</Button>

// ❌ Avoid: Missing labels or context
<Button><Icon name="a-icon-delete" /></Button>
```

### Testing Accessibility

The library includes built-in accessibility testing:

```bash
# Run accessibility tests
npm run test:a11y

# Test with screen readers
npm run test:screen-reader
```

### Accessibility Resources

- **Component Documentation**: Each component includes accessibility guidelines
- **Storybook A11y Addon**: Real-time accessibility checking
- **Testing Tools**: Automated and manual testing recommendations
- **WCAG Guidelines**: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

## 🧪 Testing

The project uses Vitest for testing with React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test -- --coverage

# Run specific component tests
npm test Button
```

### Writing Tests

Components include comprehensive test suites:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@rhp/rhp-components';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📚 Storybook Documentation

Storybook provides interactive documentation and component playground:

```bash
# Start development server
npm run storybook

# Build for production
npm run build-storybook
```

Visit `http://localhost:7007` to explore:
- **Component Gallery**: Browse all available components
- **Interactive Controls**: Test component props in real-time
- **Documentation**: Usage examples and API reference
- **Accessibility Testing**: Built-in a11y checks
- **Design Tokens**: Visual reference for colors, typography, spacing

## � Design Patterns & Usage

### What are Patterns?

Patterns are opinionated solutions to common interface or interaction problems. While components provide building blocks (props, slots, features), patterns show how to apply them in consistent, purposeful ways. They combine layout, behavior, and accessibility into reusable approaches that help teams solve familiar challenges consistently.

### Pattern Categories

#### **Enterprise Patterns**
For high-density desktop applications with complex data management:

```tsx
// Enterprise data table pattern
<DataTable
  data={orders}
  columns={enterpriseColumns}
  density="compact"
  pagination={{ pageSize: 50 }}
  sorting={{ multiple: true }}
  filtering={{ advanced: true }}
/>
```

#### **Mobile Patterns**
Optimized for touch interfaces and smaller screens:

```tsx
// Mobile navigation pattern
<BottomNavigation>
  <BottomNavigation.Item icon="a-icon-home" label="Home" />
  <BottomNavigation.Item icon="a-icon-search" label="Search" />
  <BottomNavigation.Item icon="a-icon-profile" label="Profile" />
</BottomNavigation>
```

#### **Web Patterns**
Modern, responsive applications showcasing full visual capabilities:

```tsx
// Modern card layout pattern
<Container maxWidth="lg">
  <Row spacing="lg">
    <Col xs={12} md={6} lg={4}>
      <Card elevation="200">
        <Card.Media src={image} alt="Product" />
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Description</Card.Text>
        <Card.Actions>
          <Button variant="primary">Add to Cart</Button>
        </Card.Actions>
      </Card>
    </Col>
  </Row>
</Container>
```

### Common Patterns

#### **Form Patterns**

```tsx
// Standard form pattern with validation
<Form onSubmit={handleSubmit}>
  <Row spacing="md">
    <Col xs={12} md={6}>
      <TextField
        label="First Name"
        required
        error={errors.firstName}
      />
    </Col>
    <Col xs={12} md={6}>
      <TextField
        label="Last Name"
        required
        error={errors.lastName}
      />
    </Col>
  </Row>
  <TextField
    label="Email"
    type="email"
    required
    error={errors.email}
  />
  <Row spacing="sm" justify="end">
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary" type="submit">Save</Button>
  </Row>
</Form>
```

#### **Modal Patterns**

```tsx
// Confirmation modal pattern
<AlertModal
  open={showDelete}
  title="Delete Item"
  message="Are you sure you want to delete this item? This action cannot be undone."
  severity="error"
  onConfirm={handleDelete}
  onCancel={() => setShowDelete(false)}
  confirmText="Delete"
  cancelText="Cancel"
/>
```

#### **Data Display Patterns**

```tsx
// Status indicator pattern
<Box display="flex" alignItems="center" gap="sm">
  <Status variant="success" />
  <span>Order Completed</span>
  <Tooltip content="Order was delivered successfully">
    <Icon name="a-icon-info" />
  </Tooltip>
</Box>
```

### Pattern Guidelines

- **Use existing patterns** before creating new ones
- **Follow accessibility standards** in all pattern implementations
- **Test patterns** across different screen sizes and devices
- **Document variations** for different contexts (enterprise, mobile, web)
- **Maintain consistency** with design system principles

## �🏗️ Architecture & Development

### Component Structure

Each component follows a standardized structure:

```
src/components/Button/
├── Button.tsx              # Main component implementation
├── button.scss            # Component-specific styles
├── Button.stories.tsx     # Storybook stories
├── __tests__/
│   └── Button.test.tsx    # Component tests
└── index.ts               # Export definitions
```

### Design Principles

Based on architectural decisions documented in the original Vue library:

1. **Composition API Pattern**: Components use React hooks for state management
2. **TypeScript First**: Full TypeScript support with strict type checking
3. **Accessibility by Default**: WCAG compliance and screen reader support
4. **BEM Methodology**: Predictable CSS class naming for styling
5. **Design Token System**: Consistent spacing, colors, and typography
6. **Component Isolation**: Each component is self-contained and testable

### Development Guidelines

- **Naming Convention**: Use `rhp-` prefix for CSS classes
- **Props Interface**: Define comprehensive TypeScript interfaces
- **Accessibility**: Include ARIA attributes and keyboard navigation
- **Testing**: Write unit tests for all component functionality
- **Documentation**: Create Storybook stories with examples

## 🔧 Build Configuration

### TypeScript

Configured with strict type checking and React JSX support:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

### Vite Build System

Optimized for library distribution:

- **Dual Format**: CommonJS and ES Module outputs
- **Tree Shaking**: Optimized bundle size
- **Source Maps**: Debug support in development
- **External Dependencies**: React/ReactDOM marked as external
- **CSS Extraction**: Separate CSS bundle for styling

### Modern SCSS Architecture

- **Design Tokens**: CSS custom properties for theming
- **Modern Syntax**: Uses `@use` instead of deprecated `@import`
- **Modular Structure**: Component-specific SCSS files
- **Utility Classes**: Pre-built classes for common patterns

## 📦 Distribution & Usage

### Package Exports

The library provides multiple entry points:

```json
{
  "main": "./dist/cjs/index.cjs",
  "module": "./dist/esm/index.mjs",
  "types": "./dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.mjs",
      "require": "./dist/cjs/index.cjs",
      "types": "./dist/types/index.d.ts"
    },
    "./dist/style.css": "./dist/style.css"
  }
}
```

### Integration Examples

#### Next.js Integration

```tsx
// pages/_app.tsx
import '@rhp/rhp-components/dist/style.css';
import { ThemeProvider } from '@rhp/rhp-components';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

#### Vite/React Integration

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@rhp/rhp-components';
import '@rhp/rhp-components/dist/style.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

#### Webpack Integration

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

## 🤝 Contributing 

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork the repository** and clone your fork
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run storybook`
4. **Run tests**: `npm test`

### Development Workflow

1. **Create a feature branch**: `git checkout -b feature/new-component`
2. **Follow naming conventions**: Use `rhp-` prefix for CSS classes
3. **Write comprehensive tests**: Include unit tests for all functionality
4. **Document in Storybook**: Create stories with examples and controls
5. **Ensure accessibility**: Test with screen readers and keyboard navigation
6. **Run the full test suite**: `npm test && npm run typecheck`
7. **Submit a pull request** with detailed description

### Code Standards

- **TypeScript**: Use strict typing and interfaces
- **Testing**: Achieve >90% test coverage
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Performance**: Optimize for bundle size and runtime performance
- **Documentation**: Include JSDoc comments and Storybook stories

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Unit tests written and passing
- [ ] Storybook stories created
- [ ] Accessibility tested
- [ ] CSS follows BEM methodology
- [ ] Design tokens used for styling
- [ ] Responsive design implemented
- [ ] Documentation updated

## 📄 License

This project is licensed under the terms specified in the package.json file.

## 🆘 Support & Resources

### Documentation
- **Storybook**: Interactive component documentation
- **TypeScript**: Full type definitions included
- **Examples**: Real-world usage patterns in stories

### Getting Help
1. **Check Storybook documentation** for component APIs
2. **Review test files** for usage examples
3. **Search existing issues** in the repository
4. **Create detailed bug reports** with reproduction steps

### Community
- Follow accessibility best practices
- Contribute to component improvements
- Share feedback and suggestions
- Help maintain comprehensive documentation
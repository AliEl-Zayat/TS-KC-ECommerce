# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
ecommerce-front
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ vite.svg
├─ src
│  ├─ .prettierrc
│  ├─ assets
│  │  └─ svg
│  │     └─ cart.svg
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Footer
│  │  │  │  ├─ Footer.tsx
│  │  │  │  └─ styles.module.css
│  │  │  ├─ GridList
│  │  │  │  └─ GridList.tsx
│  │  │  ├─ Header
│  │  │  │  ├─ Header.tsx
│  │  │  │  └─ styles.module.css
│  │  │  ├─ index.ts
│  │  │  └─ layout
│  │  ├─ eCommerce
│  │  │  ├─ Category
│  │  │  │  ├─ Category.tsx
│  │  │  │  └─ styles.module.css
│  │  │  ├─ HeaderBasket
│  │  │  │  ├─ HeaderBasket.tsx
│  │  │  │  └─ styles.module.css
│  │  │  ├─ Product
│  │  │  │  ├─ Product.tsx
│  │  │  │  └─ styles.module.css
│  │  │  └─ index.ts
│  │  ├─ feedback
│  │  │  └─ Loading
│  │  │     └─ Loading.tsx
│  │  ├─ forms
│  │  └─ index.ts
│  ├─ hooks
│  ├─ layouts
│  │  ├─ MainLayout
│  │  │  ├─ MainLayout.tsx
│  │  │  └─ styles.module.css
│  │  └─ index.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ AboutUs
│  │  │  └─ AboutUs.tsx
│  │  ├─ Categories
│  │  │  └─ Categories.tsx
│  │  ├─ Error
│  │  │  └─ Error.tsx
│  │  ├─ Home
│  │  │  └─ Home.tsx
│  │  ├─ Login
│  │  │  └─ Login.tsx
│  │  ├─ Products
│  │  │  └─ Products.tsx
│  │  ├─ Register
│  │  │  └─ Register.tsx
│  │  └─ index.ts
│  ├─ routes
│  │  └─ AppRouter.tsx
│  ├─ services
│  ├─ store
│  │  ├─ categories
│  │  │  ├─ act
│  │  │  │  └─ actGetCategories.ts
│  │  │  └─ categoriesSlice.ts
│  │  ├─ hooks.ts
│  │  ├─ index.ts
│  │  └─ products
│  │     ├─ act
│  │     │  └─ actGetProductsByCatPrefix.ts
│  │     └─ productsSlice.ts
│  ├─ styles
│  │  └─ global.css
│  ├─ types
│  │  ├─ category.ts
│  │  ├─ product.ts
│  │  ├─ shared.ts
│  │  └─ typing.d.ts
│  └─ utils
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
[![Latest Stable Version](https://img.shields.io/npm/v/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)
[![Total Download](https://img.shields.io/npm/dt/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)
[![License](https://img.shields.io/npm/l/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)

# vue-no-autocomplete

A lightweight Vue 3 directive to disable browser autocomplete/autofill for inputs and components in Single Page Applications (SPA).  
Works with Chrome, Firefox, Edge, and other modern browsers where `autocomplete="off"` might be ignored.

## ✨ Features
- 🚫 Prevents browser autocomplete/autofill on inputs and textareas.
- 🎯 Works for single inputs **or** entire components.
- ⚡ Tiny size, no dependencies.
- 🛠 Easy to install as a Vue plugin or per-component directive.

## 📦 Installation

```bash
npm install vue-no-autocomplete
# or
yarn add vue-no-autocomplete
````

## 🔌 Usage

```js
import { createApp } from 'vue';
import App from './App.vue';
import NoAutocomplete from 'vue-no-autocomplete';

const app = createApp(App);
app.use(NoAutocomplete);
app.mount('#app');
```

```vue
<template>
  <input v-no-autocomplete placeholder="No autofill here" />
</template>
```

## 🎯 How It Works

Instead of relying on `autocomplete="off"`, this directive temporarily sets the field to `readonly` and removes the attribute shortly after mount.
This prevents modern browsers from triggering autofill/autocomplete in most cases.

## 📝 Notes

* Applies to `<input>` and `<textarea>` elements.
* When used on a parent element, it affects all nested inputs/textareas.
* Does **not** guarantee 100% autofill prevention in future browser updates.

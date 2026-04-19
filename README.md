[![Latest Stable Version](https://img.shields.io/npm/v/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)
[![Total Download](https://img.shields.io/npm/dt/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)
[![License](https://img.shields.io/npm/l/vue-no-autocomplete)](https://github.com/thebinoculars/vue-no-autocomplete)

# Vue No Autocomplete

A Vue 3 directive to disable browser autocomplete/autofill for inputs.

## ✨ Features

- 🚫 Prevents browser autocomplete/autofill on inputs and textareas
- 🎯 Works for single inputs **or** entire components/forms
- 🔄 Supports dynamic content (v-for, async components)
- 🧩 Compatible with UI component libraries (Element Plus, Vuetify, Quasar, etc.)
- 🌐 SSR-friendly (Nuxt.js, Next.js)
- ⚡ Tiny size (~1KB), no dependencies
- 🛠 Easy to install as a Vue plugin

## 📦 Installation

```bash
npm install vue-no-autocomplete
# or
yarn add vue-no-autocomplete
```

## 🔌 Usage

### Global Registration

```js
import { createApp } from 'vue';
import App from './App.vue';
import NoAutocomplete from 'vue-no-autocomplete';

const app = createApp(App);
app.use(NoAutocomplete);
app.mount('#app');
```

### Recommended: Apply to Input or Input Component

Apply the directive directly to each `<input>` element or input component:

```vue
<template>
  <!-- Native input -->
  <input v-no-autocomplete v-model="email" placeholder="Email" />
  
  <!-- UI component input (Element Plus example) -->
  <el-input v-no-autocomplete v-model="username" placeholder="Username" />
  <el-input v-no-autocomplete v-model="password" type="password" placeholder="Password" />
</template>
```

### Alternative: Apply to Container (Use with Caution)

You can also apply the directive to a parent container to protect all nested inputs. This works but has performance implications:

```vue
<template>
  <div v-no-autocomplete>
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
  </div>
</template>
```

### Dynamic Lists (v-for)

For dynamic lists, apply the directive to each input:

```vue
<template>
  <div v-for="(item, index) in items" :key="index">
    <input v-no-autocomplete v-model="item.name" placeholder="Name" />
    <input v-no-autocomplete v-model="item.email" placeholder="Email" />
  </div>
</template>
```

## 🐛 Browser Support

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

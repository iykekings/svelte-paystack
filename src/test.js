import App from './App.svelte';

const app = new App({
  // @ts-ignore
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;

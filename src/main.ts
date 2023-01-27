import { createPinia } from "pinia";
import { createApp, h, provide } from "vue";

import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

import { DefaultApolloClient } from "@vue/apollo-composable";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(createPinia());
app.use(router);

app.mount("#app");

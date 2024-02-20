import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
import {Provider} from 'react-redux'
import {store} from "./app/store";

async function deferRender() {
  const {worker} = await import('./mocks/browser')

  return worker.start()
}

const ROOT_NAME = 'root'

deferRender().then(() => {
  const root = ReactDOM.createRoot(document.getElementById(ROOT_NAME))

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})



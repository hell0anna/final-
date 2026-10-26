import React from "react"
import ReactDOM from "react-dom/client"
import { I18nPlugin, locales } from "./vendor/yclients-ui/index.mjs"
import App from "./App"
import "./index.css"

const i18n = new I18nPlugin(locales["ru-RU"])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <y-core-global-provider plugins={[i18n]}>
      <App />
    </y-core-global-provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://1d665cfbdd2d036b6a3268f1aa9e37a8@o4507637483175936.ingest.us.sentry.io/4507637486649344",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration,
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect : React.useEffect,

    }),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0, 

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

'use strict'
const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

const PORT = process.env.PORT || 3000
const API_TARGET_URL = process.env.API_TARGET_URL || 'http://127.0.0.1:8000'
const DIST_DIR = path.join(__dirname, 'dist')

const app = express()

// Proxy /api/* → FastAPI backend (strip /api prefix)
app.use(
  '/api',
  createProxyMiddleware({
    target: API_TARGET_URL,
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
)

// Serve built Svelte app
app.use(express.static(DIST_DIR))

// SPA fallback — all unmatched routes return index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Reservoir Manager running at http://localhost:${PORT}`)
  console.log(`Proxying /api → ${API_TARGET_URL}`)
})

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from 'services/router'

import './styles/index.scss'

function Index() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

createRoot(document.getElementById('mount-point')!).render(<Index />)

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './styles/index.css'
import { StrictMode } from 'react'
ReactDOM.createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <RouterProvider router={routes} />
  </StrictMode>
)

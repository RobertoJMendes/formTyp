import { FormProvider } from "./contexts/FormContext"
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { FormStepPassoI } from './pages/FormStepPassoI/index.tsx'
import { FormStepPassoII } from './pages/FormStepPassoII/index.tsx'
import { FormStepPassoIII } from './pages/FormStepPassoIII/index.tsx'


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <FormStepPassoI />
    },
    {
      path:"/passo2",
      element: <FormStepPassoII />
    },
    {
      path:"/passo3",
      element: <FormStepPassoIII />
    }
])

  
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>  
  )
}

export default App


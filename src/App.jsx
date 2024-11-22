import { RouterProvider } from "react-router-dom"
import {PrimeReactProvider} from 'primereact/api'
import router from './components/layout/index'


function App() {
  

  return (
    <>
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
    </>
    
  )
}

export default App

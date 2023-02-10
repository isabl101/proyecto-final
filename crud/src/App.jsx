import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CrearProductos from './components/productos/CrearProductos'
import ListadoProducto from './components/productos/ListadoProducto'
import EditarProducto from './components/productos/EditarProducto'
import ListadoCita from './components/citas/ListadoCita'
import CrearCitas from './components/citas/CrearCitas'

const router = createBrowserRouter([
  {
    path: '/listadoProducto',
    element: <ListadoProducto />,
  },
  {
    path: '/crearProducto',
    element: <CrearProductos />,
  },
  {
    path: '/editarProducto/:id',
    element: <EditarProducto />,
  },
  {
    path: '/listadoCita',
    element: <ListadoCita />,
  },
  {
    path: '/crearCita',
    element: <CrearCitas />,
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App

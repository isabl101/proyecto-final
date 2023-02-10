import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CrearProductos from './components/productos/CrearProductos'
import ListadoProducto from './components/productos/ListadoProducto'
import EditarProducto from './components/productos/EditarProducto'
import ListadoCita from './components/citas/ListadoCita'
import CrearCitas from './components/citas/CrearCitas'
import EditarCita from './components/citas/EditarCita'

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
  },
  {
    path: '/editarCita/:id',
    element: <EditarCita />,
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

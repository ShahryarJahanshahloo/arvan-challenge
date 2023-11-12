import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layout/dashboard/DashboardLayout'
import DashboardAll from './pages/DashboardAll'
import DashboardEdit from './pages/DashboardEdit'
import DashboardNew from './pages/DashboardNew'

function App() {
  return (
    <div id='App'>
      <Routes>
        <Route path='/' element={<div className='bg-grey-1'>ok</div>} />

        <Route path='login' element={<div></div>} />
        <Route path='register' element={<div></div>} />

        <Route element={<DashboardLayout />}>
          <Route path='articles' element={<DashboardAll />} />
          <Route path='articles/edit' element={<DashboardEdit />} />
          <Route path='articles/create' element={<DashboardNew />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

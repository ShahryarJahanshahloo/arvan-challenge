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

        {/* <Route path='login' element={<About />} /> */}
        {/* <Route path='register' element={<Contact />} /> */}

        <Route element={<DashboardLayout />}>
          <Route path='dashboard/all' element={<DashboardAll />} />
          <Route path='dashboard/edit' element={<DashboardEdit />} />
          <Route path='dashboard/new' element={<DashboardNew />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

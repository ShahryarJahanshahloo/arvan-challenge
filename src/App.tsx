import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div id='App'>
      <Routes>
        <Route path='/' element={<div className='bg-grey-1'>ok</div>} />

        {/* <Route path='login' element={<About />} /> */}
        {/* <Route path='register' element={<Contact />} /> */}

        {/* <Route path='dashboard/all' element={<Contact />} /> */}
        {/* <Route path='dashboard/edit' element={<Contact />} /> */}
        {/* <Route path='dashboard/new' element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App

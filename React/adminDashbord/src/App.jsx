import './App.css'
import Sidebar from './layout/Sidebar/Sidebar'
import Content from './layout/Content/Content'
import {SidebarProvider} from './context/SidebarContext'
function App() {

  return (
    <>
      <div className='app'>
        <SidebarProvider>
          <Sidebar />
          <Content />
        </SidebarProvider>

      </div>
    </>
  )
}

export default App

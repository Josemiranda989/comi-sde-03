import './App.css'
import { ContentWrapper } from './Components/ContentWrapper'
import { SideBar } from './Components/SideBar'


function App() {

  return (

    <div id="wrapper">
      <SideBar></SideBar> {/* <SideBar /> */}
      <ContentWrapper />
    </div>

  )
}

export default App

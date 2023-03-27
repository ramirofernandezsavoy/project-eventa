import Routing from "./routing/Routing"
import "./styles/App.css"
import Layout from "./layout/Layout"

function App() {  
  return (
    <div className="bg-plain h-full">
      {/* <GlobalContext> */}
      <Layout>
      <Routing />      
      </Layout>
      {/* </GlobalContext> */}
    </div>    
  )
}

export default App

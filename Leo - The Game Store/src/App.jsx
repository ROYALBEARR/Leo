import './App.css'

function App() {
  return (
    <>
    <Header heading="LEO"/>
    <SubHeader subheading="The Game Store"/>
    </>
  )
  
}

function Header({heading}){
  return(
    <div>
      <h1>{heading}</h1>
    </div>
  )
}

function SubHeader({subheading}){
  return(
    <div>
      <h4>{subheading}</h4>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {


  const [value,setValue]=useState(["red","green","pink"])

  const [nav,setNav] = useState(["home","About","Contact"]);



  return (
    <main>
      <header>
        <nav className='flex justify-between px-3'>
         <Button text="logo"/>
          <div className='flex justify-between gap-5'>
           {/* <Button text="Home"/> <Button text="About"/><Button text="Contact"/> */}
           {
              nav.map(e=><Button text={e}/>)
           }
          
          </div>

          <div className='flex gap-3'>
          <Button text="Login" className="text-black"/>
          <Button text="Sing in"/>

          </div>
        </nav>
      </header>

    
<div className='flex'>
        
{
  value.map(p=><Button text={p}/>)
}
</div>

  
      <button onClick={()=>setValue(value+1)}>Click</button>
    </main>
  )
}

export default App

import React from "react"
import BasicButtonGroup from "./components/Button/Button.js"
import BasicPagination from "./components/Button/pagination/Pagination.js"
const App = ()=>{
  return(
    <>

<div>
<div>
  <h1>Button</h1>
     <BasicButtonGroup/>
     
    </div>
    <div>
      <h1>Pagination</h1>
    <BasicPagination/>
    </div>
</div>
    </>
  )
}
export default App
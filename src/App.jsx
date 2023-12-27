// import React from 'react'
// // import Nav from './Nav'
// // import Refs from './Refs'
// import States from './States'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import View from './View'
// import Update from './Update'

// const App = () => {
//   return (
//     <div>
//         {/* <Nav a={13}/> */}
//         {/* <Refs/> */}
//         {/* <States/> */}

//         <Router>
//           <Routes>
//             <Route path='/' element={<States/>}></Route>

//             <Route path='/view' element={<View/>}></Route>
//             <Route path='/updates/:id' element={<Update/>}></Route>
//           </Routes>
//         </Router>
//     </div>
//   )
// }

// export default  App


// ======================HOC========================

// import React from 'react'
// import States from './States'
// // import Hoc from './Hoc'

// // const App = (props) =>
// const App = () =>
//  {
//   return (
//     // <div>{props.data}</div>
//     <States/>
//   )
// }

// // export default Hoc(App)
// export default App


import React from 'react'
import Mulstates from './Mulstates'

const App = () => {
  return (
    <div>
      <Mulstates/>
    </div>
  )
}

export default App
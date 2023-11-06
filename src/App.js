import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Users from './Users'
import UserForm from './Component/UserForm'
import Test from './Test'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/edit/:id' element={<UserForm />} />
      <Route path='/add' element={<UserForm />} />
      <Route path = '/test' element={<Test />}/>
    </Routes>
    </>
  )
}

export default App




// import React from 'react'
// import styled, {css} from 'styled-components'
// const App = () => {
//     const Title = styled.h1`
//   font-size: 1.5em;
//   font-weight: bold;
//   background: papayawhip;
//   color: #BF4F74;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 400px;
//   ${({bgColor}) => (bgColor && css  `background-color: green `)};
// `;
//   return (
//     <div>
//       <Wrapper bgColor>
//       <Title>Hello World!</Title>
//       </Wrapper>
//     </div>
//   )
// }

// export default App
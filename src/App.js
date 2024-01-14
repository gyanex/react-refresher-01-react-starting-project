import React from 'react';

import './App.css';

const App = () => {
  return <div className='course-goals'>
    <h2 >Course Goals</h2>
    <ul className='goal-list'>
      <li>Finish the course</li>
      <li>learn all about the course main topic</li>
      <li>help other students in the course Q&amp;A</li>
    </ul>
  </div>
}

// const App = () => {
//   // return React.createElement('h1', {}, 'Hi, I am React') // this code is alternate of line written below but nesting elements is mess
//   return <h1>A React App!</h1>; // this is jsx syntax where working with nested elements is easy and this is translated in above syntax
// }; // A react component in functioal component (modern way)

// class App extends React.Component{
//   render(){
//     return <h1>A React App!</h1>
//   }
// } // A react component in class way

export default App;

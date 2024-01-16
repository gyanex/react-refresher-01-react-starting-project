import React, { useState } from "react";

import NewGoal from "./components/NewGoal/NewGoal.js";
import GoalList from "./components/GoalList/GoalList.js";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "learn all about the course main topic" },
    { id: "cg3", text: "help other students in the course Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// const App = () => {
//   // return React.createElement('h1', {}, 'Hi, I am React') // this code is alternate of line written below but nesting elements is mess
//   return <h1>A React App!</h1>; // this is jsx syntax where working with nested elements is easy and this is translated in above syntax
// }; // A react component in functional component (modern way)

// class App extends React.Component{
//   render(){
//     return <h1>A React App!</h1>
//   }
// } // A react component in class way

export default App;

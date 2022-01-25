import { useState, useEffect } from "react"
import "./App.css"

// https://cat-fact.herokuapp.com/facts/random

const App = () => {
    const [fact, setFact] = useState({})
    const [data, setData] = useState({})

  // equivilant to componentDidMount
    useEffect(() => {
        handleFetch()
    }, [])

  //   equivilant to componentDidUpdate
  //   but with specification
    useEffect(() => {
        console.log("The fact has changed")
    }, [fact])

    useEffect(() => {
    console.log("component did update")
    })

    const handleFetch = async () => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await res.json()

    setFact(data)
    }

    return (
    <div>
        <h1>Hello API's!</h1>
        <button onClick={handleFetch}>Run the fetch request!</button>
        <button onClick={() => setData("hi")}>Add data</button>
        <p>{fact.text}</p>
    </div>
    )
}

export default App

// import React, { Component } from "react"

// class App extends Component {
//   state = {
//     myFirstState: 100,
//   }

//   handleClick = () => {
//     this.setState({ myFirstState: 5000 })
//   }

//   componentDidMount() {
//     console.log("My component has rendered for the first time")
//   }

//   componentDidUpdate() {
//     console.log("My component has just updated!")
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello Class component</h1>
//         <button onClick={this.handleClick}>click me to change state</button>
//       </div>
//     )
//   }
// }

// export default App
import './App.css'

import { useState } from 'react'
import { useEffect } from 'react'

const App = () =>  {
  //	https://react.dev/reference/react/useState
  //	https://blog.logrocket.com/guide-usestate-react/#usestate-hold
  const [userChoice, setUserChoice]         = useState("rock")
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] 				        = useState(null)
  const [userWins, setUserWins]             = useState(0)
  const [computerWins, setComputerWins]	    = useState(0)
  const [draws, setDraws]  	                = useState(0)
  const choices = ["rock", "paper", "scissors"]

  const handleClick = (value) => {
    setUserChoice(value)
    //alert(userChoice)
    //	https://www.sitepoint.com/delay-sleep-pause-wait/
    setTimeout(() => { 
      getComputerChoice()
    }, 3000);			
  }

  const getComputerChoice = () => {
		const rand = choices[Math.floor(Math.random() * choices.length)]
		setComputerChoice(rand)
		determineWinner()
	}

  //	https://react.dev/reference/react/useEffect
	//	https://blog.logrocket.com/useeffect-hook-complete-guide/
	useEffect(() => {
		determineWinner()
	}, [computerChoice, userChoice])

  const determineWinner = () => {
		switch (userChoice + computerChoice)
		{
			case "rockrock":
			case "paperpaper":
			case "scissorsscissors":
			  setResult("Draw!")
			  setDraws(draws + 1)
			  break

			case "scissorspaper":
			case "rockscissors":
			case "paperrock":
			  setResult("User Wins!")
			  setUserWins(userWins + 1)
			  break

			case "paperscissors":
			case "scissorsrock":
			case "rockpaper":
				setResult("Computer Wins!")
			  setComputerWins(computerWins + 1)
			  break
		}
	}

  return (
    <>
			<h2>User Chose: {userChoice}</h2>
			<h2>Computer Chose: {computerChoice}</h2>
			{/* <button onClick={() => handleClick("rock")}>Rock</button> */}
			{/* <button onClick={() => handleClick("paper")}>Paper</button> */}
			{/* <button onClick={() => handleClick("scissors")}>Scissors</button> */}
      {choices.map((choice, index) =>
				<button key={index} onClick={() => 
						handleClick(choice)}>{choice}</button>)}
			<h2>Result: {result}</h2>
			<h2>User Wins: {userWins}</h2>
			<h2>Computer Wins: {computerWins}</h2>
			<h2>Draws: {draws}</h2>
		</>
  )
}

export default App

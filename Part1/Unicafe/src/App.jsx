import { useState } from 'react'


const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <tr>
        
      </tr>
    )
  }
  return(
    <tr>
    </tr>
  )
}



const Button = (props) => {
  
  const { handleClick, text } = props
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll]= useState([])
  const [total, setTotal] = useState(0)

  const hasFeedback = total > 0;

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    const updatedGood = good + 1
    setGood(good + 1)
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
   }
   const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    const updatedNeutral = neutral + 1
    setNeutral(neutral + 1)
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
   }
   const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    const updatedBad = bad + 1
    setBad(bad + 1)
    setBad(updatedBad)
    setTotal (good + neutral + updatedBad)
   }

   const average = total === 0 ? 0 : (good - bad) / total;

   const positivePercentage = total === 0 ? 0 : (good / total) * 100;


   return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
          </td>
        </tr>
        <tr>
          <td>
            <h1>Statistics</h1>
            {hasFeedback ? (
              <table>
                <tbody>
                  <tr>
                    <td>good</td>
                    <td>{good}</td>
                  </tr>
                  <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                  </tr>
                  <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                  </tr>
                  <tr>
                    <td>all</td>
                    <td>{total}</td>
                  </tr>
                  <tr>
                    <td>average</td>
                    <td>{average}</td>
                  </tr>
                  <tr>
                    <td>positive</td>
                    <td>{positivePercentage}%</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No Feedbacks given</p>
            )}
          </td>
        </tr>
        <History allClicks={allClicks} />
      </tbody>
    </table>
  );
};

export default App
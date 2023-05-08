import React from 'react'
import { useState } from 'react';

const Context = React.createContext();

export default Context

function Provider({ children }) {

    const [currentPage , setCurrentPage] = useState(0)
    const [pageLoaded , setPageLoaded] = useState(false)
    const [userAge , setUserAge] = useState(0)
    const [userGender , setUserGender] = useState(0)
    const [userActivity, setUserActivity] = useState(0)
    const [userGoal , setUserGoal] = useState(0)
    const [userSchedule , setUserSchedule] = useState(0)
    const [userHeight, setUserHeight] = useState(175)
    const [userWeight, setUserWeight] = useState(70)
    return (
    <Context.Provider value={{
        currentPage, 
        pageLoaded , 
        userAge,
        userGender,
        userActivity,
        userGoal,
        userSchedule,
        userHeight,
        userWeight,
        setCurrentPage, 
        setPageLoaded,
        setUserAge,
        setUserGender,
        setUserActivity,
        setUserGoal,
        setUserSchedule,
        setUserHeight,
        setUserWeight
        }}>
        {children}
    </Context.Provider>
  )
}


export { Provider }
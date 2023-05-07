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
    return (
    <Context.Provider value={{
        currentPage, 
        pageLoaded , 
        userAge,
        userGender,
        userActivity,
        userGoal,
        userSchedule,
        setCurrentPage, 
        setPageLoaded,
        setUserAge,
        setUserGender,
        setUserActivity,
        setUserGoal,
        setUserSchedule
        }}>
        {children}
    </Context.Provider>
  )
}


export { Provider }
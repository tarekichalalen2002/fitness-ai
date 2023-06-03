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
    const [userLogged , setUserLogged] = useState(false)
    const [notificationTriggered , setNotificationTriggered] = useState(false)
    const [isNotificationHidden, setIsNotificationHidden] = useState(true)
    const [username , setUsername] = useState("")
    const [notificationContent, setNotificationContent] = useState({})
    const [userResult, setUserResult] = useState({health:"GOOD",food:"INCREASE",training:"AVERAGE",program:["PPL","GVT","FourDay_SPLIT"],eat:["Protein","Complex_carbohydrates","Healthy_fats"],avoid:["Processed_snacks","Soda","Fried_food"],advice:["Lift heavy, eat protein","Prioritize protein and fiber"],macros:{calories:2753.4696000000004,protein:147,fat:91.78232000000001,carbs:344.18370000000004,fibers:35},extra:{workingmemory:["Gender(yanis,MALE)","Age(yanis,YOUNGADULT)","Activity(yanis,MEDIUM)","Weight(yanis,OVER)","Goal(yanis,MUSCLE)","Schedule(yanis,FLEXIBLE)","BMI(yanis,GOOD)"],agenda:[["Health","Health(yanis,x)"],["Food","Food(yanis,x)"],["Training","Training(yanis,x)"],["Program","Program(yanis,x)"],["Eat","Eat(yanis,x)"],["Advice","Advice(yanis,x)"],["Avoid","Avoid(x)"]]}})
    const [isWaitingResult, setIsWaitingResult] = useState(true)
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
        userResult,
        userLogged,
        notificationTriggered,
        username,
        notificationContent,
        isNotificationHidden,
        isWaitingResult,
        setCurrentPage, 
        setPageLoaded,
        setUserAge,
        setUserGender,
        setUserActivity,
        setUserGoal,
        setUserSchedule,
        setUserHeight,
        setUserWeight,
        setUserResult,
        setUserLogged,
        setNotificationTriggered,
        setUsername,
        setNotificationContent,
        setIsNotificationHidden,
        setIsWaitingResult
        }}>
        {children}
    </Context.Provider>
  )
}


export { Provider }
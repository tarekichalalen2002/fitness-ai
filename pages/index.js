import Head from 'next/head'
import { Inter } from 'next/font/google'
import { 
  HeaderSideDiv ,
  HomePageTitles , 
  HomePageImage , 
  CustomRadio, 
  PageIndicator,
  SliderInput,
  LoginForm,
  Notification,
  NutritionsResult,
  TrainingResult,
  AdviceResult,
  HealthResult
} from '@/components'
import { useContext, useEffect } from 'react'
import Context from '@/components/Context'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'

const inter = Inter({ subsets: ['latin'] })

// CHOICEES FOR THE PARAMETERS OF THE QUERY



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function Home() {

  const context = useContext(Context)

  useEffect(() => {
    context.setPageLoaded(true)
  },[context.currentPage])

  const handleHeightChange = (event) => {
    context.setUserHeight(event.target.value)
  }
  const handleWeightChange = (event) => {
    context.setUserWeight(event.target.value)
  }

  
const goalChoices = {
  label: 'Define your goal',
  boxSize:"large",
  defaultValue:0,
  subject:"goal",
  choices: [
    {name:"LOSS",etiquet:""},
    {name:"GAIN",etiquet:""},
    {name:"GENERAL",etiquet:""},
    {name:"ENDURANCE",etiquet:""},
    {name:"MUSCLE",etiquet:""},
  ],
}

const ageChoices = {
  label: 'AGE',
  boxSize:"small",
  defaultValue:0,
  subject:"age",
  choices: [
    {name:"CHILD",etiquet:"<12"},
    {name:"TEEN",etiquet:"13-17"},
    {name:"YOUNGADULT",etiquet:"18-37"},
    {name:"MIDDLE",etiquet:"37-50"},
    {name:"OLD",etiquet:"50>"},
  ],
}

const genderChoices = {
  label: 'GENDER',
  boxSize:"small",
  defaultValue:0,
  subject:"gender",
  choices: [
    {name:"MALE",etiquet:""},
    {name:"FEMALE",etiquet:""},
  ],
}

const activityChoices = {
  label: 'DAILY ACTIVITY LEVEL',
  boxSize:"small",
  defaultValue:0,
  subject:"activity",
  choices: [
    {name:"LOW",etiquet:""},
    {name:"MEDIUM",etiquet:""},
    {name:"HIGH",etiquet:""},
    {name:"VERYHIGH",etiquet:""},
  ],
}

const scheduleChoices = {
  label: 'HOW IS YOUR WEEKLY SCHEDULE',
  boxSize:"large",
  defaultValue:0,
  subject:"schedule",
  choices: [
    {name:"OPEN",etiquet:""},
    {name:"FLEXIBLE",etiquet:""},
    {name:"BUSY",etiquet:""},
  ],
}


  const heightProps = {
    title:"HEIGHT",
    max:230,
    min:80,
    value:context.userHeight,
    onChange: handleHeightChange,
    unity:"cm"
  }

  const weightProps = {
    title:"WEIGHT",
    max:250,
    min:20,
    value:context.userWeight,
    onChange: handleWeightChange,
    unity:"kg"
  }

  const nextButtonProps = {
    position:"absolute bottom-[70px] right-[100px]",
    content:"NEXT",
    type:"button",
    handleClick:() => {
      context.setPageLoaded(false)
      setTimeout(() => {
          context.setCurrentPage(context.currentPage+1)
      },1500)}
  }

  const previousButtonProps={
    position:"absolute bottom-[70px] left-[100px]",
    content:"PREVIOUS",
    type:"button",
    handleClick:() => {
      context.setPageLoaded(false)
      setTimeout(() => {
          context.setCurrentPage(context.currentPage-1)
      },1500)}
  }

  const getResult = async () => {
    const formData = {
      username:context.username,
      goal:(goalChoices.choices[context.userGoal]).name,
      age: (ageChoices.choices[context.userAge]).name,
      gender: (genderChoices.choices[context.userGender]).name,
      activity: (activityChoices.choices[context.userActivity]).name,
      schedule: (scheduleChoices.choices[context.userSchedule]).name,
      height: context.userHeight/100,
      weight: context.userWeight/1
    }
    console.log(formData);

    const response = await fetch(
      "http://127.0.0.1:8000/api/submit/",
      {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }
    )
    const serverResponse = await response.json()
    if(serverResponse.status === "success"){
      console.log(serverResponse.extra);
      context.setUserResult(serverResponse.data);
      console.log(serverResponse.data);
    }
  }

  const submitButtonProps={
    position:"absolute bottom-[70px] right-[100px]",
    content:"SUBMIT",
    type:"button",
    handleClick: async () => {
      await getResult()
      context.setPageLoaded(false)
      setTimeout(() => {context.setCurrentPage(context.currentPage+1)},1500)
    }
  }

  const LoginNotProps = {
    title:"LOGGED IN SUCCESSFULY",
    content:"See your history"
  }


  return (
    <div
    className='p-0 overflow-hidden'
    >
      <Head>
        <title>Fitness AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {context.notificationTriggered && <Notification />}

      {/* WELCOME VIEW */}

      {
        context.currentPage === 0 && (
          <div>
            <HeaderSideDiv />
            <HomePageTitles />
            <HomePageImage />
          </div>
        )
      }

      {/* ----------------------------- AUTHENTIFICATION ------------------------- */}

      {
        context.currentPage === 2 && (
          <div>
              <LoginForm />
          </div>
        )
      }

      {/* ---------------------------- FORM ---------------------- */}

       {
        (context.currentPage === 3 || context.currentPage === 4)&& (
         <div className={`
         flex flex-col gap-2
         `}>
            <div 
            className={`
            flex items-center justify-center
            `}
            >
              <PageIndicator />
            </div>
            {context.currentPage === 3 && (
              <div>
                <div 
                className='grid lg:grid-cols-2'
                >
                  <div>
                    <CustomRadio value={ageChoices} />
                    <CustomRadio value={genderChoices} />
                    <CustomRadio value={activityChoices} />
                  </div>
                  <div className='p-10 flex flex-col gap-10'>
                    <SliderInput value={heightProps}/> 
                    <SliderInput value={weightProps} />
                  </div>
                </div>
                <CustomButton props={nextButtonProps} />
              </div>
            )
           }
           {
            context.currentPage === 4 && (
              <div>
                <CustomRadio value={goalChoices} />
                <br/>
                <CustomRadio value={scheduleChoices} />
                <CustomButton props={previousButtonProps} />
                <CustomButton props={submitButtonProps}/>
              </div>
            )
           }
            
         </div>
        )
      } 

      {/* ---------------------------- RESULT ------------------------------------------- */}



      {
        context.currentPage === 5 && (
          <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-row gap-4'>
              <HealthResult />
              <TrainingResult />
            </div>
            <div className='flex gap-10'>
              <AdviceResult />
              <NutritionsResult />
            </div>
          </div>
          // Don't forget to intrduce the waiting motif 
          
        )
      }
    </div>
  )
}

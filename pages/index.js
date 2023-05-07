import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HeaderSideDiv , HomePageTitles , HomePageImage , CustomRadio} from '@/components'
import { useContext, useEffect } from 'react'
import Context from '@/components/Context'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const goalChoices = {
  label: 'Define your goal',
  boxSize:"small",
  defaultValue:0,
  subject:"goal",
  choices: [
    {name:"LOOSE WEIGHT",etiquet:"<12"},
    {name:"GAIN WEIGHT",etiquet:"13-17"},
    {name:"GENERAL",etiquet:"13-17"},
    {name:"ENDURANCE",etiquet:"13-17"},
    {name:"BUILD MUSCLE",etiquet:"13-17"},
  ],
}

const genderChoices = {
  label: 'Gender',
  boxSize:"small",
  defaultValue:0,
  subject:"gender",
  choices: [
    {name:"MALE",etiquet:""},
    {name:"FEMALE",etiquet:""},
  ],
}

const activityChoices = {
  label: 'Define your goal',
  boxSize:"small",
  defaultValue:0,
  subject:"activity",
  choices: [
    {name:"LOW",etiquet:""},
    {name:"MEDIUM",etiquet:""},
    {name:"HIGH",etiquet:""},
    {name:"VERY HIGH",etiquet:""},
  ],
}

export default function Home() {

  const context = useContext(Context)
  console.log(context.currentPage);

  useEffect(() => {
    context.setPageLoaded(true)
  },[context.currentPage])

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

      {/* LOGIN PAGE */}

      {
        context.currentPage === 1 && (
          <div>
            <HeaderSideDiv />

          </div>
        )
      }

      {/* FORM PART 1 */}

      {
        context.currentPage === 2 && (
          <div>
            <CustomRadio value={goalChoices} />
            <CustomRadio value={genderChoices} />
            <CustomRadio value={activityChoices} />
          </div>
        )
      }

    </div>
  )
}

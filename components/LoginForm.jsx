import React, { useState, useContext } from 'react'
import HeaderSideDiv from './HeaderSideDiv'
import { Formik } from 'formik'
import CustomButton from './CustomButton'
import Context from './Context'
import * as yup from "yup"


function LoginForm() {

    const context = useContext(Context)

    const [isSubmitting , setIsSubmitting] = useState(false)

    const getLoginResponse = async (values) => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/login/",
            {
              method:"POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values)
            }
          )
          const serverResponse = await response.json()
          if(serverResponse.status === "success"){
            context.setUsername(serverResponse.username)
            console.log(serverResponse);
            context.setUserLogged(true)
            if(serverResponse.message === "logged in"){
                context.setNotificationContent({
                    title:"SIGNED IN",
                    content:"VIEW PREVIOUS RESULTS",
                    onClickAction: () => {
                        context.setCurrentPage(5)
                        context.setIsNotificationHidden(true)
                    }
                })
            } else if (serverResponse.message === "created") {
                context.setNotificationContent({
                    title:"ACCOUNT CREATED",
                    content:""
                })
            }
            context.setNotificationTriggered(true)
            setTimeout(() => {
                context.setIsNotificationHidden(false)
            },500)
            setTimeout(() => {
                context.setCurrentPage(context.currentPage+1)
            },700)
          }
    }

    
    const validationSchema = yup.object().shape({
        username: yup.string().required("required"),
        password: yup.string().required("required"),
    })

    const initialValues = {
        username:"",
        password:""
    }

    const handleSubmit = async (values , {setIsSubmitting}) =>{
        await getLoginResponse(values)
        setIsSubmitting(false)
    }

    const submitButtonProps= {
        position:"absolute top-[550px] left-[340px]",
        content:"SUBMIT",
        type:"submit",
        handleClick:() => {
            setIsSubmitting(true)
        }
    }
    return (
    <div className='abolute container w-full h-screen flex flex-col gap-10'>
        <HeaderSideDiv />
        <div
        className={`w-[502px] absolute 
        h-[130px] left-[52px] flex items-center justify-center text-[80px]
        font-medium leading-[72px]
        ${""}
        `}
        >
            <h1
            className='main-title'
            >FITNESS - AI</h1>
        </div>

        <div className='  absolute 
        left-[-135px] top-[-27px]  ' >
            <Formik
            initialValues={initialValues} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
            >
                {({ values, 
                handleChange, 
                handleBlur, 
                handleSubmit,
                isSubmitting,
                errors,
                touched,
                setFieldValue,
                resetForm 
            }) => (
                <form onSubmit={handleSubmit}>
                    <input className='flex justify-center absolute w-[430px] 
                    h-[70px] left-[190px] top-[300px] bg-gradient-to-b from-transparent 
                    to-gray-900 border-b-2 border-blue-500 rounded-md bg-transparent
                    text-gray-300 pl-7 pt-5  border-0' 
                    type='text' 
                    name='username'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                        <div className="text-red-600">{errors.username}</div>
                    ) : null}

                    <input className='flex justify-center absolute w-[430px] 
                    h-[70px] left-[190px] top-[413px] bg-gradient-to-b from-transparent 
                    to-gray-900 border-b-2 border-blue-500 rounded-md bg-transparent 
                    text-gray-300 pl-7 pt-5 border-0' 
                    type='password' 
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                        <div className="text-red-600">{errors.password}</div>
                    ) : null}

                    <CustomButton props={{
                        position:"absolute top-[550px] left-[340px]",
                        content:"SUBMIT",
                        type:"submit",
                        handleClick:() => {
                            setIsSubmitting(true)
                        }
                    }}/>
                </form>
                )}
            </Formik>
        </div>
    </div>

  )
}

export default LoginForm
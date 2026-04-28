import React, { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import useAlert from '../hooks/useAlert'

const Contact = () => {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  // IMPORTANT: exact animation names from your fox model
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // Input focus → fox walks
  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  // Input blur → fox idle
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    // Send button → fox hit animation
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Mohd Rizwan Ansari',
        from_email: form.email,
        to_email: 'alizishan6642@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsLoading(false)

        showAlert({
          text: 'Message sent successfully!',
          type: 'success'
        })

        setCurrentAnimation('idle')

        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        }, 3000)

        console.log('Email sent successfully')
      })
      .catch((error) => {
        setIsLoading(false)
        setCurrentAnimation('idle')

        console.log(error)

        showAlert({
          text: 'I did not receive your message',
          type: 'danger'
        })
      })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">

      {alert.show && <Alert {...alert} />}
      

      {/* LEFT SIDE FORM */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">
          get in touch
        </h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <label className="text-black-500 font-semibold">
            Name

            <input
              type="text"
              name="name"
              className="input"
              placeholder="john"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* EMAIL */}
          <label className="text-black-500 font-semibold">
            Email

            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* MESSAGE */}
          <label className="text-black-500 font-semibold">
            Your Message

            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE FOX */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
        >
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[0, 5, 5]}
            intensity={2}
          />

          <hemisphereLight
            skyColor="#ffffff"
            groundColor="#444444"
            intensity={1}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
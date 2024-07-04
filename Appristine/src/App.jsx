
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Body/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

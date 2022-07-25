import React from 'react'
import Dashboard from '../../components/DashBoard/Dashboard'
import Navigation from '../../components/Navigation/Navigation'

const Home = () => {
  return (
    <div className='container'>
      <Navigation />
      <section className='right'>
        <Dashboard />
      </section>
    </div>
  )
  
}

export default Home
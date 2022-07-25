import React from 'react'
import AddResult from '../../components/AddResult/AddResult'
import ResultTable from '../../components/ResultTable/ResultTable'
import { useSelector } from 'react-redux'
import Navigation from '../../components/Navigation/Navigation'


const UploadResult = () => {

    const isResultPosted = useSelector(state => state.details.registered_result)

  return (
       <div className='container'>
      <Navigation />
      <section className='right'>
            {!isResultPosted && <AddResult />}
          {isResultPosted && <div className='dummyContainer'></div>}
          
          
          <ResultTable show = {true} />
      </section>
    </div>
  )
}

export default UploadResult
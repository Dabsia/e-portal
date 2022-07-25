import React from 'react'
import ResultTable from '../../components/ResultTable/ResultTable'
import { useSelector } from 'react-redux'
import Navigation from '../../components/Navigation/Navigation'

const Result = () => {

    const isResultPosted = useSelector(state => state.details.registered_result)

  return (
      
      <div className='container'>
      <Navigation />
      <section className='right'>
        {
              isResultPosted ? <ResultTable /> : <p>Result hasn't been uploaded</p>
          }
      </section>
    </div>
    )
}

export default Result
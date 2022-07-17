import React from 'react'
import ResultTable from '../../components/ResultTable/ResultTable'
import { useSelector } from 'react-redux'

const Result = () => {

    const isResultPosted = useSelector(state => state.details.registered_result)

  return (
      <div>
          
          {
              isResultPosted ? <ResultTable /> : <p>Result hasn't been uploaded</p>
          }
          
        
      </div>
  )
}

export default Result
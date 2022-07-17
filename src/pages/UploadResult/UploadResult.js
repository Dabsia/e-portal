import React from 'react'
import AddResult from '../../components/AddResult/AddResult'
import ResultTable from '../../components/ResultTable/ResultTable'
import { useSelector } from 'react-redux'


const UploadResult = () => {

    const isResultPosted = useSelector(state => state.details.registered_result)

  return (
      <div>

          {!isResultPosted && <AddResult />}
          {isResultPosted && <div className='dummyContainer'></div>}
          
          
          <ResultTable show = {true} />
      </div>
  )
}

export default UploadResult
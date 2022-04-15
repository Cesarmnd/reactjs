// Libraries
import { useNavigate } from 'react-router-dom'

function ReturnBtn() {
  const back = useNavigate()
  return (
    <button className='btn' onClick={() => back(-1)}>Back</button>
  )
}

export default ReturnBtn
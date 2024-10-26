import { useSelector } from 'react-redux'
import * as Loader from 'react-loader-spinner'

import './spin.scss'
const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading)
  console.log('spinner >>>>', spinner)
  return (
    <div className="spinner__wrapper">
      <Loader.TailSpin visible={spinner} color="#2196f3" wrapperClass="spinner" />
    </div>
  )
}
export default Spin

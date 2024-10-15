import FlightTable from '../flight-table'
import TransferFilter from '../transfer-filter'
import logo from '../images/Logo.png'

import classes from './app-base.module.scss'
function AppBase() {
  return (
    <>
      <div className={classes['app__wrapper']}>
        <div className={classes['app__logo']}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes['app__content']}>
          <TransferFilter />
          <FlightTable />
        </div>
      </div>
    </>
  )
}

export default AppBase

import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import { check } from '../redux/actions'

import classes from './transfer-filter.module.scss'
function TransferFilter() {
  const [checkboxStat, setCheckboxStat] = useState({})
  const checkbox = useSelector((state) => {
    const { checkboxReducer } = state
    return checkboxReducer.checkbox
  })
  const dispatch = useDispatch()
  const keys = Object.keys(checkbox)
  const names = {
    allChecked: 'Все',
    withoutTransfers: 'Без пересадок',
    oneTransfer: '1 пересадка',
    twoTransfer: '2 пересадки',
    threeTransfer: '3 пересадки',
  }
  useEffect(() => {
    if (
      !checkboxStat['allChecked'] &&
      Object.values(checkboxStat).length > 3 &&
      Object.keys(checkboxStat).every((el) => el === 'allChecked' || checkboxStat[el] === true)
    ) {
      setCheckboxStat({ ...checkboxStat, allChecked: true })
    }
    dispatch(check(checkboxStat))
  }, [checkboxStat, dispatch])
  const handleCheck = (e) => {
    const target = e.target.checked
    const name = e.target.name
    if (target === false) {
      setCheckboxStat({ ...checkboxStat, [name]: target, allChecked: false })
    } else {
      setCheckboxStat({ ...checkboxStat, [name]: target })
    }
    if (name === 'allChecked') {
      const newCheckbox = {}
      if (target === true) {
        keys.forEach((el) => {
          newCheckbox[el] = true
        })
      } else {
        keys.forEach((el) => {
          newCheckbox[el] = false
        })
      }
      setCheckboxStat(newCheckbox)
    }
  }
  console.log(checkbox, 'checkbox')
  return (
    <div className={classes['transfer-filter__wrapper']}>
      <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      {Object.keys(names).map((el) => {
        return (
          <label key={uniqid()} className={classes['transfer-filter__container']}>
            {names[el]}
            <input checked={checkbox[el]} name={el} type="checkbox" onChange={handleCheck} />
            <span className={classes['checkmark']}></span>
          </label>
        )
      })}
    </div>
  )
}

export default TransferFilter

import classes from './flight-item.module.scss'
function FlightItem(props) {
  const { price, carrier, segments } = props.props
  // console.log(carrier)
  // console.log(props)
  const { origin: originFrom, destination: destinationFrom, stops: stopsFrom, duration: durationFrom } = segments[0]
  const { origin: originTo, destination: destinationTo, stops: stopsTo, duration: durationTo } = segments[1]
  return (
    <>
      <div className={`${classes['flight-item']} ${classes['flight-table__offer-filter']}`}>
        <div className={classes['flight-item__price']}>{`${price.toLocaleString()} Р`}</div>
        <div className={classes['flight-item__carrier']}>
          <img src={carrier} alt="carrier logo" />
        </div>
        <div className={classes['flight-item__chunk']}>
          <div
            className={`${classes['flight-item__destination-from']} ${classes[' flight-item__desc']}`}
          >{`${originFrom} - ${destinationFrom}`}</div>
          <div className={classes['flight-item__duration-from']}>{durationFrom}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>В ПУТИ</span>
          <div className={classes['flight-item__duration-from']}>{durationFrom}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}> 2 ПЕРЕСАДКИ</span>
          <div className={classes['flight-item__transfers-from']}>{stopsFrom.join(', ')}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <div
            className={`${classes['flight-item__destination-to']} ${classes['flight-item__desc']}`}
          >{`${originTo} - ${destinationTo}`}</div>
          <div className={classes['flight-item__duration-to']}>{durationTo}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>В ПУТИ</span>
          <div className={classes['flight-item__duration-to']}>{durationTo}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>{`${stopsTo.length} ПЕРЕСАДКИ`}</span>
          <div className={classes['flight-item__transfers-to']}>{stopsTo.join(', ')}</div>
        </div>
      </div>
    </>
  )
}

export default FlightItem

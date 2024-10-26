import { format, formatDuration, add } from 'date-fns'

import classes from './flight-item.module.scss'
function FlightItem(props) {
  const { price, carrier, segments, carrierImg } = props.props
  const {
    origin: originFrom,
    destination: destinationFrom,
    stops: stopsFrom,
    duration: durationFrom,
    date: dateFrom,
  } = segments[0]
  const {
    origin: originTo,
    destination: destinationTo,
    stops: stopsTo,
    duration: durationTo,
    date: dateTo,
  } = segments[1]
  const endings = {
    0: 'ОК',
    1: 'КА',
    2: 'КИ',
    3: 'КИ',
  }
  const dateFromOne = format(new Date(dateFrom), 'hh:mm')
  const dateFromTwo = format(
    add(new Date(dateFrom), {
      hours: Math.round(durationFrom / 60),
      minutes: durationFrom % 60,
    }),
    'hh:mm'
  )
  const dateToOne = format(new Date(dateTo), 'hh:mm')
  const dateToTwo = format(
    add(new Date(dateTo), {
      hours: Math.round(durationTo / 60),
      minutes: durationFrom % 60,
    }),
    'hh:mm'
  )

  const durTo = formatDuration(
    { hours: Math.round(durationTo / 60), minutes: durationTo % 60 },
    { format: ['hours', 'minutes'] }
  )

  return (
    <>
      <div className={`${classes['flight-item']} ${classes['flight-table__offer-filter']}`}>
        <div className={classes['flight-item__price']}>{`${price.toLocaleString()} Р`}</div>
        <div className={classes['flight-item__carrier']}>
          <img src={carrierImg} alt={`${carrier} logo`} />
        </div>
        <div className={classes['flight-item__chunk']}>
          <div
            className={`${classes['flight-item__destination-from']} ${classes['flight-item__desc']}`}
          >{`${originFrom} - ${destinationFrom}`}</div>
          <div className={classes['flight-item__duration-from']}>{`${dateFromOne}-${dateFromTwo}`}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>В ПУТИ</span>
          <div
            className={classes['flight-item__duration-from']}
          >{`${Math.round(durationFrom / 60)}ч ${durationFrom % 60}м`}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>
            {' '}
            {`${stopsFrom.length} ПЕРЕСАД${endings[stopsFrom.length]}`}
          </span>
          <div className={classes['flight-item__transfers-from']}>{stopsFrom.join(', ')}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <div
            className={`${classes['flight-item__destination-to']} ${classes['flight-item__desc']}`}
          >{`${originTo} - ${destinationTo}`}</div>
          <div className={classes['flight-item__duration-to']}>{`${dateToOne}-${dateToTwo}`}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>В ПУТИ</span>
          <div
            className={classes['flight-item__duration-to']}
          >{`${Math.round(durationTo / 60)}ч ${durationTo % 60}м`}</div>
        </div>
        <div className={classes['flight-item__chunk']}>
          <span className={classes['flight-item__desc']}>{`${stopsTo.length} ПЕРЕСАД${endings[stopsTo.length]}`}</span>
          <div className={classes['flight-item__transfers-to']}>{stopsTo.join(', ')}</div>
        </div>
      </div>
    </>
  )
}

export default FlightItem

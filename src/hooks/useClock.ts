import { useEffect, useState } from 'react'

interface ITime {
  d1: number
  d2: number
}

export interface IClock {
  hour: ITime
  minute: ITime
  second: ITime
  meridiem: 'AM' | 'PM'
  days: number
  date: ITime
  month: ITime
  year: number[]
}

export function useClock() {
  const [clock, setClock] = useState<IClock | null>(null)

  useEffect(() => {
    const tick = () => {
      const time = new Date()
      const days = time.getDay()
      const second = time.getSeconds()
      const minute = time.getMinutes()
      let hour = time.getHours()
      hour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
      const date = time.getDate()
      const month = time.getMonth() + 1
      let year = time.getFullYear()
      const yearD4 = year % 10
      year = Math.trunc(year / 10)
      const yearD3 = year % 10
      year = Math.trunc(year / 10)
      const yearD2 = year % 10
      year = Math.trunc(year / 10)
      const yearD1 = year % 10

      setClock({
        hour: {
          d1: Math.trunc(hour / 10),
          d2: hour % 10,
        },
        minute: {
          d1: Math.trunc(minute / 10),
          d2: minute % 10,
        },
        second: {
          d1: Math.trunc(second / 10),
          d2: second % 10,
        },
        date: {
          d1: Math.trunc(date / 10),
          d2: date % 10,
        },
        month: {
          d1: Math.trunc(month / 10),
          d2: month % 10,
        },
        year: [yearD1, yearD2, yearD3, yearD4],
        meridiem: time.getHours() > 12 ? 'PM' : 'AM',
        days,
      })
    }
    const intervalId = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return { clock }
}

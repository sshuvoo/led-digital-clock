import { useEffect, useState } from 'react'
import { ClockDigit } from './components/clock-digit'
import { ClockMeridiem } from './components/clock-meridiem'
import { ClockSeparator } from './components/clock-separator'

interface ITime {
  d1: number
  d2: number
}

interface IClock {
  hour: ITime
  minute: ITime
  second: ITime
  meridiem: 'AM' | 'PM'
  days: number
  date: ITime
  month: ITime
  year: {
    d1: number
    d2: number
    d3: number
    d4: number
  }
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function App() {
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
        year: {
          d1: yearD1,
          d2: yearD2,
          d3: yearD3,
          d4: yearD4,
        },
        meridiem: time.getHours() > 12 ? 'PM' : 'AM',
        days,
      })
    }
    const intervalId = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center bg-[#121212]">
      {clock && (
        <div className="p-2 flex gap-2 lg:gap-6 relative">
          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.hour.d1} />
          </div>
          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.hour.d2} />
          </div>

          <ClockSeparator />

          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.minute.d1} />
          </div>
          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.minute.d2} />
          </div>

          <ClockSeparator />

          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.second.d1} />
          </div>
          <div className="w-8 sm:w-14 md:w-20 lg:w-24 xl:w-28 2xl:w-36">
            <ClockDigit digit={clock.second.d2} />
          </div>
          <ClockMeridiem meridiem={clock.meridiem} />
        </div>
      )}
      {clock && (
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase">
          {days.map((day, i) => (
            <span
              key={i}
              className={clock.days === i ? 'text-[#F80817]' : 'text-[#d8d8d8]'}
            >
              {day}
            </span>
          ))}
        </div>
      )}
      {clock && (
        <div className="flex gap-4 md:gap-8 lg:gap-12 text-[#d8d8d8]">
          <div className="grid grid-cols-[14px_14px_auto] sm:grid-cols-[20px_20px_auto] md:grid-cols-[30px_30px_auto] lg:grid-cols-[44px_44px_auto] gap-2">
            <ClockDigit digit={clock.date.d1} />
            <ClockDigit digit={clock.date.d2} />
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase">
              DATE
            </h2>
          </div>
          <div className="grid grid-cols-[14px_14px_auto] sm:grid-cols-[20px_20px_auto] md:grid-cols-[30px_30px_auto] lg:grid-cols-[44px_44px_auto] gap-2">
            <ClockDigit digit={clock.month.d1} />
            <ClockDigit digit={clock.month.d2} />
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase">
              MONTH
            </h2>
          </div>
          <div className="grid grid-cols-[14px_14px_14px_14px_auto] sm:grid-cols-[20px_20px_20px_20px_auto] md:grid-cols-[30px_30px_30px_30px_auto] lg:grid-cols-[44px_44px_44px_44px_auto] gap-2">
            <ClockDigit digit={clock.year.d1} />
            <ClockDigit digit={clock.year.d2} />
            <ClockDigit digit={clock.year.d3} />
            <ClockDigit digit={clock.year.d4} />
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase">
              YEAR
            </h2>
          </div>
        </div>
      )}
    </main>
  )
}

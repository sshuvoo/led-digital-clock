import { ClockDigit } from './components/clock-digit'
import { ClockMeridiem } from './components/clock-meridiem'
import { ClockSeparator } from './components/clock-separator'
import { FullDate } from './components/full-date'
import { SourceCodeButton } from './components/source-code-button'
import { WeekDays } from './components/week-days'
import { useClock } from './hooks/useClock'

export default function App() {
  const { clock } = useClock()

  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center bg-[#121212] relative">
      <SourceCodeButton />
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
      {clock && <WeekDays clock={clock} />}
      {clock && <FullDate clock={clock} />}
    </main>
  )
}

import { IClock } from '../hooks/useClock'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function WeekDays({ clock }: { clock: IClock }) {
  return (
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
  )
}

import { IClock } from '../hooks/useClock'
import { ClockDigit } from './clock-digit'

export function FullDate({ clock }: { clock: IClock }) {
  return (
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
        {clock.year.map((digit, i) => (
          <ClockDigit key={i} digit={digit} />
        ))}
        <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase">
          YEAR
        </h2>
      </div>
    </div>
  )
}

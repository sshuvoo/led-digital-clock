export function ClockMeridiem({ meridiem }: { meridiem: 'AM' | 'PM' }) {
  return (
    <div className="absolute -right-8 sm:-right-12 md:-right-16 lg:-right-20 bottom-0 text-[#F80817]">
      <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic">
        {meridiem}
      </h1>
    </div>
  )
}

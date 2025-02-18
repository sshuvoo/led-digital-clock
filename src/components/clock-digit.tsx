export function ClockDigit({ digit }: { digit: number }) {
  return (
    <svg
      viewBox="0 0 120 200"
      className="w-full aspect-[3/5]"
      stroke="#121212"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* top-top */}
      <path
        fill={digit === 1 || digit === 4 ? '#1b1b1b' : '#F80817'}
        d="M30 0 L110 0 L115 5 L100 20 L40 20 L25 5 L30 0"
      />

      {/* top-left */}
      <path
        fill={
          digit === 1 || digit === 2 || digit === 3 || digit === 7
            ? '#1b1b1b'
            : '#F80817'
        }
        d="M20 10 L25 5 L40 20 L30 90 L15 95 L10 90 L20 10"
      />

      {/* top-right */}
      <path
        fill={digit === 5 || digit === 6 ? '#1b1b1b' : '#F80817'}
        d="M120 10 L115 5 L100 20 L90 90 L105 95 L110 90 L120 10"
      />

      {/* middle */}
      <path
        fill={digit === 0 || digit === 1 || digit === 7 ? '#1b1b1b' : '#F80817'}
        d="M30 90 L90 90 L105 95 Q110 100 105 105 L90 110 L30 110 L15 105 Q10 100 15 95 L30 90"
      />

      {/* bottom-left */}
      <path
        fill={
          digit === 0 || digit === 2 || digit === 6 || digit === 8
            ? '#F80817'
            : '#1b1b1b'
        }
        d="M10 110 L15 105 L30 110 L20 180 L5 195 L0 190 L10 110"
      />

      {/* bottom-right */}
      <path
        fill={digit === 2 ? '#1b1b1b' : '#F80817'}
        d="M110 110 L105 105 L90 110 L80 180 L95 195 L100 190 L110 110"
      />

      {/* bottom-bottom */}
      <path
        fill={digit === 1 || digit === 4 || digit === 7 ? '#1b1b1b' : '#F80817'}
        d="M10 200 L5 195 L20 180 L80 180 L95 195 L90 200 L10 200"
      />
    </svg>
  )
}

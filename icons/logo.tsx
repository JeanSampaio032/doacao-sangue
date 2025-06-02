import * as React from "react";
const Logo = (props) => (
  <svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50 15C40 25 30 35 30 50s10 25 20 25 20-10 20-25-10-25-20-35Z"
      fill="#DC2626"
      stroke="#B91C1C"
    />
    <g fill="#FFF">
      <rect x={47} y={35} width={6} height={25} rx={1} />
      <rect x={37} y={44} width={26} height={6} rx={1} />
    </g>
    <ellipse cx={45} cy={30} rx={3} ry={5} fill="#EF4444" opacity={0.6} />
    <path
      d="M50 20c-2-2-5-2-5 1 0-3-3-3-5-1s0 5 5 8c5-3 7-6 5-8"
      fill="#F87171"
      opacity={0.8}
    />
  </svg>
);
export default Logo;

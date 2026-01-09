export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill="url(#gradient)" />
      
      {/* T */}
      <path
        d="M12 14H20V16H17V28H15V16H12V14Z"
        fill="white"
        fontWeight="bold"
      />
      
      {/* P */}
      <path
        d="M22 14H27C29.2091 14 31 15.7909 31 18C31 20.2091 29.2091 22 27 22H24V28H22V14ZM24 16V20H27C28.1046 20 29 19.1046 29 18C29 16.8954 28.1046 16 27 16H24Z"
        fill="white"
      />
      
      {/* S */}
      <path
        d="M33 18C33 16.3431 34.3431 15 36 15C37.6569 15 39 16.3431 39 18H37C37 17.4477 36.5523 17 36 17C35.4477 17 35 17.4477 35 18C35 18.5523 35.4477 19 36 19C37.6569 19 39 20.3431 39 22C39 23.6569 37.6569 25 36 25C34.3431 25 33 23.6569 33 22H35C35 22.5523 35.4477 23 36 23C36.5523 23 37 22.5523 37 22C37 21.4477 36.5523 21 36 21C34.3431 21 33 19.6569 33 18Z"
        fill="white"
      />
      
      {/* Signal waves */}
      <path
        d="M14 34C14 33.4477 14.4477 33 15 33C15.5523 33 16 33.4477 16 34V36C16 36.5523 15.5523 37 15 37C14.4477 37 14 36.5523 14 36V34Z"
        fill="white"
        opacity="0.6"
      />
      <path
        d="M18 31C18 30.4477 18.4477 30 19 30C19.5523 30 20 30.4477 20 31V36C20 36.5523 19.5523 37 19 37C18.4477 37 18 36.5523 18 36V31Z"
        fill="white"
        opacity="0.8"
      />
      <path
        d="M22 29C22 28.4477 22.4477 28 23 28C23.5523 28 24 28.4477 24 29V36C24 36.5523 23.5523 37 23 37C22.4477 37 22 36.5523 22 36V29Z"
        fill="white"
      />
      <path
        d="M26 31C26 30.4477 26.4477 30 27 30C27.5523 30 28 30.4477 28 31V36C28 36.5523 27.5523 37 27 37C26.4477 37 26 36.5523 26 36V31Z"
        fill="white"
        opacity="0.8"
      />
      <path
        d="M30 34C30 33.4477 30.4477 33 31 33C31.5523 33 32 33.4477 32 34V36C32 36.5523 31.5523 37 31 37C30.4477 37 30 36.5523 30 36V34Z"
        fill="white"
        opacity="0.6"
      />
      
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B5CF6" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

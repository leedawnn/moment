import type { ComponentPropsWithRef } from 'react';

const DownloadIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_241_1210)">
        <path
          d="M18.0003 8.75071V12.8341C18.0003 13.1436 17.8774 13.4403 17.6586 13.6591C17.4398 13.8779 17.1431 14.0008 16.8336 14.0008H5.16669C4.85727 14.0008 4.56051 13.8779 4.34172 13.6591C4.12292 13.4403 4 13.1436 4 12.8341V8.75071C4 8.59599 4.06146 8.44762 4.17086 8.33822C4.28026 8.22882 4.42863 8.16736 4.58335 8.16736C4.73806 8.16736 4.88644 8.22882 4.99584 8.33822C5.10523 8.44762 5.16669 8.59599 5.16669 8.75071V12.8341H16.8336V8.75071C16.8336 8.59599 16.8951 8.44762 17.0045 8.33822C17.1139 8.22882 17.2623 8.16736 17.417 8.16736C17.5717 8.16736 17.7201 8.22882 17.8295 8.33822C17.9389 8.44762 18.0003 8.59599 18.0003 8.75071Z"
          fill="black"
        />
        <path
          d="M11.5834 7.34212L13.5041 5.42073C13.6136 5.31127 13.762 5.24977 13.9168 5.24977C14.0716 5.24977 14.2201 5.31127 14.3295 5.42073C14.439 5.53018 14.5005 5.67864 14.5005 5.83344C14.5005 5.98824 14.439 6.1367 14.3295 6.24616L11.4128 9.1629C11.3586 9.21713 11.2943 9.26016 11.2235 9.28952C11.1527 9.31887 11.0767 9.33398 11.0001 9.33398C10.9234 9.33398 10.8475 9.31887 10.7767 9.28952C10.7059 9.26016 10.6415 9.21713 10.5874 9.1629L7.67063 6.24616C7.56117 6.1367 7.49968 5.98824 7.49968 5.83344C7.49968 5.67864 7.56117 5.53018 7.67063 5.42072C7.78009 5.31127 7.92855 5.24977 8.08335 5.24977C8.23815 5.24977 8.38661 5.31127 8.49607 5.42072L10.4167 7.34212L10.4167 0.58332C10.4167 0.428608 10.4782 0.28023 10.5876 0.170831C10.697 0.0614325 10.8454 -2.60687e-05 11.0001 -2.60552e-05C11.1548 -2.60417e-05 11.3032 0.0614326 11.4126 0.170831C11.522 0.28023 11.5834 0.428608 11.5834 0.58332L11.5834 7.34212Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_241_1210"
          x="0"
          y="0"
          width="22.0005"
          height="22.0009"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_1210" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_1210" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default DownloadIcon;

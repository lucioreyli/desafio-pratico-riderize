import React from 'react'
import { SvgFromXml } from 'react-native-svg'

const xml = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 12.18V4C16 1.79 14.21 0 12 0C9.79 0 8 1.79 8 4V14C8 15.1 7.1 16 6 16C4.9 16 4 15.1 4 14V5.82C5.16 5.4 6 4.3 6 3C6 1.34 4.66 0 3 0C1.34 0 0 1.34 0 3C0 4.3 0.84 5.4 2 5.82V14C2 16.21 3.79 18 6 18C8.21 18 10 16.21 10 14V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V12.18C12.84 12.59 12 13.69 12 15C12 16.66 13.34 18 15 18C16.66 18 18 16.66 18 15C18 13.7 17.16 12.6 16 12.18ZM3 4C2.45 4 2 3.55 2 3C2 2.45 2.45 2 3 2C3.55 2 4 2.45 4 3C4 3.55 3.55 4 3 4ZM15 16C14.45 16 14 15.55 14 15C14 14.45 14.45 14 15 14C15.55 14 16 14.45 16 15C16 15.55 15.55 16 15 16Z" fill="black"/>
</svg>
`
export const RouteIcon = () => <SvgFromXml xml={xml} width={32} />
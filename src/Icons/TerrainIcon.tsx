import React from 'react'
import { SvgFromXml } from 'react-native-svg'

const xml = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.3335 6L10.1135 11.63L11.3635 13.3L14.3335 9.33L19.3335 16H10.8735L6.8635 10.63L1.3335 18H23.3335L14.3335 6ZM5.3335 16L6.8535 13.97L8.3735 16H5.3335Z" fill="black"/>
</svg>
`
export const TerrainIcon = () => <SvgFromXml xml={xml} width={32} />
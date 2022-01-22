import React from 'react'
import { SvgFromXml } from "react-native-svg";

const xml = `
<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99 17.0051L1.62 11.2751L0 12.5351L9 19.5351L18 12.5351L16.37 11.2651L8.99 17.0051ZM9 14.4651L16.36 8.73509L18 7.46509L9 0.465088L0 7.46509L1.63 8.73509L9 14.4651ZM9 2.99509L14.74 7.46509L9 11.9351L3.26 7.46509L9 2.99509Z" fill="black"/>
</svg>
`
export const LayerIcon = () => <SvgFromXml xml={xml} width={32} />
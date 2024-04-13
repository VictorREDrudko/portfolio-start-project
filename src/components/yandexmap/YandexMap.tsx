import styled from "styled-components"
import { Theme } from "../../styles/Theme"

export const YandexMap = () => {
  return (
      <MapWrapper>
        <MapIframe src="https://yandex.by/map-widget/v1/?ll=27.500603%2C53.883326&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3Mjk3MRJB0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0J_RgNGL0LvRg9GG0LrQsNGPINCy0YPQu9GW0YbQsCwgNDYiCg25_dtBFWCIV0I%2C&z=17.18">
        </MapIframe>
      </MapWrapper>
  )
}

const MapWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 4px 4px 5px 5px rgba(255, 255, 255, 0.2);
  flex-grow: 1;
`

const MapIframe = styled.iframe`
  position: relative;
  min-width: 600px;
  width: 100%;
  height: 400px;
`
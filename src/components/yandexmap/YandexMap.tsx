import styled from "styled-components"

export const YandexMap = () => {
  return (
    <StyledYandexMap>
      <MapWrapper>
        <MapLink1 href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps">Минск</MapLink1>
        <MapLink2 href="https://yandex.by/maps/157/minsk/house/Zk4Ycg9mQEwFQFtpfXVxcnhkYw==/?ll=27.489392%2C53.903478&utm_medium=mapframe&utm_source=maps&z=16.78">Яндекс Карты</MapLink2>
        <MapIframe src="https://yandex.by/map-widget/v1/?ll=27.489392%2C53.903478&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY4NDQ0NRJD0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0LLRg9C70ZbRhtCwINCQ0LTQvtC10Z7RgdC60LDQs9CwLCA0MCIKDV3l20EVKZ1XQg%2C%2C&z=16.78">
        </MapIframe>
      </MapWrapper>
    </StyledYandexMap>
  )
}

const StyledYandexMap = styled.div`
  border: 1px solid red;
`
const MapWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const MapIframe = styled.iframe`
  position: relative;
  min-width: 600px;
  min-height: 300px;
`

const MapLink1 = styled.a`
  color: #eee;
  font-size: 12px;
  position:absolute;
  top: 0px;
`
const MapLink2 = styled.a`
  color: #eee;
  font-size: 12px;
  position:absolute;
  top: 14px;
`


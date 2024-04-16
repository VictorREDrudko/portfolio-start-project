import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';
import './../../styles/slider.css'

type SlidePropsType = {
  iconId: string,
  text: string,
  name: string,
  viewBox: string
}

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <FlexWrapper direction="column" align="center">
        <Icon iconId={props.iconId} viewBox={props.viewBox} width="150px" height="100px"/>
        <S.Text>{props.text}</S.Text>
        <S.Name>{props.name}</S.Name>
      </FlexWrapper>
    </S.Slide>
  )
}

const items = [
  <Slide  text={"Study time 2002-2006! Specialty: military engineer (diploma with honors)! 2012-2014 advanced training (specialist of the highest category)!"} 
          name={"Military Academy of the Republic of Belarus"} 
          iconId={"academy"}
          viewBox={"0 50 1900 1929"}/>,
  <Slide  text={"Study time 2020-2023 (course JS / Front-end)! Gained fundamental knowledge of basic front-end development technologies"} 
          name={"The Rolling Scopes School"} 
          iconId={"rsschool"}
          viewBox={"0 350 1900 1129"}/>,
  <Slide  text={"Study time 2024-...! Middle+ Level Front-end Development Training! In progress..."} 
          name={"IT-Incubator"} 
          iconId={"incubator"}
          viewBox={"0 50 1900 1929"}/>,
];

export const Slider: React.FC = () => (
  <S.Slider>
    <AliceCarousel  mouseTracking
                    items={items}/>
  </S.Slider>
);



// import { Icon } from "../icon/Icon"
// import { FlexWrapper } from "../FlexWrapper"
// import { S } from "./Slider_Styles"
// import React from "react"

// export const Slider: React.FC = () => {
//   return (
//     <S.Slider>
//       <S.Slide>
//         <FlexWrapper direction="column" align="center">
//           <Icon iconId={"academy"} viewBox="0 50 1900 1929" width="150px" height="100px"/>
//           <S.Text>Study time 2002-2006! Specialty: military engineer (diploma with honors)! 2012-2014 advanced training (specialist of the highest category)!</S.Text>
//           <S.Name>Military Academy of the Republic of Belarus</S.Name>
//         </FlexWrapper>
//         <S.Pagination>
//           <span></span>
//           <span className={"active"}></span>
//           <span></span>
//         </S.Pagination>
//       </S.Slide>
//     </S.Slider>
//   )
// }
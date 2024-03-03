import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import rubej from "./../../../assets/rubej.jpg";
import rois from "./../../../assets/ROIS.jpg";

const itemsProjects = ["Рубежи охраны", "Сооружения", "Заграждения"]

export const Projects = () => {
  return (
    <StyledProjects>
      <TitleSection>Полевые проекты</TitleSection>
      <Menu menuItems={itemsProjects}/>
      <FlexWrapper justify="space-around">
        <Project title={"Подготовка рубежа охраны"}
                 text={"Полевой проект по подготовке к оборудованию рубежа охраны (очистка от ДКР, планировочные работы, отрывка рвов)"}
                 src={rubej}
                 alt={"Рубеж охраны"}
        />
        <Project title={"РОИС"}
          text={"Полевой проект по оборудованию рубежа основных инженерных сооружений дорогой, КСП, заграждением из сетки сварной"}
          src={rois}
          alt={"РОИС"}
        />
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  background-color: yellow;
  min-height: 100vh;
`
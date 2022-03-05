import {ButtonInfo2, Title} from "./projectDesign";
import styled from "styled-components";
import {ButtonInfo} from "./general-tag/tag";

const Content = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
`
const ProjectDesignV3 = () =>{
    return(
        <div>
            <Title>DỰ ÁN THIẾT KẾ VIỆT DŨNG DESIGN TỪNG THỰC HIỆN</Title>
            <Content>
                <ButtonInfo>Nội Thất chung cư</ButtonInfo>
                <ButtonInfo2 href={"tel:0961211861"}>Hotline:0961.211.861</ButtonInfo2>
                <ButtonInfo>Nội Thất nhà phố</ButtonInfo>
            </Content>
        </div>
    )
}
export default ProjectDesignV3;
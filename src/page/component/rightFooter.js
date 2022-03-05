import styled from "styled-components";
import {Li, Ul} from "./projectDesignV2";

const Title = styled.h4`
  color: white;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 600;
`
const RightFooter = ()=>{
    return(
        <div>
            <Title>tiêu chí của chúng tôi:</Title>
            <Ul>
                <Li>Tận Tâm</Li>
                <Li>Uy Tín</Li>
                <Li>Trách nhiệm</Li>
                <Li>chuẩn tiến độ</Li>
            </Ul>
        </div>
    )
}
export default RightFooter;
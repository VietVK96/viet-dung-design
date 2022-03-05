import {ButtonInfo2, Description, Title} from "./projectDesign";
import styled from "styled-components";
import {ButtonInfo} from "./general-tag/tag";

export const Ul = styled.ul`
  max-width: 480px;
  text-align: left;
`
export const Li = styled.li`
  list-style-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
  font-size: 20px;
  color: white;
`
const ProjectDesignV2 = () =>{
    return(
        <div>
            <Title>DỰ ÁN THIẾT KẾ VIỆT DŨNG DESIGN TỪNG THỰC HIỆN</Title>
            <Description>Chúng tôi là đơn vị chuyên thi công trọn gói:</Description>
            <Ul>
                <Li>Cam kết chất lượng vật tư.</Li>
                <Li>Đảm bảo tiến độ.</Li>
                <Li>Bảo hành công trình.</Li>
                <Li>Tư vấn giá thành vật tư, xây dựng.</Li>
            </Ul>
            <div>
                <div style={{
                    position: "relative",
                    left: "10%",
                    marginTop:"75px"
                }}>
                    <ButtonInfo>Thi Công xây mới</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "30%",
                    marginTop:"75px"
                }}>
                    <ButtonInfo>cải tạo chung cư</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "50%",
                    marginTop:"75px"
                }}>
                    <ButtonInfo>cải tạo nhà phố</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "30%",
                    marginTop:"75px"
                }}>
                    <ButtonInfo2 href={"tel:0961211861"}>hotline:0961.211.861</ButtonInfo2>
                </div>
            </div>
        </div>
    )
}
export default ProjectDesignV2;
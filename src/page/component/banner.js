import banner from '../../image/banner.jpg'
import styled from "styled-components";
import {ButtonInfo} from "./general-tag/tag";
import logo from "../../image/logo2.png"

const BannerBox = styled.div`
  width: 100%;
  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const BannerInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
`;
const Logo = styled.img`
  width: 200px;
`
const TextInfo = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: rgb(255 218 3);
  font-size: 32px;
  font-weight: 600;
  z-index: 99;
  margin-bottom: 20px;
`

const Banner = () => {
    return (
        <BannerBox>
            <BannerImg src={banner} alt={banner}/>
            <BannerInfo>
                <Logo src={logo} alt={"logo"}/>
                <TextInfo>Thiết kế nội ngoại thất</TextInfo>
                <div>
                    <span style={{marginRight:"15px"}}><ButtonInfo href={"#"}>Miễn phí tư vấn</ButtonInfo></span>
                    <ButtonInfo href="tel:0961211861"><span style={{fontWeight:700}}>0961.211.861</span></ButtonInfo>
                </div>
            </BannerInfo>
        </BannerBox>
    )
}
export default Banner;
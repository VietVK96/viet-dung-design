import Banner from "./component/banner";
import styled from "styled-components";
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Service from "./component/service";
import Advise from "./component/advise";
import ProjectDesign from "./component/projectDesign";
import Carousel1 from "./component/Carousel";
import {listImage1, listImage2, listImage3} from "./component/data/data";
import ProjectDesignV2 from "./component/projectDesignV2";
import ProjectDesignV3 from "./component/projectDesignV3";
import PriceBox from "./component/PriceBox";
import Properties from "./component/properties";
import Address from "./component/address";
import FooterLeft from "./component/footerLeft";
import RightFooter from "./component/rightFooter";
import phone from "../image/icons8-phone-100.png"
import face from "../image/icons8-facebook-48.png"

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #1ba62c, #073a90);
  position: relative;
`
const BodyBox = styled.div`
  width: 80%;
  margin: auto;
`
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: white;
`
const TitleLogo = styled.span`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: yellow;
`
const Contact = styled.div`
  position: fixed;
  left: 20px;
  bottom: 40px;
  width: 100px;
`
const list1 = [
    "Lên ý tưởng.",
    "Phối cảnh công trình.",
    "Hoàn thiện hồ sơ thi công, kết cấu, điện nước",
    "Tiến độ <15 ngày"
]
const list2 = [
    "Lên ý tưởng phối cảnh 2d.",
    "Lên ý tưởng phối cảnh 3d.",
    "Hoàn thiện hồ sơ thi công",
    "Tiến độ <15 ngày",
]
const list3 = [
    'Thiết kế ngoại thất',
    "Thiết kế nội thất"
]
const Home = () => {
    return (
        <Container>
            <Banner/>
            <BodyBox>
                <Row style={{borderBottom: "1px solid"}}>
                    <Col span={16}>
                        <Service/>
                    </Col>
                    <Col span={8}>
                        <Advise/>
                    </Col>
                </Row>
                <Row style={{marginTop: 30}}>
                    <Col span={12}>
                        <ProjectDesign/>
                    </Col>
                    <Col span={12}>
                        <Carousel1 listImage={listImage1}/>
                    </Col>
                </Row>
                <Row style={{borderBottom: "1px solid", marginTop: 30}}>
                    <Col span={12}>
                        <ProjectDesignV2/>
                    </Col>
                    <Col span={12}>
                        <Carousel1 listImage={listImage2}/>
                    </Col>
                </Row>
                <Row style={{borderBottom: "1px solid", marginTop: 30}}>
                    <Col span={24} style={{marginBottom: "50px"}}>
                        <ProjectDesignV3/>
                    </Col>
                    <Col span={11}>
                        <Carousel1 listImage={listImage3}/>
                    </Col>
                    <Col span={11} style={{marginLeft: "80px"}}>
                        <Carousel1 listImage={listImage1}/>
                    </Col>
                </Row>
                <Row style={{marginTop: 30, borderBottom: "1px solid", paddingBottom: 30}}>
                    <Col span={24}>
                        <Title>Bảng giá thiết kế <TitleLogo>Việt dũng design</TitleLogo></Title>
                        <div style={{display: "flex", justifyContent: "space-around", marginTop: "50px"}}>
                            <PriceBox title={"Thiết kế ngoại thất"} price={"90.000đ-120.000đ"} list={list1}/>
                            <PriceBox title={"Thiết kế nội thất"} price={"150.000đ"} list={list2}/>
                            <PriceBox title={"Thiết kế nội ngoại thất"} price={"200.000đ - 250.000đ "} list={list3}/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 30, borderBottom: "1px solid"}}>
                    <Col span={24}>
                        <Properties/>
                    </Col>
                </Row>
                <Row style={{marginTop: 30, borderBottom: "1px solid"}}>
                    <Col span={16}><Address/></Col>
                    <Col span={8}><Advise/></Col>
                </Row>
                <Row style={{marginTop: 30, borderBottom: "1px solid #adacac", paddingBottom: 40}}>
                    <Col span={14}><FooterLeft/></Col>
                    <Col span={10}><RightFooter/></Col>
                </Row>
                <Row style={{marginTop: 30, paddingBottom: 40}}>
                    <Col span={24}>
                        <div style={{color: "#ffffff", textAlign: "center"}}>©2022 Allrights reserved by vietvk</div>
                    </Col>
                </Row>
            </BodyBox>
            <Contact>
                <div>
                    <a href={"https://www.facebook.com/kientrucvaxaydungvietdung"}>
                        <img style={{width:85,marginLeft:"10px"}} alt={"face"} src={face}/>
                    </a>
                </div>
                <div>
                    <a href={"tel: 0961211861"}>
                        <img alt={"phone"} src={phone}/>
                    </a>
                </div>
            </Contact>
        </Container>
    )
}
export default Home;
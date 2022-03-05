import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const Img = styled.img`
  width: 100%;
  height: 750px;
  object-fit: cover;
`
const Carousel1 = ({listImage}) => {
    return (
        <Carousel
            autoPlay={true}
            dynamicHeight={true}
            interval={2000}
            infiniteLoop={true}
            emulateTouch={true}
        >
            {listImage.map((img, index) => {
                return (
                    <div key={index}>
                        <Img alt={"image"} src={img}/>
                        <img alt={"img"} style={{
                            height: "70px",
                            objectGit: "cover"
                        }} src={img}/>
                    </div>
                )
            })}
        </Carousel>
    );
}
export default Carousel1;
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from "react";
import AboutImage from "../../images/aboutImg.png";
import {
  AboutContent,
  AboutSvg,
  AboutWrapper,
  AboutRows,
  AboutColumn1,
  AboutColumn2,
  Question,
  Heading,
  Description,
  Title,
  Text,
  ImgWrap,
  Img,
} from "./Styles";

const About = () => {

  useEffect(() => {
    AOS.init({duration:3000});
  }, [])
  return (
    <AboutContent id='About'>
      <AboutSvg>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </AboutSvg>
      <AboutWrapper >
        <AboutRows>
          <AboutColumn1 data-aos="fade-right">
            <Text>
              <Question>Qu'est-ce-que Hortensia?</Question>
              <Heading>Avec Peace In Love comme slogan</Heading>
              <Description>
                <Title>HORTENSIA Organisation</Title> est une structure
                Artistique et humanitaire dont la Mission est de Communiquer
                pour pacifier en apportant a chacun et a tous la vraie paix et
                le vrai amour du coeur. Ayant pour vision d'un present et un
                avenir ou les relations des jeunes des differentes cultures sont
                rendue plus humaines et plus proches. Oeuvrant dans
                l'art,culture et Education;Paix et Engagement;Entrepreneuriat
                social.
              </Description>
            </Text>
          </AboutColumn1>
          <AboutColumn2 data-aos="fade-left">
            <ImgWrap>
              <Img src={AboutImage} alt="AboutImage" />
            </ImgWrap>
          </AboutColumn2>
        </AboutRows>
      </AboutWrapper>
    </AboutContent>
  );
};

export default About;

import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import {
  FooterContainer,
  FooterLinks,
  FooterWrapper,
  FooterItems,
  FooterItemsTitle,
  FooterItem,
  FooterSocialMedia,
  SocialMediaWrap,
  FooterLogo,
  FooterImg,
  FooterRight,
  SocialMediaIcons,
  SocialMediaLinks,
} from "./Styles";
import FooterImage from "../../../images/logoH2.png";

const Footer = () => {
  const toggleHome = ()=>{
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterWrapper>
          <FooterItems>
            <FooterItemsTitle>About Us</FooterItemsTitle>
            <FooterItem href="#Sign-up">Gerance</FooterItem>
            <FooterItem href="#Sign-up">Abonnement</FooterItem>
            <FooterItem href="#Sign-up">Termes de Services</FooterItem>
            <FooterItem href="#Sign-up">Carriere</FooterItem>
          </FooterItems>
          <FooterItems>
            <FooterItemsTitle>Contacts</FooterItemsTitle>
            <FooterItem href="#Sign-up">Address</FooterItem>
            <FooterItem href="#Sign-up">Telephone</FooterItem>
            <FooterItem href="#Sign-up">Fax</FooterItem>
            <FooterItem href="#Sign-up">PO.Box</FooterItem>
          </FooterItems>
        </FooterWrapper>
        <FooterWrapper>
          <FooterItems>
            <FooterItemsTitle>Videos</FooterItemsTitle>
            <FooterItem href="#Sign-up">Submit video</FooterItem>
            <FooterItem href="#Sign-up">Ambassadors</FooterItem>
            <FooterItem href="#Sign-up">Agency</FooterItem>
            <FooterItem href="#Sign-up">Whatch out</FooterItem>
          </FooterItems>
          <FooterItems>
            <FooterItemsTitle>Social Media</FooterItemsTitle>
            <FooterItem href="https://www.facebook.com/hortensia.org">Facebook</FooterItem>
            <FooterItem href="https://www.linkedin.com/company/hortensia-organisation">LinkedIn</FooterItem>
            <FooterItem href="https://twitter.com/HortensiaOrg">Twitter</FooterItem>
            <FooterItem href="#Sign-up">Youtube</FooterItem>
          </FooterItems>
        </FooterWrapper>
      </FooterLinks>
      <FooterSocialMedia>
        <SocialMediaWrap>
          <FooterLogo onClick={toggleHome}>
            <FooterImg src={FooterImage} alt={FooterImage} />
          </FooterLogo>
          <FooterRight>© HORTENSIA 2021,all right reserved</FooterRight>
          <SocialMediaIcons>
            <SocialMediaLinks href="https://www.facebook.com/hortensia.org">
              <SocialIcon network="facebook" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <SocialIcon network="youtube" />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://twitter.com/HortensiaOrg">
              <SocialIcon network="twitter" />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://www.linkedin.com/company/hortensia-organisation">
              <SocialIcon network="linkedin" />
            </SocialMediaLinks>
          </SocialMediaIcons>
        </SocialMediaWrap>
      </FooterSocialMedia>
    </FooterContainer>
  );
};

export default Footer;

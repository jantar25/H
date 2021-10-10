import React from "react";
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
import FooterImage from "../../images/logoH2.png";

const Footer = () => {
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
            <FooterItem href="#Sign-up">Facebook</FooterItem>
            <FooterItem href="#Sign-up">Instagram</FooterItem>
            <FooterItem href="#Sign-up">Twitter</FooterItem>
            <FooterItem href="#Sign-up">Youtube</FooterItem>
          </FooterItems>
        </FooterWrapper>
      </FooterLinks>
      <FooterSocialMedia>
        <SocialMediaWrap>
          <FooterLogo smooth to="#Slider">
            <FooterImg src={FooterImage} alt={FooterImage} />
          </FooterLogo>
          <FooterRight>© HORTENSIA 2021,all right reserved</FooterRight>
          <SocialMediaIcons>
            <SocialMediaLinks href="/">
              <SocialIcon network="facebook" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <SocialIcon network="instagram" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <SocialIcon network="youtube" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <SocialIcon network="twitter" />
            </SocialMediaLinks>
          </SocialMediaIcons>
        </SocialMediaWrap>
      </FooterSocialMedia>
    </FooterContainer>
  );
};

export default Footer;

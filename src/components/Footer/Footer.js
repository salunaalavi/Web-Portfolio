import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Section } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Section id = "about">
        <LinkList>
          <LinkColumn>
            <LinkTitle>Telpon & WhatsApp</LinkTitle>
            <LinkItem href = "+62 813-2704-0733">+62 813-2704-0733</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href = "mailto:salunaalavi@gmail.com">salunaalavi@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Kerja Optimal Output Maksimal</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/salunaalavi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/saluna-alavi-6a0891227">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/salunaalavi">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </Section>
    </FooterWrapper>
  );
};

export default Footer;

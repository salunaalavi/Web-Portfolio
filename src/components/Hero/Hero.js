import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Saluna Alavi | Web Developer
      </SectionTitle>
      <SectionText>
        Saya merupakan mahasiswa semester lima Jurusan Teknik Informatika di Universitas Pembangunan Nasional "Veteran" 
        Yogyakarta. Saya memiliki ketertarikan lebih pada dunia pengembangan web. 
      </SectionText>
      <Button onClick={() => window.location = "mailto:salunaalavi@gmail.com"}>
        Hubungi saya
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Project Open-Source'},
  { number: 100, text: 'Nilai Sempurna UNBK Bahasa Inggris', },
  { number: 2, text: 'Sertifikasi Kompetensi', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Prestasi</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

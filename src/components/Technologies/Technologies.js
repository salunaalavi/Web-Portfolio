import React from 'react';
import { DiFirebase, DiReact, DiCloud9 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id= "tech">
    <SectionDivider />
    <SectionTitle>Teknologi</SectionTitle>
    <SectionText>
      Saya telah bekerja dengan berbagai macam teknologi dalam dunia web development. Dari Back-End, Cloud Computing, Internet of Things, hingga Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Berpengalaman dengan <br />
            React dan Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Berpengalaman dengan <br />
            Laravel, MySQL dan JSON
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCloud9 size = "3rem" />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Berpengalaman dengan <br />
            Huawei FusionCompute
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

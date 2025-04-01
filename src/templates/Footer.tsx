import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="https://bigint.co">Bigint Nft Launchpad</Link>
        </li>
        
        
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

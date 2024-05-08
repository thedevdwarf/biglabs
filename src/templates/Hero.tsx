import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Blockchain Technology\n'}
            <span className="text-biglabs-100">Integrator</span>
          </>
        }
        description="Web3 Solutions for companies"
        button={
          <Link href="https://forms.gle/RRbXDbGQsdXmweAeA" target="_blank">
            <Button xl>Contact Us</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

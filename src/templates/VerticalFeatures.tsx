import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Web3 software development"
    description="Do you want to do blockchain-based development but need an expert team? Check out what we've done"
  >
    <VerticalFeatureRow
      title="Smart Contract Development"
      description="Nft Marketplace, Nft collection, Nft Launchpad, Airdrop Launcher, Inscriptions Launchpad"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Blockchain Indexer"
      description="If you need a fast and secure indexer with up-to-date technologies, you are in the right place. Meet the lightness of Javascript and the power of Mongodb"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Dapps"
      description="Developing a Dapp is not just about developing a smart contract, UI/UX is very important."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

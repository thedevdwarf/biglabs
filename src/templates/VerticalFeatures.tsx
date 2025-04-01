import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="About Us"
    description="Biglabs is a product-driven Web3 development studio focused exclusively on building and scaling our in-house platforms. Our mission is to shape the future of decentralized experiences — from NFT marketplaces to on-chain gaming and launchpad infrastructures. We do not offer development services to third-party clients. All of our work is directed toward the growth of our own product (Bigint)."
  >
    <VerticalFeatureRow
      title="Our Products"
      description="Bigint, A fully decentralized NFT marketplace and launchpad ecosystem, currently live on the zkSync network. Bigint includes tools like a freemint engine, NFT airdrop module, and inscription launchpad."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Blockchain Indexer"
      description="We developed a fast and secure indexer with up-to-date technologies, Javascript and the power of Mongodb"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Dapps"
      description="We developed seamless UI/UX and secure smart contract for Bigint"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

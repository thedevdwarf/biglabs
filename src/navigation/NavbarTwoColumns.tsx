import Link from 'next/link';

import { Logo } from '@/templates/Logo';

const NavbarTwoColumns = () => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };

// components/HeaderClient.jsx
'use client'; // This is a Client Component

import { useRouter } from 'next/navigation';

const HeaderClient = () => {
  const { asPath } = useRouter();

  return (
    <div>
      {/* You can add any client-side logic or components that depend on the router here */}
      <span>Current path: {asPath}</span>
    </div>
  );
};

export default HeaderClient;
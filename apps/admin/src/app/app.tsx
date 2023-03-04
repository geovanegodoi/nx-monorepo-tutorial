// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Banner } from '@nx-monorepo-tutorial/common-ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Banner text="Welcome to our admin app." />
      <NxWelcome title="admin" />

      <div />
    </>
  );
}

export default App;

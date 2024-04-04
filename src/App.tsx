import {MainLayout} from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';
import { SiteProvider } from '@/providers/SiteProvider';

function App() {
  return (
    <>
      <SiteProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </SiteProvider>
    </>
  );
}

export default App;

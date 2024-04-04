import {CustomMenubar} from '@/layouts/CustomMenubar';
import { Footer } from '@/layouts/Footer';
import {Sidebar} from '@/layouts/Sidebar';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <CustomMenubar />
      <Sidebar />
      <div className="c-container">
        {children}
      </div>
      <Footer />
    </>
  );
}


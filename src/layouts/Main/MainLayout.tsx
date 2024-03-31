import MainMenubar from '@/layouts/Main/MainMenubar';
import { MainFooter } from '@/layouts/Main/MainFooter';

type Props = {
  children: React.ReactNode;
};

function LayoutMain({ children }: Props) {
  return (
    <>
      <MainMenubar />
      <div className="c-container">
        {children}
      </div>
      <MainFooter className="mt-auto" />
    </>
  );
}

export default LayoutMain;

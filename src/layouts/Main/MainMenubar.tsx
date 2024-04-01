import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import * as Constants from '@/constants';
import { useSite } from '@/providers/SiteProvider';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';

function MainMenubar() {
  const {toggleSidebar} = useSite()
  
  const menubarItems = [
    { label: Constants.HOME },
    { label: Constants.PROJECTS },
    { label: Constants.EXPERIENCE },
    { label: Constants.CONTACT },
  ];

  function handleClick(label: string) {
    const getElement = (id: string): Element | null => {
      return document.querySelector(`#${id}`);
    };
    const scrollToView = (element: Element) => {
      element.scrollIntoView({ behavior: 'smooth' });
    };

    if (label == Constants.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = getElement(label);
      if (element) {
        scrollToView(element);
      }
    }
  }

  return (
    <Menubar className={cn('fixed z-10 w-full flex justify-end p-7 px-1 md:p-7')}>
      <div className='md:hidden'>
        <Button variant="outline" size="icon" className='border-none' onClick={() => toggleSidebar()}>
          <Icon name="Menu" size={24}></Icon>
        </Button>
      </div>
      <div className="hidden md:flex">
        {menubarItems.map((item) => (
          <MenubarMenu key={item.label}>
            <MenubarTrigger onClick={() => handleClick(item.label)}>{item.label}</MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
    </Menubar>
  );
}

export default MainMenubar;

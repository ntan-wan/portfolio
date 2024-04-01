import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import * as Constants from '@/constants';
import { useContext } from 'react';
import { SiteContext } from '@/contexts/SiteContext';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';

function MainMenubar() {
  const {setSiteInfo} = useContext(SiteContext)
  
  const menubarItems = [
    { label: Constants.HOME },
    { label: Constants.PROJECTS },
    { label: Constants.EXPERIENCE },
    { label: Constants.CONTACT },
  ];

  function handleClick(label: string) {
    const getElement = (id: string): Element => {
      return document.querySelector(`#${id}`);
    };
    const scrollToView = (element: Element) => {
      element.scrollIntoView({ behavior: 'smooth' });
    };

    if (label == Constants.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToView(getElement(label));
    }
  }
  function handleMenuIcon() {
    setSiteInfo((prevState) => ({...prevState, sidebarisOpen: true}));
  }

  return (
    <Menubar className={cn('fixed z-10 w-full flex justify-end p-7 px-1 md:p-7')}>
      <div className='md:hidden'>
        <Button variant="outline" size="icon" className='border-none' onClick={() => handleMenuIcon()}>
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

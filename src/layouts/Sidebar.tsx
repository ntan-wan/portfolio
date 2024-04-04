import { useSite } from '@/providers/SiteProvider';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import * as Constants from '@/constants';

export function Sidebar() {
  const { sidebarIsOpen, toggleSidebar } = useSite();
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
    toggleSidebar();
  }

  function handleOpenChange(isOpen: boolean) {
    if (!isOpen) {
      toggleSidebar();
    }
  }

  return (
    <Sheet open={sidebarIsOpen} onOpenChange={(isOpen) => handleOpenChange(isOpen)}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-3">
          {menubarItems.map((item) => (
            <Button onClick={() => handleClick(item.label)} key={item.label} variant="ghost">
              {item.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

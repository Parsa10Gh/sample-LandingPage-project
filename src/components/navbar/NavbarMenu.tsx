import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavbarMenu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Demos</MenubarItem>
          <MenubarSeparator/>
          <MenubarItem>Pages</MenubarItem>
          <MenubarSeparator/>
          <MenubarItem>support</MenubarItem>
          <MenubarSeparator/>
          <MenubarItem>Contact</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default NavbarMenu;

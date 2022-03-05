export interface MenuData {
  submenus: SubmenuData[];
}

export interface SubmenuData {
  title: string;
  //url: string;
  items: MenuItemData[];
}

export interface MenuItemData {
  title: string;
  //url: string;
  subitems?: MenuSubitemData[];
}

export interface MenuSubitemData {
  title: string;
  //url: string;
}

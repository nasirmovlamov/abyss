import { CaveTabsInterface } from './../../state-Interfaces/Cave_Interfaces/CaveTabs.interface'

//#region PROFILE TABS
export const profileTabs = [
  {
    id: 0,
    text: 'Info',
    icon: 'info',
    link: 'linkToInfo',
    active: true,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'info',
  },
  {
    id: 1,
    text: 'Subscription',
    icon: 'info',
    link: 'linkToSubscription',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'subscription',
  },
  {
    id: 2,
    text: 'Settings',
    icon: 'info',
    link: 'linkToSettings',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'settings',
  },
]
//#endregion PROFILE TABS

//#region Inventory TABS
export const inventoryTabs = [
  {
    id: 0,
    text: 'Saved',
    icon: 'info',
    link: 'linkToSaved',
    active: true,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'saved',
  },
  {
    id: 1,
    text: 'Created',
    icon: 'info',
    link: 'linkToCreated',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'created',
  },
  {
    id: 2,
    text: 'Playlist',
    icon: 'info',
    link: 'linkToPlaylist',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'playlist',
  },
  {
    id: 3,
    text: 'History',
    icon: 'info',
    link: 'linkToPlaylist',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'history',
  },
]
//#endregion Inventory TABS

//#region Library TABS
export const libraryTabs = [
  {
    id: 0,
    text: 'Saved',
    icon: 'info',
    link: 'linkToSaved',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'saved',
  },
  {
    id: 1,
    text: 'Created',
    icon: 'info',
    link: 'linkToCreated',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'created',
  },
  {
    id: 2,
    text: 'Playlist',
    icon: 'info',
    link: 'linkToPlaylist',
    active: true,
    isLast: false,
    isFirst: false,
    hovered: false,
    name: 'playlist',
  },
  {
    id: 3,
    text: 'History',
    icon: 'info',
    link: 'linkToHostory',
    active: false,
    isLast: false,
    isFirst: false,
    hovered: false,
    name: 'history',
  },
]
//#endregion Library TABS

//#region Shop TABS
export const shopTabs = [
  {
    id: 0,
    text: 'Info',
    icon: 'info',
    link: 'linkToSaved',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'info',
  },
  {
    id: 1,
    text: 'Products',
    icon: 'info',
    link: 'linkToCreated',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'products',
  },
  {
    id: 2,
    text: 'M.Analaysis',
    icon: 'info',
    link: 'linkToPlaylist',
    active: true,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'analaysis',
  },
  {
    id: 3,
    text: 'Settings',
    icon: 'info',
    link: 'linkToHostory',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'settings',
  },
]
//#endregion Shop TABS

//#region Note TABS
export const notesTabs = [
  {
    id: 0,
    text: 'Note',
    icon: 'info',
    link: 'linkToSaved',
    active: true,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'note',
  },
]
//#endregion Note TABS

//#region Guide TABS
export const guideTabs = [
  {
    id: 0,
    text: 'Guide',
    icon: 'info',
    link: 'linkToSaved',
    active: false,
    isLast: false,
    isFirst: true,
    hovered: false,
    name: 'guide',
  },
]
//#endregion Guide TABS

export const caveTabsState: CaveTabsInterface = {
  profile: profileTabs,
  inventory: inventoryTabs,
  library: libraryTabs,
  shop: shopTabs,
  notes: notesTabs,
  guide: guideTabs,
}

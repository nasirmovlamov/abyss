import Cave_Guide from './Cave_Guide'
import Cave_Inventory from './CaveInventory/Cave_Inventory'
import Cave_Library from './Cave_Library'
import Cave_Notes from './Cave_Notes'
import Cave_Profile from './CaveProfile/Cave_Profile'
import Cave_Profile_Info from './CaveProfile/Cave_Profile_Info'
import Cave_Profile_Settings from './CaveProfile/Cave_Profile_Settings'
import Cave_Profile_Subscription from './CaveProfile/Cave_Profile_Subscription'
import Cave_Shop from './Cave_Shop'

export const cave_windows: any = {
  profile: <Cave_Profile />,
  inventory: <Cave_Inventory />,
  library: <Cave_Library />,
  notes: <Cave_Notes />,
  shop: <Cave_Shop />,
  guide: <Cave_Guide />,
}

export const cave_profile_sections: any = {
  info: <Cave_Profile_Info />,
  subscription: <Cave_Profile_Subscription />,
  settings: <Cave_Profile_Settings />,
}

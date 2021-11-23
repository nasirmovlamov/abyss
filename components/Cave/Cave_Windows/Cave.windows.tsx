import CaveProfile from "./CaveProfile";
import Cave_Guide from "./Cave_Guide";
import Cave_Inventory from "./Cave_Inventory";
import Cave_Library from "./Cave_Library";
import Cave_Notes from "./Cave_Notes";
import Cave_Shop from "./Cave_Shop";

export const cave_windows = {
    'profile':<CaveProfile/>,
    'inventory':<Cave_Inventory/>,
    'library':<Cave_Library/>,
    'notes':<Cave_Notes/>,
    'my-shop' : <Cave_Shop/>,
    'guide': <Cave_Guide/>
}
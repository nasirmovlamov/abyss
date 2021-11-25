import { CaveTabsInterface } from './../../state-Interfaces/Cave_Interfaces/CaveTabs.interface';



//#region PROFILE TABS 
export const profileTabs = [{
    id:0,
    text:'Info',
    icon:'info',
    link:'linkToBlock',
    active:false,
    isLast:false,
    isFirst:true,
    hovered:false

},
{
    id:1,
    text:'Info2',
    icon:'info',
    link:'linkToBlock',
    active:false,
    isLast:false,
    isFirst:true,
    hovered:false

},
{
    id:2,
    text:'Info3',
    icon:'info',
    link:'linkToBlock',
    active:true,
    isLast:false,
    isFirst:true,
    hovered:false

},
{
    id:3,
    text:'Info4',
    icon:'info',
    link:'linkToBlock',
    active:false,
    isLast:false,
    isFirst:true,
    hovered:false

},
{
    id:4,
    text:'Info5',
    icon:'info',
    link:'linkToBlock',
    active:false,
    isLast:false,
    isFirst:true,
    hovered:false

}]
//#endregion PROFILE TABS 


export const  caveTabsState:CaveTabsInterface = {
    profileTabs:profileTabs
}


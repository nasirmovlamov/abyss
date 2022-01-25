import { cave_tabs } from 'app/store/slices/CaveFeatures/CaveTabs.slice';
import { useAppSelector } from 'app/store/states/store.hooks';

import { cave_profile_sections } from '../Cave.windows';

const CaveProfile = () => {
  const caveTabs = useAppSelector(cave_tabs)
  const caveProfileTabs = caveTabs['profile']
  const constActiveTab = caveProfileTabs.filter((tab: any) => tab.active)[0]

  return <div>{cave_profile_sections[constActiveTab.name]}</div>
}

export default CaveProfile

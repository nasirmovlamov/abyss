import { cave_profile_sections } from '../Cave.windows';
import { cave_tabs } from '../../../../../store/slices/CaveFeatures/CaveTabs.slice';
import { useAppSelector } from '../../../../../store/states/store.hooks';

interface Props { }

const CaveProfile = (props: Props) => {
  const caveTabs = useAppSelector(cave_tabs)
  const caveProfileTabs = caveTabs['profile']
  const constActiveTab = caveProfileTabs.filter((tab:any) => tab.active)[0]

  return <div>{cave_profile_sections[constActiveTab.name]}</div>
}

export default CaveProfile

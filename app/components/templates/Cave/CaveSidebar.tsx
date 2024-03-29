import {
  faBookReader,
  faBox,
  faInfoCircle,
  faShoppingBag,
  faSignOutAlt,
  faStickyNote,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cave_side_data } from 'app/store/slices/CaveFeatures/CaveSide.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { selectAsyncCaveWindow } from 'app/store/thunks/Cave/Cave.thunk';
import { userLogout } from 'app/store/thunks/User.thunk';
import {
  CaveSide_section_Sty,
  CaveSidebar_Sty,
} from 'app/styles/styled-components/base/modules/Cave_Style/CaveSidebar.style';
import { useRouter } from 'next/router';

interface Props {}

const CaveSidebar = (props: Props) => {
  const dispatch = useAppDispatch()
  const caveSideData = useAppSelector(cave_side_data)
  const router = useRouter()
  const selectWindow = (page_window: any) => {
    dispatch(selectAsyncCaveWindow(page_window))
    window.scrollTo(0, 0)
  }

  const logout = () => {
    router.push('/')
    dispatch(userLogout())
  }

  return (
    <CaveSidebar_Sty>
      <CaveSide_section_Sty
        shop={undefined}
        logout={undefined}
        selected={caveSideData.selectedWindow === 'profile'}
        onClick={() => selectWindow('profile')}
      >
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty
        shop={undefined}
        logout={undefined}
        selected={caveSideData.selectedWindow === 'inventory'}
        onClick={() => selectWindow('inventory')}
      >
        <FontAwesomeIcon icon={faBox} />
        <p> Inventory</p>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty
        shop={undefined}
        logout={undefined}
        selected={caveSideData.selectedWindow === 'library'}
        onClick={() => selectWindow('library')}
      >
        <FontAwesomeIcon icon={faBookReader} />
        <p>Library</p>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty
        shop={undefined}
        logout={undefined}
        selected={caveSideData.selectedWindow === 'notes'}
        onClick={() => selectWindow('notes')}
      >
        <FontAwesomeIcon icon={faStickyNote} />
        <p>Notes</p>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty
        shop={undefined}
        logout={undefined}
        selected={caveSideData.selectedWindow === 'guide'}
        onClick={() => selectWindow('guide')}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
        <p> Guide</p>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty
        logout={undefined}
        selected={caveSideData.selectedWindow === 'shop'}
        shop={true}
        onClick={() => selectWindow('shop')}
      >
        <FontAwesomeIcon icon={faShoppingBag} />
        <p> My Shop</p>
      </CaveSide_section_Sty>

      <CaveSide_section_Sty shop={undefined} selected={false} onClick={logout} logout={true}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p> Logout</p>
      </CaveSide_section_Sty>
    </CaveSidebar_Sty>
  )
}

export default CaveSidebar

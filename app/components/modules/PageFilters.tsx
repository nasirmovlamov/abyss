import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useRef } from 'react';

import {
  changeToStayInFocus,
  filter_search_tags,
  filter_search_value,
  filter_tags,
  filterDropisHovered,
  filterDropisUnHovered,
  filterSearchValueOnChange,
  filterTagsOnDelete,
  filterTagsSearchisBlur,
  filterTagsSearchisFocused,
  inChangePositionOfFilters,
  is_focused,
  outChangePositionOfFilters,
  stay_in_focus,
} from '../../store/slices/PageFilters.slice';
import {
  ifFilterWasDeleted,
  search_data,
  search_exclude_filters,
  search_filters,
  selectFilterToExcludeOption,
  selectFilterToSearchOption,
} from '../../store/slices/SearchBox.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { searchFiltersThunk } from '../../store/thunks/PageFilters.thunk';
import {
  FilterCont,
  FilterContStyle,
  FilterDel,
  FilterLanguageCont,
  FilterLanguageContent,
  FilterLanguageTitle,
  FilterSearchAddElement,
  FilterSearchCont,
  FilterSearchDropdown,
  FilterSearchDropdownElement,
  FilterSearchInCont,
  FilterSearchInput,
  FilterTag,
  FilterTagElementCont,
  FilterTagsCont,
  PinButton,
} from '../../styles/styled-components/components/modules/PageFilters.style';

interface Props {}

function PageFilters({}: Props): ReactElement {
  const dispatch = useAppDispatch()
  const filterTags = useAppSelector(filter_tags)
  const filterSearchTags = useAppSelector(filter_search_tags)
  const filterSearchValue = useAppSelector(filter_search_value)
  const isFocused = useAppSelector(is_focused)
  const stayInFocus = useAppSelector(stay_in_focus)
  const filterBlockRef = useRef<HTMLDivElement>(null)
  const searchIncludeFilters = useAppSelector(search_filters)
  const searchExcludeFilters = useAppSelector(search_exclude_filters)
  const searchData = useAppSelector(search_data)
  const includedTags = searchData.filters

  const pinFilters = () => {
    dispatch(changeToStayInFocus(stayInFocus))
  }

  const enterhandleStayInFocus = () => {
    dispatch(inChangePositionOfFilters(null))
  }

  const leavehandleStayInFocus = () => {
    dispatch(outChangePositionOfFilters(null))
  }

  const deleteFilterTag = (tag: any) => {
    dispatch(ifFilterWasDeleted(tag))
    dispatch(filterTagsOnDelete(tag.id))
    console.log('HELLO DEL')
  }

  let searchForFiltersTimeout: any

  const searchFilterTags = (query: any) => {
    dispatch(searchFiltersThunk({ query: query }))
  }

  const filterOnChange = (e: any) => {
    clearTimeout(searchForFiltersTimeout)
    console.log('HELLOChange')
    dispatch(filterSearchValueOnChange(e.target.value))
  }

  const filterOnKeyDown = (e: any) => {
    clearTimeout(searchForFiltersTimeout)
    console.log('HELLODown')
  }

  const filterOnKeyUp = (e: any) => {
    clearTimeout(searchForFiltersTimeout)
    searchForFiltersTimeout = setTimeout(() => searchFilterTags(e.target.value), 350)
  }

  const filterOnFocus = (e: any) => {
    dispatch(filterTagsSearchisFocused(null))
  }

  const filterOnBlur = (e: any) => {
    if (!filterSearchValue.isDropHovered) dispatch(filterTagsSearchisBlur(null))
  }

  const filterDropOnHover = (e: any) => {
    dispatch(filterDropisHovered(null))
  }

  const filterOnUnHover = (e: any) => {
    dispatch(filterDropisUnHovered(null))
  }

  return (
    <FilterContStyle
      onMouseLeave={leavehandleStayInFocus}
      onMouseEnter={enterhandleStayInFocus}
      ref={filterBlockRef}
    >
      <FilterCont stayInFocus={stayInFocus} isFocused={isFocused}>
        <PinButton stayInFocus={stayInFocus} isFocused={isFocused} onClick={pinFilters}>
          <FontAwesomeIcon icon={faThumbtack} />
        </PinButton>

        <FilterLanguageTitle>Filtered by Tags</FilterLanguageTitle>
        <FilterLanguageCont>
          <FilterLanguageContent>
            <p className="title">Include</p>
            <FilterTagsCont>
              {searchIncludeFilters.map((element, index) => (
                <FilterTagElementCont
                  key={element.id}
                  selected={searchIncludeFilters.find((x) => x.id === element.id)}
                  tagType="include"
                >
                  <FilterTag
                    onClick={() => dispatch(selectFilterToExcludeOption(element))}
                    selected={searchIncludeFilters.find((x) => x.id === element.id)}
                    tagType="include"
                  >
                    {element.name}
                  </FilterTag>
                  <FilterDel onClick={() => deleteFilterTag(element)}>x</FilterDel>
                </FilterTagElementCont>
              ))}
            </FilterTagsCont>
            <p className="title">Exclude</p>
            <FilterTagsCont>
              {searchExcludeFilters.map((element, index) => (
                <FilterTagElementCont
                  key={element.id}
                  selected={searchExcludeFilters.find((x) => x.id === element.id)}
                  tagType="exclude"
                >
                  <FilterTag
                    onClick={() => dispatch(selectFilterToSearchOption(element))}
                    selected={searchExcludeFilters.find((x) => x.id === element.id)}
                    tagType="exclude"
                  >
                    {element.name}
                  </FilterTag>
                  <FilterDel onClick={() => deleteFilterTag(element)}>x</FilterDel>
                </FilterTagElementCont>
              ))}
            </FilterTagsCont>
          </FilterLanguageContent>
        </FilterLanguageCont>

        <FilterSearchCont>
          <FilterSearchInCont>
            <FilterSearchInput
              onFocus={filterOnFocus}
              onBlur={filterOnBlur}
              // onKeyUp  ={() => {}}
              onKeyUp={filterOnKeyUp}
              onKeyDown={filterOnKeyDown}
              type="text"
              value={filterSearchValue.value}
              onChange={filterOnChange}
              placeholder="Search..."
            />
          </FilterSearchInCont>
          {filterSearchValue.isTouched && (
            <FilterSearchDropdown
              filtersLength={filterSearchTags.filters.length}
              onMouseEnter={filterDropOnHover}
              onMouseLeave={filterOnUnHover}
            >
              {filterSearchTags.filters.map(
                (element, index) =>
                  element.name.includes(filterSearchValue.value) && (
                    <FilterSearchDropdownElement key={element.id}>
                      {element.name}{' '}
                      <FilterSearchAddElement
                        type="button"
                        onClick={() => dispatch(selectFilterToSearchOption(element))}
                      >
                        add
                      </FilterSearchAddElement>
                    </FilterSearchDropdownElement>
                  ),
              )}
            </FilterSearchDropdown>
          )}
        </FilterSearchCont>
      </FilterCont>
    </FilterContStyle>
  )
}

export default PageFilters

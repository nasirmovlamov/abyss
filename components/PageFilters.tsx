import React, { ReactElement, useRef, useState } from 'react'
import {  faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { FilterCont, FilterContStyle, FilterDel, FilterLanguageCont, FilterLanguageContent, FilterLanguages, FilterLanguageTitle, FilterSearchAddElement, FilterSearchCont, FilterSearchDropdown, FilterSearchDropdownElement, FilterSearchInCont, FilterSearchInput, FilterTag, FilterTagCont, FilterTagContent, FilterTags, FilterTagsCont, FilterTagTitle, PinButton, SubjectCont, SubjectContent, Subjects, SubjectTitle } from '../styles/components/styled-blocks/PageFilters.style'
import { addFilter, changePositionOfFilters, changeToStayInFocus, filterSearchValueOnChange, filterTagsOnDelete, filterTagsSearchisFocused,  filter_search_tags, filter_search_value, filter_tags, is_focused, stay_in_focus } from '../app/feature/PageFilters.slice'
import { search_filters, ifFilterWasDeleted, selectFilterToSearchOption, search_data } from '../app/feature/SearchBox.slice'

interface Props {
    
}

function PageFilters({}: Props): ReactElement {



    const dispatch = useAppDispatch()
    const filterTags = useAppSelector(filter_tags)
    const filterSearchTags = useAppSelector(filter_search_tags)
    const filterSearchValue = useAppSelector(filter_search_value)
    const isFocused = useAppSelector(is_focused)
    const stayInFocus = useAppSelector(stay_in_focus)
    const filterBlockRef = useRef<HTMLDivElement>(null)
    const searchFilters = useAppSelector(search_filters)
    const searchData = useAppSelector(search_data)
    const includedTags = searchData.filters

    const pinFilters = () => {
        dispatch(changeToStayInFocus(stayInFocus))
    }
    
    
    
    const handleStayInFocus = () => {
        
    }

    const deleteFilterTag = (tag: any) => {
        dispatch(ifFilterWasDeleted(tag))
        dispatch(filterTagsOnDelete(tag.id))
    }

    return (
        <FilterContStyle  ref={filterBlockRef}>
            <FilterCont stayInFocus={stayInFocus}  isFocused={isFocused}>
                <PinButton  stayInFocus={stayInFocus} isFocused={isFocused} onClick={pinFilters}><FontAwesomeIcon icon={faThumbtack}/></PinButton>
               

                <FilterLanguageTitle>Filtered by Tags</FilterLanguageTitle>
                <FilterLanguageCont>


                    <FilterLanguageContent>
                        <p className="title">Include</p>
                        <FilterTagsCont>
                            {filterTags.map((element, index)=> 
                                <FilterTag 
                                    key={element.id}
                                    onClick={() => dispatch(selectFilterToSearchOption(element))}
                                    selected={searchFilters.find(x => x.id === element.id)}
                                    tagType="include"
                                    >  

                                    {element.name} 
                                    <FilterDel 
                                    onClick={() => deleteFilterTag(element)}>
                                        x
                                    </FilterDel>
                                </FilterTag>   
                            )}
                        </FilterTagsCont>
                    </FilterLanguageContent>

                    <FilterLanguageContent>
                        <p className="title">Exclude</p>
                        <FilterTagsCont>
                            {filterTags.map((element, index)=> 
                                    <FilterTag 
                                        onClick={() => dispatch(selectFilterToSearchOption(element))}
                                        key={element.id}
                                        selected={searchFilters.find(x => x.id === element.id)}
                                        tagType="exclude"
                                        >  
                                        {element.name} 
                                        <FilterDel 
                                        onClick={() => deleteFilterTag(element)}>
                                            x
                                        </FilterDel>
                                    </FilterTag>   
                            )}
                        </FilterTagsCont>
                        
                    </FilterLanguageContent>
                </FilterLanguageCont>
                

                <FilterSearchCont>
                    <FilterSearchInCont>
                        <FilterSearchInput onFocus={() => dispatch(filterTagsSearchisFocused(filterSearchValue.isTouched ))}  type="text" value={filterSearchValue.value} onChange={(e) => dispatch(filterSearchValueOnChange(e.target.value))}  placeholder="Search..."/>
                    </FilterSearchInCont>
                    {filterSearchValue.isTouched && 
                    <FilterSearchDropdown>
                        {
                            filterSearchTags.map((element , index) => 
                                element.name.includes(filterSearchValue.value) && <FilterSearchDropdownElement key={element.id}>{element.name} <FilterSearchAddElement  type="button" onClick={() => dispatch(addFilter(element))}>add</FilterSearchAddElement></FilterSearchDropdownElement>
                            )
                        }
                    </FilterSearchDropdown>
                    }
                </FilterSearchCont>
            
            </FilterCont>

            


        </FilterContStyle>
    )
}

export default PageFilters

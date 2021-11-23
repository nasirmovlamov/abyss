import React, { ReactElement, useRef, useState } from 'react'
import {  faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { FilterCont, FilterContStyle, FilterLanguageCont, FilterLanguageContent, FilterLanguages, FilterLanguageTitle, FilterSearchCont, FilterSearchDropdown, FilterSearchDropdownElement, FilterSearchInCont, FilterSearchInput, FilterTagCont, FilterTagContent, FilterTags, FilterTagTitle, PinButton, SubjectCont, SubjectContent, Subjects, SubjectTitle } from '../styles/components/PageFilters.style'
import { addFilter, changePositionOfFilters, changeToStayInFocus, filterSearchValueOnChange, filterTagsOnDelete, filterTagsSearchisFocused,  filter_search_tags, filter_search_value, filter_tags, is_focused, stay_in_focus } from '../app/feature/PageFilters.slice'
import { forum_search_filters, ifFilterWasDeleted, selectFilterToSearchOption } from '../app/feature/SearchBox.slice'

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
    const selectedForumSearchFilters = useAppSelector(forum_search_filters)

    const pinFilters = () => {
        dispatch(changeToStayInFocus(stayInFocus))
    }

    const handleMouseOver = () => {
        if(!stayInFocus)
        {
            dispatch(changePositionOfFilters(false))
        }
    }

    const handleMouseLeave = () => {
        if(!stayInFocus)
        {
            dispatch(changePositionOfFilters(true))
        }
    }
    const handleStayInFocus = () => {
        
    }

    const deleteFilterTag = (tag: any) => {
        dispatch(ifFilterWasDeleted(tag))
        dispatch(filterTagsOnDelete(tag.id))
    }

    // addFilter , 
    // filterSearchValueOnChange,
    // filterTagsSearchOnFocus,
    // filterTagsSearchOnBlur,
    // filterTagsOnClick,
    // filterTagsOnDelete

    return (
        <FilterContStyle onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} ref={filterBlockRef}>
            <FilterCont stayInFocus={stayInFocus}  isFocused={isFocused}>
                <PinButton  stayInFocus={stayInFocus} isFocused={isFocused} onClick={pinFilters}><FontAwesomeIcon icon={faThumbtack}/></PinButton>
                {/* <SubjectCont>
                    <SubjectTitle>Subject</SubjectTitle>
                    <SubjectContent>
                        {filterTags.map((element , index)=> 
                            index < 3 && 
                            <Subjects key={element.id}>
                                <button 
                                style={{backgroundColor:selectedForumSearchFilters.includes(element) ? "gray" : "inherit"}} 
                                onClick={() => dispatch(selectFilterToSearchOption(element))}> 
                                    {element.name} 
                                </button> 

                                <button  onClick={() => dispatch(filterTagsOnDelete(element.id))}>
                                    del
                                </button>
                            </Subjects>
                        )}
                    </SubjectContent>
                </SubjectCont> */}

                {/* <FilterTagCont>
                    <FilterTagTitle>Subject</FilterTagTitle>
                    <FilterTagContent>
                        {filterTags.map((element, index)=> 
                            (3 <=  index && index <= 6)  &&  
                                <Subjects key={element.id}>  
                                    <button 
                                    style={{backgroundColor:selectedForumSearchFilters.includes(element) ? "gray" : "inherit"}} 
                                    onClick={() => dispatch(selectFilterToSearchOption(element))}> 
                                        {element.name} 
                                    </button>     
                                    <button 
                                    onClick={() => dispatch(filterTagsOnDelete(element.id))}>
                                        del
                                    </button>
                                </Subjects>
                        )}
                    </FilterTagContent>
                </FilterTagCont> */}

                <FilterLanguageCont>
                    <FilterLanguageTitle>Language</FilterLanguageTitle>
                    <FilterLanguageContent>
                        {filterTags.map((element, index)=> 
                            <Subjects key={element.id}>
                                <button 
                                    style={{backgroundColor:selectedForumSearchFilters.find(x => x.id === element.id) ? "gray" : "inherit"}} 
                                    onClick={() => dispatch(selectFilterToSearchOption(element))}>  

                                    {element.name} 
                                </button>   
                                <button 
                                onClick={() => deleteFilterTag(element)}>
                                    del
                                </button>
                            </Subjects>
                        )}
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
                                element.name.includes(filterSearchValue.value) && <FilterSearchDropdownElement key={element.id}>{element.name} <button  type="button" onClick={() => dispatch(addFilter(element))}>add</button></FilterSearchDropdownElement>
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

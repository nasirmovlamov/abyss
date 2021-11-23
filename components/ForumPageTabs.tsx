import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { forum_data_status, forum_search_data, forum_search_results_number, forum_search_sort, forum_search_type, selectForumSortSearchOption, selectForumTypeSearchOption } from '../app/feature/SearchBox.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { FooterColumn,  FooterElement,  FooterRow, FooterStyle } from '../styles/components/styled-elements/Footer.style'
import { Line, TabButton, TabButtonsCont, TabResults, Tabs, TabsContainer, TabTags, TabTagsAndResults, TabTagsCont, TabText, } from '../styles/components/styled-elements/PageTabs.style'

interface Props {
    
}

function PageTabs({}: Props): ReactElement {
    const dispatch = useAppDispatch()
    const searchType = useAppSelector(forum_search_type)
    const searchSort = useAppSelector(forum_search_sort)
    const forumSearchResultsNumber = useAppSelector(forum_search_results_number)
    
    const forumSearchData = useAppSelector(forum_search_data)
    const forumSearchStatus = useAppSelector(forum_data_status)


    const  searchTypes = ['Requests' , 'Questions' , 'Discussion']
    const  searchSorts = ['Newes' , 'Most Visited' , 'Most Helpful' , "Recently"]


    const selectType = (type:string) => {
        dispatch(selectForumTypeSearchOption(type))
    }
    const selectSort = (sort:string) => {
        dispatch(selectForumSortSearchOption(sort))
    }

    return (
        <TabsContainer>
            <Tabs>
                <TabButtonsCont>
                <TabButton  onClick={() => selectType(searchTypes[0])} id="tab1" tabFocus={searchType.includes(searchTypes[0])} name="tab" >
                    <TabText>
                        {searchTypes[0]}
                    </TabText> 
                    <Line/>     
                </TabButton>

                <TabButton onClick={() => selectType(searchTypes[1])} id="tab2" tabFocus={searchType.includes(searchTypes[1])} name="tab" >
                    <TabText style={{width:"134px",padding:"18px 28.5px 0px 28.5px"}}>
                        {searchTypes[1]}
                    </TabText> 
                    <Line/>        
                </TabButton>
                
                <TabButton onClick={() => selectType(searchTypes[2])} id="tab3" tabFocus={searchType.includes(searchTypes[2])} name="tab" >
                    <TabText  style={{width:"150px",padding:"18px 18px 0px 18px"}}>
                        {searchTypes[2]}
                    </TabText> 
                    <Line  />   
                </TabButton>
                </TabButtonsCont>
            </Tabs>

            <TabTagsAndResults>
                <TabResults>{forumSearchStatus === "loaded" && <>{forumSearchResultsNumber} results</>}  </TabResults>

                <TabTagsCont>
                    <TabTags name="tag" tagFocus={searchSort.includes(searchSorts[0])} onClick={() =>selectSort(searchSorts[0])}>{searchSorts[0]}</TabTags>
                    <TabTags name="tag" tagFocus={searchSort.includes(searchSorts[1])} onClick={() => selectSort(searchSorts[1])}>{searchSorts[1]}</TabTags>
                    <TabTags name="tag" tagFocus={searchSort.includes(searchSorts[2])} onClick={() => selectSort(searchSorts[2])}>{searchSorts[2]}</TabTags>
                    <TabTags name="tag" tagFocus={searchSort.includes(searchSorts[3])} onClick={() => selectSort(searchSorts[3])}>{searchSorts[3]}</TabTags>
                </TabTagsCont>
            </TabTagsAndResults>

        </TabsContainer>   
    )
}

export default PageTabs

import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { FooterColumn,  FooterElement,  FooterRow, FooterStyle } from '../styles/components/styled-elements/Footer.style'
import { Line, TabButton, TabButtonsCont, TabResults, Tabs, TabsContainer, TabTags, TabTagsAndResults, TabTagsCont, TabText, TabTextSpan } from '../styles/components/styled-elements/PageTabs.style'

interface Props {
    
}

function PageTabs({}: Props): ReactElement {
    const router = useRouter()
    const {selectedTab , selectedTag} = router.query


    const tabQuery = (tab="default" , tag="default") => {
        if(tab!== "default")
        {
            router.push({
                pathname:router.pathname,
                query:{
                    selectedTab:tab,
                    selectedTag:selectedTag
                }
            })

        }
        else if(tag!== "default")
        {
            router.push({
                pathname:router.pathname,
                query:{
                    selectedTab:selectedTab,
                    selectedTag:tag
                }
            })
        }
        else 
        {}

    }

    

    return (
        <TabsContainer>
            <Tabs>
                <TabButtonsCont>
                <TabButton id="tab1" tabFocus={selectedTab === "Info" ? true: false} name="tab"  onClick={() => tabQuery("Info" , "default")}>
                    <TabText>
                        <TabTextSpan>
                            Requests
                        </TabTextSpan>
                    </TabText> 
                    <Line/>     
                </TabButton>

                <TabButton id="tab2" tabFocus={selectedTab === "Clip" ? true: false} name="tab" onClick={() => tabQuery("Clip", "default")}>
                    <TabText>
                        <TabTextSpan>
                        Questions
                        </TabTextSpan>
                    </TabText> 
                    <Line/>        
                </TabButton>
                
                <TabButton id="tab3" tabFocus={selectedTab === "Forum" ? true: false} name="tab" onClick={() => tabQuery("Forum", "default")}>
                    <TabText>Discussions</TabText> 
                    <Line  />   
                </TabButton>
                </TabButtonsCont>
            </Tabs>

            <TabTagsAndResults>
                <TabResults>7,903 results</TabResults>

                <TabTagsCont>
                    <TabTags name="tag" tagFocus={selectedTag === "Newes" ? true: false} onClick={() => tabQuery("default" , "Newes")}>Newes</TabTags>
                    <TabTags name="tag" tagFocus={selectedTag === "Most Visited" ? true: false} onClick={() => tabQuery("default" , "Most Visited")}>Most Visited</TabTags>
                    <TabTags name="tag" tagFocus={selectedTag === "Most Helpful" ? true: false} onClick={() => tabQuery("default" , "Most Helpful")}>Most Helpful</TabTags>
                    <TabTags name="tag" tagFocus={selectedTag === "Recently" ? true: false} onClick={() => tabQuery("default" , "Recently")}>Recently</TabTags>
                </TabTagsCont>
            </TabTagsAndResults>

        </TabsContainer>   
    )
}

export default PageTabs

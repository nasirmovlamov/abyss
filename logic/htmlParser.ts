import parse from 'html-react-parser';


export const parseHtml = (html: string) => {

    const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html:any) => {
        const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g;
        let mentionsArray = [];
        if(html.match(regex).length > 0){
            mentionsArray = html.match(regex)
        }
        let newHtml = html;
        for (let i = 0; i < mentionsArray!.length; i++) {
            const dataIdOfSpan = mentionsArray[i].match(/data-id="(.*?)"/)[1];
            const hrefOfSpan = mentionsArray[i].match(/href="(.*?)"/)[1];
            const dataDenotationCharOfSpan = mentionsArray[i].match(/data-denotation-char="(.*?)"/)[1];

            if(dataDenotationCharOfSpan === '@'){
                newHtml = newHtml.replace(mentionsArray[i] , `
                    <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:white;height:50px;display:flex;justify-content:center;align-items:center;"> 
                        <img src="https://i.mycdn.me/image?id=559642968917&t=0&plc=MOBILE&tkn=*t5nkwHOj9wB3Z-oh7v8wpLITnGs"  width="30px" height="30px" style="object-fit:cover;"/>  
                        <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">PRODUCT ${dataIdOfSpan}</a>
                    </div>
                `)
            }else if(dataDenotationCharOfSpan  === "#")
            {
                // newHtml = newHtml.replace(mentionsArray[i] , `
                // <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:green;height:50px;display:flex;justify-content:center;align-items:center;"> 
                //     <img src=""  width="30px" height="30px" style="object-fit:cover;"/>  
                //     <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">User ${dataIdOfSpan}</a>
                // </div>`
                // )
            }else{}
            
        }
        

        return newHtml
    }
    let finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    
    // const newhtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    return parse(finalHtml);

}  



export const parseHtmlWithMention = (html: string , linkedProducts: any[]) => {

    const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html:any) => {
        const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g;
        let mentionsArray = [];
        if(html.match(regex)){
            if(html.match(regex).length > 0){
                mentionsArray = html.match(regex)
            }
        }
        
        let newHtml = html;
        if(!mentionsArray)
        {
            return html
        }else{
            for (let i = 0; i < mentionsArray.length; i++) {
                const dataIdOfSpan = mentionsArray[i].match(/data-id="(.*?)"/)[1];
                const hrefOfSpan = mentionsArray[i].match(/href="(.*?)"/)[1];
                const dataDenotationCharOfSpan = mentionsArray[i].match(/data-denotation-char="(.*?)"/)[1];
                const productName = linkedProducts.filter(element => element.product_id === parseInt(dataIdOfSpan))[0].product.name
                const productDescription = linkedProducts.filter(element => element.product_id === parseInt(dataIdOfSpan))[0].product.description
    
                if(dataDenotationCharOfSpan === '@'){
                    newHtml = newHtml.replace(mentionsArray[i] , `
                        <div  style="padding-top:10px;padding-bottom:10px;column-gap:10px;border-radius:10px;color:red; width:100%;background:white;height:auto;display:flex;justify-content:center;align-items:flex-start;"> 
                            <img src="https://icon-library.com/images/product-icon-vector/product-icon-vector-10.jpg"  width="70px"  style="object-fit:cover;height:100%;"/>  
                            <div style="display:flex;flex-direction:column;row-gap:5px;">
                                <a href="${hrefOfSpan}" target="_blank" style="font-size:20px;">${productName}</a>
                                <p href="${hrefOfSpan}" target="_blank" style="font-size:15px;">${productDescription}</p>
                            </div>
                        </div>
                    `)
                }else if(dataDenotationCharOfSpan  === "#")
                {
                    // newHtml = newHtml.replace(mentionsArray[i] , `
                    // <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:green;height:50px;display:flex;justify-content:center;align-items:center;"> 
                    //     <img src=""  width="30px" height="30px" style="object-fit:cover;"/>  
                    //     <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">User ${dataIdOfSpan}</a>
                    // </div>`
                    // )
                }else{}
                
            }
            
    
            return newHtml
        }
        
    }
    let finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    
    // const newhtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    return parse(finalHtml);

}  

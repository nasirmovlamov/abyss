import parse from 'html-react-parser';


export const parseHtml = (html: string) => {

    const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html: string) => {
        const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g;
        const myArray = html.match(regex);
        let newHtml = html;
        for (let i = 0; i < myArray!.length; i++) {
            const dataIdOfSpan = myArray[i].match(/data-id="(.*?)"/)[1];
            const hrefOfSpan = myArray[i].match(/href="(.*?)"/)[1];
            const dataDenotationCharOfSpan = myArray[i].match(/data-denotation-char="(.*?)"/)[1];

            if(dataDenotationCharOfSpan === '@'){
                newHtml = newHtml.replace(myArray[i] , `<a href="${hrefOfSpan}" target="_blank"><div  style="color:red; width:100%;background:white;height:50px;display:flex;justify-content:center;align-items:center;"> PRODUCT ${dataIdOfSpan}</div></a>`)
            }else if(dataDenotationCharOfSpan  === "#")
            {
                newHtml = newHtml.replace(myArray[i] , `<a href="${hrefOfSpan}" target="_blank"><div  style="color:red; width:100%;background:green;height:50px;display:flex;justify-content:center;align-items:center;">USER${dataIdOfSpan}</div></a>`)
            }else{}
            
        }

        return newHtml
    }
    let finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    
    // const newhtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
    return parse(finalHtml);

}  

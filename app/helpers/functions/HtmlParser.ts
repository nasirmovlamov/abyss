import { autoErrorToasterWithMessage } from '../../components/ui/toasters/AutoSuccessToast'
import { blue_1 } from '../../styles/global/styled-components/abstracts/Colors.style'
import parse from 'html-react-parser'

export const parseHtml = (html: string) => {
  const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html: any) => {
    const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g
    let mentionsArray = []

    if (html.match(regex)) {
      mentionsArray = html.match(regex)
    } else {
      return html
    }
    let newHtml = html
    for (let i = 0; i < mentionsArray!.length; i++) {
      const dataIdOfSpan = mentionsArray[i].match(/data-id="(.*?)"/)[1]
      const hrefOfSpan = mentionsArray[i].match(/href="(.*?)"/)[1]
      const dataDenotationCharOfSpan = mentionsArray[i].match(/data-denotation-char="(.*?)"/)[1]

      const consoler = () => {
        autoErrorToasterWithMessage('salam')
      }
      // const AddCaveButtonElement = <button>add cave</button>

      if (dataDenotationCharOfSpan === '@') {
        newHtml = newHtml.replace(
          mentionsArray[i],
          `
                    <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:white;height:50px;display:flex;justify-content:center;align-items:center;"> 
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.producthunt.com%2Fposts%2Favatar-maker-2&psig=AOvVaw0P88q8euO2gYA-rO8AB0w8&ust=1638971346069000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKC7vPrq0fQCFQAAAAAdAAAAABAI"  width="30px" height="30px" style="object-fit:cover;"/>  
                        <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">PRODUCT ${dataIdOfSpan}</a>
                    </div>
                `,
        )
      } else if (dataDenotationCharOfSpan === '#') {
        // newHtml = newHtml.replace(mentionsArray[i] , `
        // <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:green;height:50px;display:flex;justify-content:center;align-items:center;">
        //     <img src=""  width="30px" height="30px" style="object-fit:cover;"/>
        //     <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">User ${dataIdOfSpan}</a>
        // </div>`
        // )
      } else {
      }
    }

    return newHtml
  }
  let finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)

  // const newhtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
  return parse(finalHtml)
}

export const parseHtmlWithMention = (html: string, linkedProducts: any[]) => {
  let finalHtml = html
  const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html: any) => {
    const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g
    let mentionsArray = []
    if (html.match(regex)) {
      mentionsArray = html.match(regex)
    } else {
      return finalHtml
    }
    let newHtml = html
    for (let i = 0; i < mentionsArray.length; i++) {
      const dataIdOfSpan = mentionsArray[i].match(/data-id="(.*?)"/)[1]
      const hrefOfSpan = mentionsArray[i].match(/href="(.*?)"/)[1]
      const dataDenotationCharOfSpan = mentionsArray[i].match(/data-denotation-char="(.*?)"/)[1]
      const productName = linkedProducts.filter(
        (element) => element.product_id === parseInt(dataIdOfSpan),
      )[0].product.name
      const productDescription = linkedProducts.filter(
        (element) => element.product_id === parseInt(dataIdOfSpan),
      )[0].product.description

      const myFunction = () => {}

      var but = document.createElement('button')

      but.value = 'salam'
      but.innerHTML = 'salam'

      var inputTag = document.createElement('div')
      inputTag.innerHTML = "<input type = 'button' value = 'oooh' onClick = 'your_function_name()'>"

      if (dataDenotationCharOfSpan === '@') {
        newHtml = newHtml.replace(
          mentionsArray[i],
          `
                    <div  style="padding:10px;padding-bottom:10px;column-gap:10px;border-radius:10px;color:red; width:100%;background:#141618;height:auto;display:flex;align-items:flex-start;overflow:hidden;"> 
                        <div>
                            <img src="https://musacivak.com/assets/images/avatar.png"  width="70px" height="70px" style="object-fit:cover;"/>  
                            <p style='color:gray;'>Username</p>
                        </div>    
                    
                        <div style="display:flex;flex-direction:column;row-gap:5px;">
                            <a href="${hrefOfSpan}" target="_blank" style="font-size:20px;color:${blue_1};text-decoration:none;white-space:nowrap;">${productName}</a>
                            <div style="display:flex;">
                                
                            </div>
                        </div>
                    </div>
                `,
        )
      } else if (dataDenotationCharOfSpan === '#') {
        newHtml = newHtml.replace(
          mentionsArray[i],
          `
                <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:#141618;height:50px;display:flex;justify-content:center;align-items:center;"> 
                    <img src=""  width="30px" height="30px" style="object-fit:cover;"/>  
                    <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">User ${dataIdOfSpan}</a>
                    <button>salam qaqa</button>
                </div>`,
        )
      } else {
      }
    }
    return newHtml
  }

  if (linkedProducts.length > 0) {
    finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
  }
  return parse(finalHtml)
}

export const parseHtmlWithMentionremoveImgAndCodeBlock = (html: string, linkedProducts: any[]) => {
  let finalHtml = html
  const replaceAllSpanWithItsContentTagWhicClassIsEqualToMention = (html: any) => {
    const regex = /<span class="mention" (.*?)>(.*?)<\/span>(.*?)<\/span>/g
    let mentionsArray = []
    if (html.match(regex)) {
      mentionsArray = html.match(regex)
    } else {
      return finalHtml
    }
    let newHtml = html
    for (let i = 0; i < mentionsArray.length; i++) {
      const dataIdOfSpan = mentionsArray[i].match(/data-id="(.*?)"/)[1]
      const hrefOfSpan = mentionsArray[i].match(/href="(.*?)"/)[1]
      const dataDenotationCharOfSpan = mentionsArray[i].match(/data-denotation-char="(.*?)"/)[1]
      const productName = linkedProducts.filter(
        (element) => element.product_id === parseInt(dataIdOfSpan),
      )[0].product.name
      const productDescription = linkedProducts.filter(
        (element) => element.product_id === parseInt(dataIdOfSpan),
      )[0].product.description

      const myFunction = () => {}

      var but = document.createElement('button')

      but.value = 'salam'
      but.innerHTML = 'salam'

      var inputTag = document.createElement('div')
      inputTag.innerHTML = "<input type = 'button' value = 'oooh' onClick = 'your_function_name()'>"

      if (dataDenotationCharOfSpan === '@') {
        newHtml = newHtml.replace(
          mentionsArray[i],
          `
                    <div  style="padding:10px;padding-bottom:10px;column-gap:10px;border-radius:10px;color:red; width:100%;background:#141618;height:auto;display:flex;align-items:flex-start;overflow:hidden;"> 
                        <div>
                            <img src="https://musacivak.com/assets/images/avatar.png"  width="70px" height="70px" style="object-fit:cover;"/>  
                            <p style='color:gray;'>Username</p>
                        </div>    
                    
                        <div style="display:flex;flex-direction:column;row-gap:5px;">
                            <a href="${hrefOfSpan}" target="_blank" style="font-size:20px;color:${blue_1};text-decoration:none;white-space:nowrap;">${productName}</a>
                            <div style="display:flex;">
                                
                            </div>
                        </div>
                    </div>
                `,
        )
      } else if (dataDenotationCharOfSpan === '#') {
        newHtml = newHtml.replace(
          mentionsArray[i],
          `
                <div  style="column-gap:10px;border-radius:10px;color:red; width:100%;background:#141618;height:50px;display:flex;justify-content:center;align-items:center;"> 
                    <img src=""  width="30px" height="30px" style="object-fit:cover;"/>  
                    <a href="${hrefOfSpan}" target="_blank" style="text-decoration:none;">User ${dataIdOfSpan}</a>
                    <button>salam qaqa</button>
                </div>`,
        )
      } else {
      }
    }
    return newHtml
  }

  if (linkedProducts.length > 0) {
    finalHtml = replaceAllSpanWithItsContentTagWhicClassIsEqualToMention(html)
  }
  const removedImageTags = finalHtml.replace(/<img(.*?)>/g, '')
  const removedCodeTags = removedImageTags.replace(/<code(.*?)>/g, '')
  return parse(removedCodeTags)
}

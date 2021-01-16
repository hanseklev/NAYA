import React from 'react'
import SEO from '../components/seo'


export default function PageTemplate({pageContext}){
    const page = pageContext.page

    return(
        <MainLayout>
            <SEO title = {page.title}/>

            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.html}}></div>
        </MainLayout>
    )
}


import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";



import { Toaster } from 'react-hot-toast';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
       
        <Helmet>
                <meta charSet="utf-8" />
              
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
                  <meta name="author" content={author}/>
        

                <title>{title}</title>
                
        </Helmet>
        <Header/>
        <main style={{minHeight: '70vh'}}>
          <Toaster/>
        {children}
        </main>
        <Footer/>
    </div>
  );
};
// default props description keyword
Layout.defaultProps={
  title:"Apni Dukan- shop now",
  description:"online grocery shopping website",
  keywords:"Dukan,online shopping, online store,grocery store,apni dukan,apki dukan, shop",
  author:"satyamgupta",


}

export default Layout;
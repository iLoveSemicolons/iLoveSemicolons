import React, {createContext, useReducer} from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Project from "./project";
import Error from './Error';
// import design from "./design";
import about from "./about";
import contact from "./contact";
import blog from "./blog";
import Home from "./home";
import article from "./article";
import "./App.scss"
import Subscribe from "./subscribe";

import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import LegalNotice from "./legalNotice";

//===========================================================

import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/globalStyles";
import {initialThemeState, themeReducer} from "./components/themeReducer";
import {Helmet} from "react-helmet";


//===========================================================


//TODO Meta tag images
//TODO Meta tag property OG
//TODO Meta name=Theme-color
//TODO Meta cards example <meta data-react-helmet="true" name="twitter:image" content="https://www.taniarascia.com/logo.png">
//TODO follow me on twitter/LInkedin


export const AppContext = createContext();

function App() {

    const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
    const {currentTheme} = themeState;


        return (
            <BrowserRouter>
                <ThemeProvider theme={currentTheme}>
                    <AppContext.Provider value={{...themeState, dispatch}}>
                        <GlobalStyles />
                        <Helmet>
                            <meta name="copyright" content="Sirage AL DBIYAT"/>
                            <meta name="robots" content="index,follow"/>
                            <meta httpEquiv="expires" content="43200"/>


                        </Helmet>
                            <PageLayout>
                                <MainLayout>

                                    <style>
                                        @import
                                        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
                                    </style>
                                    <Switch>
                                        <Route path="/" component={Home} exact/>
                                        <Route path="/project" component={Project}/>
                                        {/*<Route path="/design" component={design}/>*/}
                                        <Route path="/blog" component={blog}/>
                                        <Route path="/about" component={about}/>
                                        <Route path="/contact" component={contact}/>
                                        <Route path="/legalNotice" component={LegalNotice}/>
                                        <Route path="/subscribe" component={Subscribe}/>
                                        <Route path="/article/:articleLocalFileName" component={article}/>
                                        <Route component={Error}/>
                                    </Switch>
                                </MainLayout>
                            </PageLayout>
                    </AppContext.Provider>
                </ThemeProvider>
            </BrowserRouter>
        );
}


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
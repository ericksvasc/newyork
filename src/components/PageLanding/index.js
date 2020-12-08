import React from 'react';
import { Container } from './styles';

import { MdKeyboardArrowDown } from 'react-icons/md';
import GlobalStyle from '../GlobalStyles';

import 'react-slideshow-image/dist/styles.css';

function PageLanding() {
    return(
        <>
            <GlobalStyle />
            <Container>
                
                <div className="pageLanding">
                    <div className="Header">
                        <nav className='Header_menu'>
                            <ul className='Header_menu_li'>
                                <li><a href="/">Home</a></li>
                                <li><a href="">Photos</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="main">
                        <div className="main_introduction">
                            <div className="main_introduction_title">
                                <h1>New York City's</h1>
                                
                            </div>
                            <div className="main_introduction_arrow">
                                <a href=""><MdKeyboardArrowDown size='70' color='white' className='arrowButton' /></a>
                            </div>
                        </div>
                        <div className="main_content" id='mc'>
                            <div className="main_content_text">
                                <div className="main_text_title">
                                    <h1>Welcome to New York City</h1>
                                </div>
                                <div className="main_content_content">
                                    <p>New York City (NYC), often called simply New York (not to be confused with the U.S. state of New York), is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the U.S. state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass...</p>
                                </div>
                                <div className="main_content_button">
                                    <a href="" id='te'>Let's go</a>
                                </div>
                            </div>
                            <section className='main_content1'>
                                
                            </section>
                            <section className='main_content2'>

                            </section>
                            <section className='main_content3'>

                            </section>
                            <section className='main_content4'>

                            </section>
                        </div>
                        <div className="main_footer">
                            <div className="main_footer_slider">
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            </Container>
        </>
        
    )
}

export default PageLanding;
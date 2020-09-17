import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-section1">
                    <a href="http://www.instagram.com" target="blank">
                        <svg id="instagram-logo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>instagram</title><path d="M13,49.67A12.57,12.57,0,0,1,.4,37.14L.33,13A12.55,12.55,0,0,1,12.87.4L37,.33A12.59,12.59,0,0,1,49.6,12.87L49.67,37A12.6,12.6,0,0,1,37.13,49.6ZM37,1.33,12.87,1.4A11.55,11.55,0,0,0,1.33,13L1.4,37.13A11.57,11.57,0,0,0,13,48.67l24.17-.06A11.6,11.6,0,0,0,48.67,37L48.6,12.88A11.58,11.58,0,0,0,37,1.33Zm-24,45a9.27,9.27,0,0,1-9.3-9.25L3.63,18.48H17.16l-.75.83a11.54,11.54,0,1,0,17.19,0l-.75-.83H46.32l0,18.53a9.28,9.28,0,0,1-9.25,9.3ZM4.64,19.48l0,17.64A8.27,8.27,0,0,0,13,45.38l24.16-.06A8.28,8.28,0,0,0,45.36,37l0-17.53H35a12.53,12.53,0,1,1-20,0ZM25,36.25A9.24,9.24,0,1,1,34.23,27h0A9.24,9.24,0,0,1,25,36.25Zm0-17.48a8.14,8.14,0,0,0-3.27.68A8.24,8.24,0,1,0,33.23,27h0A8.26,8.26,0,0,0,25,18.77Zm17.24-3.28H36.79a.79.79,0,0,1-.78-.78V9.27a.79.79,0,0,1,.78-.78h3.88A2.34,2.34,0,0,1,43,10.83v3.88A.79.79,0,0,1,42.23,15.48Zm-5.22-1h5V10.83a1.34,1.34,0,0,0-1.34-1.34H37Z"></path></svg>
                    </a>
                    <a href="http://www.facebook.com" target="blank">
                        <svg id="facebook-logo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>facebook-icon</title><path d="M29.32,49.67l-10-.06v-22H12V18h7.36c0-.18,0-.35,0-.52,0-.76,0-1.51,0-2.26,0-1.7,0-3.45.14-5.18A10.1,10.1,0,0,1,26.87.94,22.1,22.1,0,0,1,34.78.47l1.51.09c.3,0,.59.06.89.1L38,.76V9.38H35.66l-1.06,0c-.94,0-1.91,0-2.85.13-1.49.15-2.2.8-2.3,2.1-.12,1.56-.09,3.11-.07,4.75,0,.54,0,1.09,0,1.64h8.41l-.31,2.36c-.28,2.15-.55,4.26-.85,6.36a1.26,1.26,0,0,1-1.11.88c-1,0-2.09,0-3.14,0H29.32Zm-9-1.05,8,0v-22h4.11c1,0,2.07,0,3.1,0a.61.61,0,0,0,.19-.13c.26-2,.53-4.09.81-6.24L36.69,19H28.42v-.5c0-.72,0-1.42,0-2.13,0-1.67-.05-3.24.07-4.85.14-1.8,1.21-2.81,3.19-3,1-.1,2-.12,2.93-.13l1,0c.42,0,.84,0,1.28,0H37V1.63c-.25,0-.5-.07-.76-.08l-1.53-.09a21,21,0,0,0-7.57.43,9.12,9.12,0,0,0-6.63,8.22c-.12,1.7-.13,3.44-.14,5.12,0,.76,0,1.52,0,2.27V19H13v7.6h7.3Z"></path></svg>
                    </a>
                </div>
                <hr />
                <div className="footer-section2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 footer-section2-1">
                                <ul className="ul-cleargap">
                                    <li><a href="javascript:;">Palo Alto</a></li>
                                    <li><a href="javascript:;">Santa Clara</a></li>
                                    <li>Open Hours <span>(subject to change)</span></li>
                                    <li>11am - 3pm & 5:30pm - 9:30pm Daily</li>
                                </ul>
                            </div>
                            <div className="col-md-2 footer-section2-2">
                                <ul className="ul-cleargap">
                                    <li><a href="javascript:;">Careers</a></li>
                                    <li><a href="javascript:;">Our Menu</a></li>
                                    <li><a href="javascript:;">PRESS</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-section2-3">
                                <ul className="ul-cleargap">
                                    <li>Press Inquiries<br />
                                        <a href="mailto:press@ramennagiusa.com">press@ramennagiusa.com</a>
                                    </li>
                                    <li>General Inquiries<br />
                                        <a href="mailto:info@ramennagiusa.com">info@ramennagiusa.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-section2-4">
                                <input type="email" placeholder="Your Email" />
                                <button>Sign Up</button>
                                <p>©2018 Ramen Nagi</p>
                                <p>Online Advantage by
                                    <a href="javascript:;"> Rooster Grin Media</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
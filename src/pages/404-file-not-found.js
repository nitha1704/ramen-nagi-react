import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class FileNotFound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section className="fileNotFound-section1">
                    <div className="fileNotFound-content">
                        <h1>404</h1>
                        <p>File Not Found</p>
                        <p>Page you are visiting might be deleted or change URL</p>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default FileNotFound;
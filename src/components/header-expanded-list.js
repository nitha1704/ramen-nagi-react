import React from 'react';

class listExpanded extends React.Component {

    render() {

        const {mynumber, mytitle, myguFilter, myclass} = this.props.getListMap;

        return(
            <li className={myclass} data-filter={myguFilter}>
                <sup>{mynumber}</sup> <a href="http://www.google.com" target="blank">{mytitle}</a>
            </li>
        )
    }
}

export default listExpanded;
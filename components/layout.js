import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import '../styles/style.scss';

import Head from './head';
import Nav from './nav';

class PageLayout extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div>
                <Head />
                <Nav />
                <div className={this.props.pageClass || ''}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageLayout;

PageLayout.proType = {
    pageClass: PropTypes.object
}
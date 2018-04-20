import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PageLayout from '../components/layout';
import { withStyles } from 'material-ui/styles';
import '../styles/style.scss';

const styles = theme => ({
    root: {
        color: theme.palette.primary.main
    }
});

@withStyles(styles)
class MainPage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <PageLayout pageClass={this.props.classes.root}>
                {`Hello`}
            </PageLayout>
        );
    }
}

export default MainPage;

MainPage.proType = {
    classes: PropTypes.object
}
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PageLayout from '../components/layout';
import { withStyles } from 'material-ui/styles';
import '../styles/style.scss';

const styles = theme => ({
    root: {
        color: theme.palette.primary.main
    },
    code: {
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        border: '1px solid ' + theme.palette.primary.light,
        padding: '1em'
    }
});

@withStyles(styles)
class CanopyPage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <PageLayout pageClass={this.props.classes.root}>
                <h1>Canopy</h1>
                <pre className={this.props.classes.code}>
<code>{`
    {
        name: Katana, 
        size qt: 120, 
        dom: 1996,
        factory: performance design,
        url: http://www.performancedesigns.com/,
        description: Lorem ipsum...
    }`
}</code>
                </pre>
            </PageLayout>
        );
    }
}

export default CanopyPage;

CanopyPage.proType = {
    classes: PropTypes.object
}
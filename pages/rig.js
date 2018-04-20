import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PageLayout from '../components/layout';
import { withStyles } from 'material-ui/styles';
import '../styles/style.scss';

const styles = theme => ({
    root: {
        color: 'red'
    },
    code: {
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        border: '1px solid ' + theme.palette.primary.light,
        padding: '1em'
    }
});

@withStyles(styles)
class RigPage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <PageLayout pageClass={this.props.classes.root}>
                <h1>Rig</h1>
                <pre className={this.props.classes.code}>
<code>{`
    {
        name: Javelin, 
        model: Odissey,
        factory: Sun Path,
        url: http://www.sunpath.com/,
        description: Lorem ipsum...
    }`
}</code>
                </pre>
            </PageLayout>
        );
    }
}

export default RigPage;

RigPage.proType = {
    classes: PropTypes.object
}
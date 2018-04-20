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
class JumpPage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <PageLayout pageClass={this.props.classes.root}>
                <h1>Jump</h1>
                <pre>
<code>{`   
    [
        {
            id: $,
            nr: 1,
            data: 01/05/2018,
            flight: DBK,
            target: DZ,
            location: DZ,
            peoples: 2,
            altitude: 4000,
            delay: 5s,
            freefall: 60s,
            pull: 1200,
            unit: m (meter),
            reserve: true/false,
            canopy: ...,
            rig: ...,
            description: Lorem ipsum...
        },
        ...
    ]
`}</code>
                </pre>
            </PageLayout>
        );
    }
}

export default JumpPage;

JumpPage.proType = {
    classes: PropTypes.object
}
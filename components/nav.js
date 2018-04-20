import Head from './head'
import Link from 'next/link'

// icons
import {Icon} from 'material-ui';

const pages = [
    {
        icon: <Icon>hot_tube</Icon>,
        label: 'Home',
        url: '/'
    }, {
        icon: <Icon>accessibility</Icon>,
        label: 'Jumps',
        url: '/jumps'
    }, {
        icon: <Icon>beach_access</Icon>,
        label: 'Canopy',
        url: '/canopy'
    }, {
        icon: <Icon>work</Icon>,
        label: 'Rig',
        url: '/rig'
    }
].map(link => {
    link.key = `nav-${link.label}`;
    return link
});

const Nav = () => (
    <nav>
        {pages.map(({key, url, label, icon}) => (
            <div key={key}>
                <Link href={url}><a>{icon} {label}</a></Link>
            </div>
        ))}
    </nav>
);

export default Nav;
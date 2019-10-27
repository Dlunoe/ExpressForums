import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={'/topics'}>Forums</Link>
            </li>
            <li>
                <Link to={'/topics/new'}>New Topic</Link>
            </li>
        </ul>
    </div>
)

export default Navigation;
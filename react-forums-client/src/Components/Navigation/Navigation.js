import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import '../../App.css';
import {Button} from 'reactstrap';

const Navigation = () => (
    <div class="Navigation">
        <ul class="nav-list">
            <li class="topic-button">
                <NavLink to={'/topics'} name="nav-forums">
                    <Button>Topics</Button>
                </NavLink>                
            </li>
            <h1 class="site-title">Welcome to My Forums</h1>
            <li class="new-button">
                <NavLink to={'/topics/new'}>
                    <Button>New Topic</Button>
                </NavLink>
            </li>
        </ul>
    </div>
)

export default Navigation;
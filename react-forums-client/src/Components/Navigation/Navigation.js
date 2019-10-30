import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import '../../App.css';
import {Button} from 'reactstrap';

const Navigation = () => (
    <div class="Navigation">
        <ul class="nav-list">
            <li>
                <NavLink to={'/topics'} name="nav-forums">
                    <Button>Topics</Button>
                </NavLink>                
            </li>
            <li class="nav-button">
                <NavLink to={'/topics/new'}>
                    <Button>New Topic</Button>
                </NavLink>
            </li>
        </ul>
    </div>
)

export default Navigation;
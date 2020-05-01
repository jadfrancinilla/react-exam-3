import React from 'react';
import { Router, Route } from 'react-router-dom';

import MemberList from './members/MemberList';
import MemberPosts from './members/MemberPosts';
import PostView from './posts/PostView';
import PostCreate from './posts/PostCreate';

import history from '../history';
import PostDelete from './posts/PostDelete';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <Route path="/" exact component={MemberList} />
                    <Route path="/members/:id" exact component={MemberPosts} />
                    <Route path="/members/:memberId/posts/:postId/view" exact component={PostView} />
                    <Route path="/members/:memberId/posts/:postId/delete" exact component={PostDelete} />
                    <Route path="/members/:id/posts/new" exact component={PostCreate} />
                </Router>
            </div>
        )
    }
}

export default App;
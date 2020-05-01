import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMemberInfoAndPosts } from '../../actions';
import PostItem from '../posts/PostItem';
import Spinner from '../Spinner';

class MemberPosts extends React.Component {
    
    componentDidMount(){
        const memberId = this.props.match.params.id;
        this.props.fetchMemberInfoAndPosts(memberId);
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <PostItem post={post} key={post.id} memberId={this.props.match.params.id} />
            )
        })
    }

    render () {
        const memberId = this.props.match.params.id;
        
        if(this.props.dataLoading) return <Spinner />
        return (
            <div>
                <h1>{this.props.member.name}</h1>
                <Link to={`/members/${memberId}/posts/new`} className="ui button">Create New Post</Link>
                <div className="ui list relaxed divided">
                    {this.renderList()}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { posts: state.posts, member: state.member, dataLoading: state.dataLoading};
}

export default connect(mapStateToProps, { fetchMemberInfoAndPosts: fetchMemberInfoAndPosts })(MemberPosts);
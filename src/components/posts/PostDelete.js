import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost, fetchPost } from '../../actions';
import Spinner from '../Spinner';

class PostDelete extends React.Component {
    componentDidMount(){
        const postId = this.props.match.params.postId;
        this.props.fetchPost(postId)
    }

    deletePost = () => {
        const postId = this.props.match.params.postId;
        const memberId = this.props.match.params.memberId;
        this.props.deletePost(postId, memberId);
    }

    render(){
        if(this.props.dataLoading) return <Spinner />
        return (
            <div>
                <h1>Are you sure you want to delete the post titled "{this.props.post.title}"?</h1>
                <div>
                    <button onClick={this.deletePost} className="ui button">Yes</button>
                    <Link className="ui button" to={`/members/${this.props.match.params.memberId}`}>No, go back</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { post: state.post, dataLoading: state.dataLoading };
}

export default connect(mapStateToProps, { fetchPost: fetchPost, deletePost: deletePost })(PostDelete);
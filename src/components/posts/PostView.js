import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import Spinner from '../Spinner';

class PostView extends React.Component {
    componentDidMount(){
        const postId = this.props.match.params.postId;
        console.log(this.props.match);
        this.props.fetchPost(postId);
    }

    render(){
        if(this.props.dataLoading) return <Spinner />
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { post: state.post, dataLoading: state.dataLoading };
}

export default connect(mapStateToProps, { fetchPost: fetchPost})(PostView);

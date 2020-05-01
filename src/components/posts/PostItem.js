import React from 'react';
import { Link } from 'react-router-dom';

class PostItem extends React.Component {
    render(){
        return (
            <div className="item">
                <div className="middle aligned content">
                    <div className="header">
                        {this.props.post.title}
                    </div>
                    <div className="description">
                        {this.props.post.body}
                    </div>
                    <div className="extra">
                        <Link to={`/members/${this.props.memberId}/posts/${this.props.post.id}/delete`} className="ui button active right floated">Delete</Link>
                        <Link to={`/members/${this.props.memberId}/posts/${this.props.post.id}/view`} className="ui button active right floated">View</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;
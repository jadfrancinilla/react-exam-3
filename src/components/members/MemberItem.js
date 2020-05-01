import React from 'react';

class MemberItem extends React.Component {
    render(){
        return (
            <div className="item">
                <div className="content">
                    <img className="right floated mini ui image" src={this.props.avatar} alt="avatar"/>
                    <div className="header">
                        {this.props.member.name}
                    </div>
                    <div className="description">
                        {this.props.member.company.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberItem;
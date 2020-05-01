import React from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';
import { Link } from 'react-router-dom';
import Faker from 'faker';

import MemberItem from './MemberItem';
import Spinner from '../Spinner';

class MemberList extends React.Component {
    componentDidMount(){
        this.props.fetchMembers();
    }

    renderList () {
        return this.props.members.map(member => {
            return (
                <Link to={`/members/${member.id}`} className="item" key={member.id}>
                    <MemberItem member={member} avatar={Faker.image.avatar()} />
                </Link>
            )
        })
    }

    render(){
        if(this.props.dataLoading){
            return <Spinner />
        }
        return (
            <div>
                <h1>Members</h1>
                <div className="ui list relaxed divided">
                    {this.renderList()}
                </div>
            </div>            
        );
    };
}

const mapStateToProps = (state) => {
    return { members: state.members, dataLoading: state.dataLoading};
}

export default connect(mapStateToProps, { fetchMembers: fetchMembers})(MemberList);

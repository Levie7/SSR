import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>
          {this.props.admins.map((admin) => (
            <li key={admin.id}>{admin.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admins: state.admins };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData,
};

import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ groups }) => (
  <div>
    <h3>Dashboard</h3>
    {groups.map(group => (
      <ConnectedTaskList id = {group.id} name = {group.name} key = {group.id}/>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

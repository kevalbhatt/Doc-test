import React, {Component} from "react";
import axios from "axios";
import { parseString } from "xml2js";
import styled from 'styled-components';

const TeamListStyle = styled.div`
  > table {
    font-family: "Inconsolata",monospace;
    font-size: 14px;
    display: table;
    table-layout: auto;
    color: #13161F;
    width: 50%;
    padding: 0;
    box-shadow: 0 0 0 1px #529d8b;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    border-style: hidden;
    border-radius: 2px;
    overflow-y: hidden;
    overflow-x: initial;
  }
  > table tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  > table tr > td {
    padding: 15px;
    line-height: 2;
    font-weight: 200
  }
  > table > thead {
    color: #7D899C;
    background: #F5F6F7;
  }
  > table > tbody tr {
    display: table-row;
    border-top: 1px solid #529d8b;
  }
  > table > thead > tr > th {
    font-weight: 400;
    padding: 15px;
  }
`;

export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      displayData: []
    };
    this.fetchData();
  }

  fetchData() {
    axios
    .get(`https://raw.githubusercontent.com/apache/atlas/master/pom.xml`)
    .then(res => {
      // Transform the raw data by extracting the nested posts
      parseString(res.data, (err, result) => {
        const developersList = result.project.developers[0].developer;
        const developersListLength = developersList.length;
        let t_displayData = [];
        const keys = Object.keys(developersList[0]);
        for (var i = 0; i < developersListLength; i++) {
          const obj = {};
          keys.map((k) => obj[k] = developersList[i][k]);
          t_displayData.push(obj);
        }
        this.setState({displayData: t_displayData, isLoading: false});
      });
    })
    .catch(err => { console.log('fetching data from pom.xml is failed.')});
  }

  render () {
    const {displayData, isLoading} = this.state;
    return (
      <TeamListStyle>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Roles</th>
              <th>Time Zone</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading
              ? <tr><td colSpan="6">loading...</td></tr>
              : displayData.length === 0
                ? 'Not found'
                : displayData.map((data, i) => {
                  return <tr key={data.id.toString()}>
                    <td>{data.id.toString()}</td>
                    <td>{data.name.toString()}</td>
                    <td>{data.email.toString()}</td>
                    <td>{data.organization.toString()}</td>
                    <td>{data.roles.map((r) => r.role.toString())}</td>
                    <td>{data.timezone.toString()}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </TeamListStyle>
    );
  }
};

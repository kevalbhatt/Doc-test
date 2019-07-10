import * as React from "react";
import axios from "axios";
import { parseString } from "xml2js";

let displayData = "";

axios
    .get(`https://raw.githubusercontent.com/apache/atlas/master/pom.xml`)
    .then(res => {
      // Transform the raw data by extracting the nested posts
      // console.log(res.data);

      parseString(res.data, function(err, result) {
        const developersList = result.project.developers[0].developer;
        const developersListLength = developersList.length;
        console.log(developersList);

        for (var i = 0; i < developersListLength; i++) {
          var {
            email,
            id,
            name,
            organization,
            roles,
            timezone
          } = developersList[i];

          displayData += `${email.join()} | ${id.join()} | ${name.join()} | ${organization.join()} | ${roles[0].role.join(
            ","
          )} | ${timezone.join()} | ${timezone.join()}`;
        }
      });
    })
    .catch(err => {});

const TeamList = props => {
  
  // axios
  //   .get(`https://raw.githubusercontent.com/apache/atlas/master/pom.xml`)
  //   .then(res => {
  //     // Transform the raw data by extracting the nested posts
  //     // console.log(res.data);

  //     parseString(res.data, function(err, result) {
  //       const developersList = result.project.developers[0].developer;
  //       const developersListLength = developersList.length;
  //       console.log(developersList);

  //       for (var i = 0; i < developersListLength; i++) {
  //         var {
  //           email,
  //           id,
  //           name,
  //           organization,
  //           roles,
  //           timezone
  //         } = developersList[i];

  //         displayData += `${email.join()} | ${id.join()} | ${name.join()} | ${organization.join()} | ${roles[0].role.join(
  //           ","
  //         )} | ${timezone.join()} | ${timezone.join()}`;
  //       }
  //     });
  //   })
  //   .catch(err => {});
  console.log("aa");
  return displayData;
};

export default TeamList;

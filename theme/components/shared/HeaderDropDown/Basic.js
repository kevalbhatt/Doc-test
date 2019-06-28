import Select from "react-dropdown-select";
import React, { Fragment } from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";

const Basic = props => {
  let { options, title, ...rest } = props;
  return (
    <Fragment>
      <Select
        color={colors.green}
        options={options}
        onChange={value => {
          if (value.length > 0) {
            window.open(value[0]["href"], "_blank");
          }
        }}
        {...rest}
      />
    </Fragment>
  );
};
Basic.propTypes = {};
export default Basic;

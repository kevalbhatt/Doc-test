import React from 'react';

const CustomLink = props => {
    const style = { color: '#4a90e2'};
    return <a href={props.href} target={props.target || "_blank"} style={style}>{props.children}</a>
};

export {
    CustomLink
};

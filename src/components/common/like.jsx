import React from 'react';

//Input: liked: boolean
//Output: onclick
// site : https://fontawesome.com/v4.7/icon/heart-o

const Like = props => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
        <i 
            onClick={props.onClick}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true" 
        />
    );
}
 
export default Like;
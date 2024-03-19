import React from "react";
import UserPhoto from "../../components/userphoto/userphoto";
import Icon from "../../components/icon/icon";

import "./profile.css"

function Profile({ className, info }) {
    const classes = info ?  `profile-cont info ${className}` : `profile-cont ${className}`;

    return (
        <div className={classes}>
            <Icon iconType="chevron-left" />
            <UserPhoto className="grad" />

            <div className="content">
                <div className="name">
                    <h1>Lucas Garieri</h1>
                    <Icon iconType="edit" />
                </div>

                <div className="info-cont">
                    <p>100 reais fdc</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;

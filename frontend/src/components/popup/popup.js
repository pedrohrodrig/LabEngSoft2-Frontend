import React from 'react';
import Icon from '../icon/icon';
import Title from '../title/title';
import Button from '../button/button';

import "./popup.css";

function Popup({ isOpen, closePopup, head, body, buttons, paths, iconType }) {

    if (isOpen) {
        return (
            <div className='popup-back'>
                <div className='popup'>

                    <div className='popup-head'>
                        <Icon className="popup-icon" iconType={iconType} />
                        <Title className="popup-title" head={head} />

                        <div className='popup-text'>
                            <p className='popup-body'>{body}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        {
                            buttons.map((text, i) => {
                                return (
                                    <Button
                                        className="black medium outline"
                                        text={text}
                                        onClick={closePopup}
                                        to={paths && paths[i]}
                                        key={i}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        );
    }
};

export default Popup;

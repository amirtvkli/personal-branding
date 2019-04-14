import React from "react";

const Avatar = () => 
    <div className="__avatar_canvas">
        <object>    
            <embed src={require('assets/images/avatar.svg')} className="__avatar"/>
        </object>
    </div>

export default Avatar;
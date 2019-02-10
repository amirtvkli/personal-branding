import * as React from "react";
declare var require: any;

export const Avatar: React.StatelessComponent<{}> = () => {
    return (
        <div className="__avatar_canvas">
            <object>    
                <embed src={require('assets/images/avatar.svg')} className="__avatar"/>
            </object>
        </div>
    );
};
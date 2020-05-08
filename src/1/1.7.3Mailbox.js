import React from "react";
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            {unreadMessages.length > 0 &&
            <h4>
                Hello! You have {unreadMessages.length} unread messages.
            </h4>
            }
        </div>
        )
}
export default Mailbox

import uniqid from 'uniqid';
import {useState, useEffect} from "react";


function FriendActivity({friendClick, ind, clicked, friend}){
    const [currClicked, setCurrClicked] = useState(false);
    useEffect(() => {
        console.log(clicked);
    })

    return <div key={uniqid()} id="activity-friend" onClick={() => friendClick(ind)}>
                <span>{friend[0]}</span> <span>{friend[1]}</span>
                {clicked[ind] && <div> Clicked </div>}
            </div>
}

export default FriendActivity;
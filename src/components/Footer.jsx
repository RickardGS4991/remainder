import React from 'react';
import ReactDOM from 'react';

function Footer(){
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    return (
        <div>
        <footer><p>Copyright @{year}</p></footer>
        </div>
    )
}

export default Footer;
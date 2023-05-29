import React from 'react';

export { CustomerService };

function CustomerService() {
    return (
        <li>
            <p>안내</p>
            <ul>
                <li className="wrapper-profile-notice">
                    <a href="">공지사항</a>
                </li>
                <li className="wrapper-profile-inquiry">
                    <a href="">1:1 문의</a>
                </li>
                <li className="wrapper-profile-FAQ">
                    <a href="">자주 찾는 질문</a>
                </li>
            </ul>
        </li>
    );
}

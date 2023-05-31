import React from 'react';

export { CustomerService };

function CustomerService() {
    return (
        <li className="list-account">
            <p>안내</p>
            <ul>
                <li className="list-edit">
                    <a href="">공지사항</a>
                </li>
                <li className="list-edit">
                    <a href="">1:1 문의</a>
                </li>
                <li className="list-edit">
                    <a href="">자주 찾는 질문</a>
                </li>
            </ul>
        </li>
    );
}

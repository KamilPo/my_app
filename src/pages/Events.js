import React from "react";

export default function Events() {
    return (
        <>
            <h1>UL timeline cards</h1>
            <ul>
                <li className={"accentA"}>
                    <div className="date">2002</div>
                    <div className="title">Title 1</div>
                    <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
                </li>
                <li className={"accentB"}>
                    <div className="date">2007</div>
                    <div className="title">Title 2</div>
                    <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                </li>
                <li className={"accentC"}>
                    <div className="date">2012</div>
                    <div className="title">Title 3</div>
                    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                </li>
                <li className={"accentD"}>
                    <div className="date">2017</div>
                    <div className="title">Title 4</div>
                    <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
                </li>
                <li className={"accentE"}>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                </li>
            </ul>
            <div className="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div>
        </>
    )
}
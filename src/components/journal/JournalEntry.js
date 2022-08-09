import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://img.asmedia.epimg.net/resizer/CYK586CiiAa9kZ6DPCluUDYVISs=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZME42WEMAZPPXPJN3ULD7P22TU.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">New Day</p>
        <p className="journal__entry-content">Think, Dream, Believe and Dare</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>09</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

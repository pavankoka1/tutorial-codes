import React from 'react';
import './season.css';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    Winter: {
        text: "Burr, it's cold huh!",
        iconName: 'snowflake'
    }
};

const getWeather = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0) ? "Summer" : "Winter";
    } else {
        console.log(lat);
        return (lat > 0) ? "Winter" : "Summer";
    }
}

let renderContent = (lat) => {
    let season = getWeather(lat, new Date().getMonth());

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${seasonConfig[season].iconName} icon`} />
            <h1>{seasonConfig[season].text}</h1>
            <i className={`icon-right massive ${seasonConfig[season].iconName} icon`} />
        </div>
    );
}

const SeasonDisplay = ({ lat }) => {
    return <div className="border red">
        {renderContent(lat)}
    </div>
}

export default SeasonDisplay;

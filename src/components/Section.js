import React from "react"

function Section(props) {
    return (
        <section className="info-section">
            <img className="section-image" src={props.section.imageUrl} alt="Location"></img>
            <div className="info-top">
                <img className="map-icon" src={require("../images/small-map-icon.jpg")} alt="Small map icon"></img>
                <p className="location-text">{props.section.location}</p>
            </div>
            <a className="maps-link" href={props.section.googleMapsUrl}>View on Google Maps</a>
            <h1 className="title">{props.section.title}</h1>
            <p className="dates">{props.section.startDate} - {props.section.endDate}</p>
            <p className="description">{props.section.description}</p>
        </section>
    )
}

export default Section
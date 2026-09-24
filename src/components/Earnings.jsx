import React from "react";

import {
    Coins,
    TrendingUp,
    Play,
    Clock,
} from "lucide-react";

import "./Earnings.css";


function EarningCard({
    label,
    value,
    unit,
    icon: Icon,
    type,
    subtext,
}) {

    return (
        <div className={`earning-card ${type}`}>

            <div className="earning-icon">
                <Icon
                    size={23}
                    strokeWidth={2}
                />
            </div>


            <div className="earning-card-content">

                <div className="earning-card-top">

                    <span className="earning-label">
                        {label}
                    </span>

                </div>


                <div className="earning-value">

                    <span>
                        {value}
                    </span>

                    <small>
                        {unit}
                    </small>

                </div>


                <div className="earning-subtext">
                    {subtext}
                </div>

            </div>

        </div>
    );
}


function Earnings({ earnings }) {

    const safeEarnings = {
        today: 0,
        lifetime: 0,
        adsWatched: 0,
        remaining: 0,
        ...earnings,
    };


    const earningsData = [

        {
            id: 1,
            label: "Today's Earnings",
            value: safeEarnings.today,
            unit: "VEs",
            icon: Coins,
            type: "today",
            subtext: "Earned from ads today",
        },

        {
            id: 2,
            label: "Lifetime Earnings",
            value: Number(
                safeEarnings.lifetime
            ).toLocaleString(),
            unit: "VEs",
            icon: TrendingUp,
            type: "lifetime",
            subtext: "All time",
        },

        {
            id: 3,
            label: "Ads Watched Today",
            value: safeEarnings.adsWatched,
            unit: "Ads",
            icon: Play,
            type: "ads",
            subtext: "Ads completed today",
        },

        {
            id: 4,
            label: "Remaining Ads",
            value: safeEarnings.remaining,
            unit: "Ads",
            icon: Clock,
            type: "remaining",
            subtext:
                safeEarnings.remaining > 0  ?""
                    : "Daily Goal Completed",
                   
        },

    ];


    return (

        <section className="earnings-section">

            <div className="earnings-grid">

                {earningsData.map((earning) => (

                    <EarningCard
                        key={earning.id}
                        label={earning.label}
                        value={earning.value}
                        unit={earning.unit}
                        icon={earning.icon}
                        type={earning.type}
                        subtext={earning.subtext}
                    />

                ))}

            </div>

        </section>

    );
}


export default Earnings;
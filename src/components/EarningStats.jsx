import React from "react";

import {
    Flame,
    Gift,
    UserRound,
    ShieldCheck,
    Check,
} from "lucide-react";

import "./EarningStats.css";


const defaultRecentEarnings = [
    {
        name: "FinVerse Pro",
        reward: 38
    },
    {
        name: "Stridex",
        reward: 28
    },
    {
        name: "DriveEZ",
        reward: 30
    },
    {
        name: "Melody Beats",
        reward: 20
    },
    {
        name: "SafeNet VPN",
        reward: 18
    }
];


const defaultWeeklyData = [
    {
        day: "Mon",
        value: 42
    },
    {
        day: "Tue",
        value: 58
    },
    {
        day: "Wed",
        value: 49
    },
    {
        day: "Thu",
        value: 63
    },
    {
        day: "Fri",
        value: 70
    },
    {
        day: "Sat",
        value: 78
    },
    {
        day: "Sun",
        value: 100
    }
];


function EarningStats({

    streak = 7,

    completedDays = 5,

    recentEarnings = defaultRecentEarnings,

    weeklyTotal = 1260,

    weeklyGrowth = 18,

    weeklyData = defaultWeeklyData,

    onViewAll,

}) {

    const days = [
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S"
    ];


    const maxWeeklyValue = Math.max(
        ...weeklyData.map(
            (item) => item.value
        ),
        1
    );


    return (

        <section className="earning-stats">


            {/* =========================
                DAILY STREAK
            ========================= */}

            <div className="earning-card streak-card">

                <div className="streak-heading">

                    <div className="streak-title">

                        <Flame
                            size={17}
                            strokeWidth={2.5}
                        />

                        <h3>
                            Daily Streak
                        </h3>

                    </div>

                </div>


                <div className="streak-content">

                    <div className="streak-number-area">

                        <div className="streak-number-row">

                            <span className="streak-number">
                                {streak}
                            </span>

                            <span className="streak-days">
                                Days
                            </span>

                        </div>

                        <p>
                            Keep it up!
                        </p>

                    </div>


                    <div className="streak-gift">

                        <Gift
                            size={42}
                            strokeWidth={1.7}
                        />

                    </div>

                </div>


                <div className="streak-week">

                    {days.map((day, index) => {

                        const completed =
                            index < completedDays;

                        return (

                            <div
                                className="streak-day"
                                key={`${day}-${index}`}
                            >

                                <div
                                    className={`streak-check ${
                                        completed
                                            ? "completed"
                                            : ""
                                    }`}
                                >

                                    {completed && (

                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                        />

                                    )}

                                </div>

                                <span>
                                    {day}
                                </span>

                            </div>

                        );

                    })}

                </div>

            </div>


            {/* =========================
                RECENT EARNINGS
            ========================= */}

            <div className="earning-card recent-card">

                <div className="stats-card-header">

                    <h3>
                        Recent Earnings
                    </h3>

                    <button
                        className="view-all"
                        onClick={onViewAll}
                    >
                        View all
                    </button>

                </div>


                <div className="recent-list">

                    {recentEarnings
                        .slice(0, 5)
                        .map((earning, index) => (

                            <div
                                className="recent-item"
                                key={`${earning.name}-${index}`}
                            >

                                <div className="recent-left">

                                    <div className="recent-icon">

                                        {index === 4 ? (

                                            <ShieldCheck
                                                size={12}
                                                strokeWidth={2}
                                            />

                                        ) : (

                                            <UserRound
                                                size={12}
                                                strokeWidth={2}
                                            />

                                        )}

                                    </div>

                                    <span>
                                        {earning.name}
                                    </span>

                                </div>


                                <strong>
                                    +{earning.reward} VEs
                                </strong>

                            </div>

                        ))}

                </div>

            </div>


            {/* =========================
                WEEKLY EARNINGS
            ========================= */}

            <div className="earning-card weekly-card">

                <div className="stats-card-header">

                    <h3>
                        Weekly Earnings
                    </h3>

                </div>


                <div className="weekly-top">

                    <div className="weekly-total">

                        <strong>
                            {weeklyTotal.toLocaleString()}
                        </strong>

                        <span>
                            {" "}VEs
                        </span>

                    </div>


                    <div className="weekly-growth">

                        <span>
                            ↑ +{weeklyGrowth}%
                        </span>

                        <small>
                            last week
                        </small>

                    </div>

                </div>


                <div className="weekly-chart">

                    {weeklyData.map(
                        (item, index) => {

                            const height =
                                (item.value /
                                    maxWeeklyValue) *
                                100;

                            const isHighest =
                                item.value ===
                                maxWeeklyValue;

                            return (

                                <div
                                    className="chart-column"
                                    key={`${item.day}-${index}`}
                                >

                                    <div className="chart-bar-area">

                                        <div
                                            className={`chart-bar ${
                                                isHighest
                                                    ? "highest"
                                                    : ""
                                            }`}
                                            style={{
                                                height:
                                                    `${height}%`
                                            }}
                                        />

                                    </div>

                                    <span>
                                        {item.day}
                                    </span>

                                </div>

                            );

                        }
                    )}

                </div>

            </div>

        </section>

    );

}


export default EarningStats;
import React from "react";

import {
    ArrowLeft,
    CheckCircle2,
    Clock3,
    Coins,
    PlayCircle,
    CalendarDays,
} from "lucide-react";

import "./EarningsHistory.css";

const allAds = [
    {
        id: 1,
        category: "TRAVEL",
        title: "FinVerse Pro",
        description:
            "Explore amazing destinations with ease.",
        duration: 30,
        reward: 38,
    },
    {
        id: 2,
        category: "LIFESTYLE",
        title: "Stridex",
        description:
            "Step up your game. Comfort meets performance.",
        duration: 45,
        reward: 28,
    },
    {
        id: 3,
        category: "ENTERTAINMENT",
        title: "Melody Beats",
        description:
            "Feel every beat. Anytime. Anywhere.",
        duration: 20,
        reward: 20,
    },
    {
        id: 4,
        category: "AUTOMOTIVE",
        title: "DriveEZ",
        description:
            "Book rides easier than ever before.",
        duration: 60,
        reward: 30,
    },
    {
        id: 5,
        category: "FINANCE",
        title: "SafeNet VPN",
        description:
            "Secure. Private. Lightning fast.",
        duration: 35,
        reward: 18,
    },
    {
        id: 6,
        category: "SHOPPING",
        title: "ShopJoy",
        description:
            "Best deals. Big savings. Just for you.",
        duration: 25,
        reward: 15,
    },
    {
        id: 7,
        category: "FOOD",
        title: "BiteBox",
        description:
            "Delicious meals delivered to your door.",
        duration: 30,
        reward: 22,
    },
    {
        id: 8,
        category: "FITNESS",
        title: "FitCore",
        description:
            "Build better habits and stay active.",
        duration: 40,
        reward: 26,
    },
];

function EarningsHistory({
    recentEarnings = [],
    totalEarned = 0,
    onBack,
}) {
    const completedNames = new Set(
        recentEarnings.map(
            (earning) => earning.name
        )
    );

    const completedCount = allAds.filter(
        (ad) => completedNames.has(ad.title)
    ).length;

    const earnedFromHistory =
        allAds.reduce((total, ad) => {
            if (completedNames.has(ad.title)) {
                return total + ad.reward;
            }

            return total;
        }, 0);

    const displayTotal =
        totalEarned > 0
            ? totalEarned
            : earnedFromHistory;

    return (
        <main className="earnings-history-page">

            {/* TOP BAR */}

            <div className="history-topbar">

                <button
                    type="button"
                    className="history-back-button"
                    onClick={onBack}
                >
                    <ArrowLeft size={18} />
                    <span>
                        Back to Dashboard
                    </span>
                </button>

                <div className="history-title-area">

                    <span className="history-eyebrow">
                        EARNINGS
                    </span>

                    <h1>
                        Earnings History
                    </h1>

                    <p>
                        Track every advertisement and
                        reward from your daily earning activity.
                    </p>

                </div>

            </div>


            {/* SUMMARY */}

            <section className="history-summary">

                <div className="history-summary-card">

                    <div className="history-summary-icon">
                        <Coins size={22} />
                    </div>

                    <div>
                        <span>
                            Today's Earnings
                        </span>

                        <strong>
                            {displayTotal} VEs
                        </strong>
                    </div>

                </div>


                <div className="history-summary-card">

                    <div className="history-summary-icon">
                        <CheckCircle2 size={22} />
                    </div>

                    <div>
                        <span>
                            Ads Completed
                        </span>

                        <strong>
                            {completedCount}/8
                        </strong>
                    </div>

                </div>


                <div className="history-summary-card">

                    <div className="history-summary-icon">
                        <CalendarDays size={22} />
                    </div>

                    <div>
                        <span>
                            Daily Goal
                        </span>

                        <strong>
                            8 Ads
                        </strong>
                    </div>

                </div>

            </section>


            {/* HISTORY */}

            <section className="history-container">

                <div className="history-header">

                    <div>
                        <h2>
                            Advertisement History
                        </h2>

                        <p>
                            All available advertisements
                            for today's earning session.
                        </p>
                    </div>

                    <span className="history-count">
                        {allAds.length} Advertisements
                    </span>

                </div>


                <div className="history-list">

                    {allAds.map((ad, index) => {

                        const completed =
                            completedNames.has(
                                ad.title
                            );

                        return (
                            <article
                                className={`history-item ${
                                    completed
                                        ? "completed"
                                        : ""
                                }`}
                                key={ad.id}
                            >

                                <div className="history-number">
                                    {String(index + 1).padStart(
                                        2,
                                        "0"
                                    )}
                                </div>


                                <div className="history-ad-icon">
                                    {completed ? (
                                        <CheckCircle2
                                            size={22}
                                        />
                                    ) : (
                                        <PlayCircle
                                            size={22}
                                        />
                                    )}
                                </div>


                                <div className="history-ad-info">

                                    <div className="history-ad-title-row">

                                        <h3>
                                            {ad.title}
                                        </h3>

                                        <span>
                                            {ad.category}
                                        </span>

                                    </div>

                                    <p>
                                        {ad.description}
                                    </p>

                                </div>


                                <div className="history-meta">

                                    <div>
                                        <Clock3
                                            size={13}
                                        />

                                        <span>
                                            {ad.duration}s
                                        </span>
                                    </div>

                                </div>


                                <div className="history-reward">

                                    <span>
                                        REWARD
                                    </span>

                                    <strong>
                                        +{ad.reward} VEs
                                    </strong>

                                </div>


                                <div
                                    className={`history-status ${
                                        completed
                                            ? "status-completed"
                                            : "status-available"
                                    }`}
                                >

                                    {completed ? (
                                        <>
                                            <CheckCircle2
                                                size={14}
                                            />
                                            Completed
                                        </>
                                    ) : (
                                        <>
                                            <PlayCircle
                                                size={14}
                                            />
                                            Available
                                        </>
                                    )}

                                </div>

                            </article>
                        );
                    })}

                </div>

            </section>


            {/* FOOTER */}

            <div className="history-footer">

                <span>
                    Veloop Rewards
                </span>

                <span>
                    Keep watching. Keep earning.
                </span>

            </div>

        </main>
    );
}

export default EarningsHistory;
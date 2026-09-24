import React, { useCallback, useState } from "react";

import HeroBanner from "./components/HeroBanner";
import Earnings from "./components/Earnings";
import ProgressBar from "./components/ProgressBar";
import EarningStats from "./components/EarningStats";
import AdSections from "./components/AdSection";

import "./App.css";

const DAILY_GOAL = 6;

const adNamesByReward = {
38: "FinVerse Pro",
28: "Stridex",
20: "Melody Beats",
32: "DriveEZ",
30: "SafeNet VPN",
};

function App() {
const [earnings, setEarnings] = useState({
today: 0,
lifetime: 0,
adsWatched: 0,
remaining: DAILY_GOAL,
});


const [recentEarnings, setRecentEarnings] = useState([]);

const [weeklyData, setWeeklyData] = useState([
    { day: "Mon", value: 42 },
    { day: "Tue", value: 58 },
    { day: "Wed", value: 49 },
    { day: "Thu", value: 63 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 78 },
    { day: "Sun", value: 100 },
]);

const handleAdCompleted = useCallback((reward) => {
    const adName =
        adNamesByReward[reward] || "Advertisement";

    setEarnings((prev) => {
        const adsWatched = prev.adsWatched + 1;
        const today = prev.today + reward;
        const lifetime = prev.lifetime + reward;

        const remaining = Math.max(
            DAILY_GOAL - adsWatched,
            0
        );

        return {
            today,
            lifetime,
            adsWatched,
            remaining,
        };
    });

    setRecentEarnings((prev) => [
        {
            name: adName,
            reward,
        },
        ...prev,
    ].slice(0, 5));

    setWeeklyData((prev) => {
        const updated = [...prev];
        const todayIndex = updated.length - 1;

        updated[todayIndex] = {
            ...updated[todayIndex],
            value:
                updated[todayIndex].value + reward,
        };

        return updated;
    });
}, []);

const weeklyTotal = weeklyData.reduce(
    (total, item) => total + item.value,
    0
);

const allAdsCompleted =
    earnings.adsWatched >= DAILY_GOAL;

return (
    <main className="app">

        <HeroBanner />

        <Earnings
            earnings={earnings}
        />

        <ProgressBar
            adsWatched={earnings.adsWatched}
            dailyGoal={DAILY_GOAL}
        />

        {allAdsCompleted ? (
            <section className="completion-section">
                <div className="completion-card">

                    <div className="completion-icon">
                        ✓
                    </div>

                    <span className="completion-label">
                        DAILY GOAL COMPLETE
                    </span>

                    <h2 className="completion-title">
                        Congratulations!
                    </h2>

                    <p className="completion-description">
                        You watched all {DAILY_GOAL} advertisements
                        for today.
                    </p>

                    <div className="completion-reward">
                        <span className="completion-reward-value">
                            +{earnings.today}
                        </span>

                        <span className="completion-reward-unit">
                            VEs earned
                        </span>
                    </div>

                    <div className="completion-stats">

                        <div className="completion-stat">
                            <span>Ads Completed</span>

                            <strong>
                                {earnings.adsWatched}/{DAILY_GOAL}
                            </strong>
                        </div>

                        <div className="completion-stat">
                            <span>Remaining</span>

                            <strong>
                                0
                            </strong>
                        </div>

                    </div>

                    <p className="completion-note">
                        Come back tomorrow for more rewards.
                    </p>

                </div>
            </section>
        ) : (
            <AdSections id="ads-section"
                adsWatched={earnings.adsWatched}
                totalEarned={earnings.today}
                onAdCompleted={handleAdCompleted}
            />
        )}

        <EarningStats
            streak={7}
            completedDays={5}
            recentEarnings={recentEarnings}
            weeklyTotal={weeklyTotal}
            weeklyGrowth={18}
            weeklyData={weeklyData}
            onViewAll={() => {
                console.log(
                    "View all earnings"
                );
            }}
        />

    </main>
);


}

export default App;

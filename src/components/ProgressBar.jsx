import "./ProgressBar.css";
import { Target } from "lucide-react";

function ProgressBar({ adsWatched, dailyGoal = 8 }) {

    const percentage = Math.min(
        Math.round((adsWatched / 8) * 100),
        100
    );

    const remainingAds = Math.max(
        8 - adsWatched,
        0
    );

    return (
        <section className="progress-section">

            <div className="progress-icon">
                <Target
                    size={22}
                    strokeWidth={2}
                />
            </div>

            <div className="progress-content">

                <div className="progress-top">

                    <h3>
                        Daily Earnings Progress
                    </h3>

                    <p>
                        Watch more ads to reach your daily goal.
                    </p>

                </div>

                <div className="progress-track">

                    <div
                        className="progress-fill"
                        style={{
                            width: `${percentage}%`
                        }}
                    />

                </div>

                <div className="progress-info">

                    <span>
                        {adsWatched} / 8 ads
                    </span>

                </div>

                <div className="progress-percent">
                    {percentage}%
                </div>

            </div>

        </section>
    );
}

export default ProgressBar;
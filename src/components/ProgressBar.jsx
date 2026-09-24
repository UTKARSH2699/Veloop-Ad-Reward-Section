import "./ProgressBar.css";
import { Target } from "lucide-react";

function ProgressBar({ adsWatched, dailyGoal }) {

    const percentage = Math.min(
        Math.round((adsWatched / dailyGoal) * 100),
        100
    );

    const remainingAds = Math.max(
        dailyGoal - adsWatched,
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

                    <div>
                        <h3>
                            Daily Earnings Progress
                        </h3>

                        <p>
                            Watch more ads to reach your daily goal.
                        </p>
                    </div>

                    <span className="progress-percent">
                        {percentage}%
                    </span>

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
                        {adsWatched} / {dailyGoal} ads
                    </span>

                    <span>
                        {remainingAds} ads remaining
                    </span>

                </div>

            </div>

        </section>
    );
}

export default ProgressBar;
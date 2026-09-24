import "./HeroBanner.css";

import heroImage from "../assets/Herobanner.png";

function HeroBanner() {

    return (

        <section className="hero-banner">

            <img
                src={heroImage}
                alt=""
                className="hero-banner-image"
            />

            <div className="hero-content">

                <div className="hero-badge">
                    <span className="badge-icon">▶</span>
                    <span>SMALL ADS. BIGGER OPPORTUNITIES.</span>
                </div>

                <h1>
                    Watch Ads & <span>Earn</span>
                </h1>

                {/* Description */}
                <p>
                    Discover new brands, watch short advertisements
                    and earn VES. Your VES can be converted into real
                    cash and withdrawn to your bank account.
                </p>

                <button
                    className="hero-button"
                    onClick={() => {
                        document.getElementById("ads-section")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                >
                    <span>Start Watching</span>
                    <span className="button-arrow"></span>
                </button>

            </div>
        </section>
    );
}

export default HeroBanner;
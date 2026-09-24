import React, { useEffect, useState } from "react";
import { Play, Clock3 } from "lucide-react";
import Headphone from "../assets/Headphone.png";
import Suitcase from "../assets/Suitcase.png";
import Shoe from "../assets/Shoe.png";
import Carimage from "../assets/Carimage.png";
import Safety from "../assets/Safety.png";
import Giftbox from "../assets/Giftbox.png";
import "./AdSection.css";

const ads = [
    {
        id: 1,
        category: "Finance",
        categoryClass: "finance",
        title: "FinVerse Pro",
        description: "Smart tools for smarter money.",
        duration: 2,
        reward: 38,
        image: Suitcase,
    },
    {
        id: 2,
        category: "Travel",
        categoryClass: "travel",
        title: "Explore the World",
        description: "Discover amazing destinations with ease.",
        duration: 2,
        reward: 38,
        image: Shoe,
    },
    {
        id: 3,
        category: "Lifestyle",
        categoryClass: "lifestyle",
        title: "Stridex",
        description: "Comfort meets performance.",
        duration: 2,
        reward: 28,
        image: Carimage,
    },
    {
        id: 4,
        category: "Entertainment",
        categoryClass: "entertainment",
        title: "Melody Beats",
        description: "Find your sound and enjoy every beat.",
        duration: 2,
        reward: 20,
        image: Headphone,
    },
    {
        id: 5,
        category: "Technology",
        categoryClass: "technology",
        title: "DriveEZ",
        description: "Technology that keeps you moving.",
        duration: 2,
        reward: 32,
        image: Safety,
       
    },
    {
        id: 6,
        category: "Technology",
        categoryClass: "technology",
        title: "SafeNet VPN",
        description: "Browse privately and securely.",
        duration: 2,
        reward: 30,
        image: Giftbox,
         
        
    },
];

const AdSection = ({ id , onAdCompleted }) => {
    const [watchingId, setWatchingId] = useState(null);
    const [watchedAds, setWatchedAds] = useState([]);

    useEffect(() => {
        if (watchingId === null) return;

        const timer = setTimeout(() => {
            const completedAd = ads.find(
                (ad) => ad.id === watchingId
            );

            if (completedAd) {
                setWatchedAds((prev) =>
                    prev.includes(watchingId)
                        ? prev
                        : [...prev, watchingId]
                );

                if (onAdCompleted) {
                    onAdCompleted(completedAd.reward);
                }
            }

            setWatchingId(null);
        }, 2000);

        return () => clearTimeout(timer);
    }, [watchingId, onAdCompleted]);

    const handleWatch = (id) => {
        if (watchingId !== null) return;
        if (watchedAds.includes(id)) return;

        setWatchingId(id);
    };

    return (
        <section id={id} className="ad-section">
            <div className="ad-grid">
                {ads.map((ad) => {
                    const isWatching = watchingId === ad.id;
                    const isWatched = watchedAds.includes(ad.id);

                    return (
                        <article
                            className="ad-card"
                            key={ad.id}
                        >
                            <div className="ad-header">
                                <span className="ad-duration">
                                    <Clock3 size={13} />
                                    {ad.duration}s
                                </span>
                            </div>

                            <div className="ad-image-wrapper">
                                <img
                                    className="ad-image"
                                    src={ad.image}
                                    alt={ad.title}
                                />
                            </div>

                            <div className="ad-content">
                                <h3 className="ad-title">
                                    {ad.title}
                                </h3>

                                <p className="ad-description">
                                    {ad.description}
                                </p>

                                <div className="ad-meta">
                                    <span>
                                        {isWatched
                                            ? "Advertisement watched"
                                            : isWatching
                                            ? "Advertisement playing"
                                            : "Watch advertisement"}
                                    </span>
                                </div>

                                <div className="ad-reward">
                                    <div className="ad-reward-info">
                                        <span
                                            className={`ad-category ${ad.categoryClass}`}
                                        >
                                            {ad.category}
                                        </span>

                                        <div className="ad-reward-value">
                                            <span className="ad-reward-amount">
                                                +{ad.reward}
                                            </span>

                                            <span className="ad-reward-unit">
                                                VEs
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className={`ad-watch-button ${
                                            isWatched
                                                ? "watched"
                                                : isWatching
                                                ? "watching"
                                                : "watch"
                                        }`}
                                        disabled={
                                            isWatching || isWatched
                                        }
                                        onClick={() =>
                                            handleWatch(ad.id)
                                        }
                                    >
                                        {isWatched ? (
                                            "Ad Watched"
                                        ) : isWatching ? (
                                            <>
                                                <Clock3 size={14} />
                                                Watching...
                                            </>
                                        ) : (
                                            <>
                                                <Play
                                                    size={14}
                                                    fill="currentColor"
                                                />
                                                Watch Ad
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default AdSection;
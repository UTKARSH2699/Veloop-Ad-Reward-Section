import React, { useEffect, useState } from "react";
import {
    Play,
    Clock3,
    SlidersHorizontal,
} from "lucide-react";

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
        category: "TRAVEL",
        categoryClass: "travel",
        title: "FinVerse Pro",
        description: "Explore amazing destinations with ease.",
        duration: 30,
        reward: 38,
        image: Suitcase,
    },
    {
        id: 2,
        category: "LIFESTYLE",
        categoryClass: "lifestyle",
        title: "Stridex",
        description: "Step up your game. Comfort meets performance.",
        duration: 45,
        reward: 28,
        image: Shoe,
    },
    {
        id: 3,
        category: "ENTERTAINMENT",
        categoryClass: "entertainment",
        title: "Melody Beats",
        description: "Feel every beat. Anytime. Anywhere.",
        duration: 20,
        reward: 20,
        image: Headphone,
    },
    {
        id: 4,
        category: "AUTOMOTIVE",
        categoryClass: "automotive",
        title: "DriveEZ",
        description: "Book rides easier than ever before.",
        duration: 60,
        reward: 30,
        image: Carimage,
    },
    {
        id: 5,
        category: "FINANCE",
        categoryClass: "finance",
        title: "SafeNet VPN",
        description: "Secure. Private. Lightning fast.",
        duration: 35,
        reward: 18,
        image: Safety,
    },
    {
        id: 6,
        category: "SHOPPING",
        categoryClass: "shopping",
        title: "ShopJoy",
        description: "Best deals. Big savings. Just for you.",
        duration: 25,
        reward: 15,
        image: Giftbox,
    },
    {
        id: 7,
        category: "FOOD",
        categoryClass: "food",
        title: "BiteBox",
        description: "Delicious meals delivered to your door.",
        duration: 30,
        reward: 22,
        image: Giftbox,
    },
    {
        id: 8,
        category: "FITNESS",
        categoryClass: "fitness",
        title: "FitCore",
        description: "Build better habits and stay active.",
        duration: 40,
        reward: 26,
        image: Shoe,
    },
];

function AdSection({ id, onAdCompleted }) {
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

    const handleWatch = (adId) => {
        if (watchingId !== null) return;
        if (watchedAds.includes(adId)) return;

        setWatchingId(adId);
    };

    return (
        <section
            id={id}
            className="ad-section"
        >
            <div className="ad-section-header">

                <div className="ad-heading">
                    <div className="ad-heading-row">
                        <h2>
                            Available Advertisements
                        </h2>

                        <span className="ad-count">
                            {ads.length} Ads Available
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    className="ad-sort"
                >
                    <span>Sort by</span>
                    <strong>Recommended</strong>
                    <SlidersHorizontal size={12} />
                </button>

            </div>

            <div className="ad-grid">

                {ads.map((ad) => {
                    const isWatching =
                        watchingId === ad.id;

                    const isWatched =
                        watchedAds.includes(ad.id);

                    return (
                        <article
                            className="ad-card"
                            key={ad.id}
                        >

                            <div className="ad-image-area">

                                <img
                                    src={ad.image}
                                    alt={ad.title}
                                    className="ad-image"
                                />

                                <span
                                    className={`ad-category ${ad.categoryClass}`}
                                >
                                    {ad.category}
                                </span>

                            </div>

                            <div className="ad-duration">
                                <Clock3 size={10} />

                                <span>
                                    {ad.duration}s
                                </span>
                            </div>

                            <div className="ad-main">

                                <h3 className="ad-title">
                                    {ad.title}
                                </h3>

                                <p className="ad-description">
                                    {ad.description}
                                </p>

                            </div>

                            <div className="ad-reward">

                                <span className="reward-value">
                                    +{ad.reward}
                                </span>

                                <span className="reward-unit">
                                    VEs
                                </span>

                            </div>

                            <div className="ad-status">
                                {isWatched
                                    ? "Watched"
                                    : "Available"}
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
                                    isWatching ||
                                    isWatched
                                }
                                onClick={() =>
                                    handleWatch(ad.id)
                                }
                            >
                                {isWatched ? (
                                    "Ad Watched"
                                ) : isWatching ? (
                                    <>
                                        <Clock3 size={11} />
                                        Watching...
                                    </>
                                ) : (
                                    <>
                                        <Play
                                            size={10}
                                            fill="currentColor"
                                        />
                                        Watch Advertisement
                                    </>
                                )}
                            </button>

                        </article>
                    );
                })}

            </div>
        </section>
    );
}

export default AdSection;
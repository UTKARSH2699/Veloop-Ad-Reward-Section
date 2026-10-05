import React from "react";
import {
    Play,
    Coins,
    ArrowLeftRight,
    Building2,
    ArrowRight,
} from "lucide-react";

import "./Tutorial.css";

const steps = [
    {
        number: "1.",
        title: "Watch",
        description:
            "Watch short ads and complete the timer.",
        icon: Play,
    },
    {
        number: "2.",
        title: "Earn",
        description:
            "Receive VEs after completing the ad.",
        icon: Coins,
    },
    {
        number: "3.",
        title: "Convert",
        description:
            "Your VEs can be converted into real cash.",
        icon: ArrowLeftRight,
    },
    {
        number: "4.",
        title: "Withdraw",
        description:
            "Withdraw to your linked bank account once minimum conditions are met.",
        icon: Building2,
    },
];

const Tutorial = () => {
    return (
        <section className="tutorial-section">
            {/* HEADER */}
            <div className="tutorial-header">
                <div>
                    <h2 className="tutorial-title">
                        How Your Rewards Work
                    </h2>

                    <p className="tutorial-subtitle">
                        Understand how your VEs turn into real rewards.
                    </p>
                </div>

                <span className="tutorial-tagline">
                    Simple. Transparent. Rewarding.
                </span>
            </div>

            {/* CONTENT */}
            <div className="tutorial-content">
                <div className="tutorial-steps">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <React.Fragment key={step.number}>
                                <div className="tutorial-step">
                                    <div className="tutorial-icon">
                                        <Icon size={25} strokeWidth={2.2} />
                                    </div>

                                    <div className="tutorial-step-info">
                                        <h3>
                                            <span>{step.number}</span>{" "}
                                            {step.title}
                                        </h3>

                                        <p>{step.description}</p>
                                    </div>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="tutorial-arrow">
                                        <ArrowRight
                                            size={23}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* WALLET BUTTON */}
                <button className="tutorial-wallet-button">
                    <span>View My Wallet</span>

                    <ArrowRight
                        size={19}
                        strokeWidth={2}
                    />
                </button>
            </div>
        </section>
    );
};

export default Tutorial;
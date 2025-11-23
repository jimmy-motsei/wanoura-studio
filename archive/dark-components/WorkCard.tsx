// components/WorkCard.tsx
import React from "react";
import styles from "./WorkCard.module.css";

export type WorkCardProps = {
    client: string;
    title: string;
    description: string;
    tag?: string;
    duration?: string;
    year?: string;
};

export function WorkCard({
                             client,
                             title,
                             description,
                             tag = "Custom score",
                             duration = "00:42",
                             year = "2024",
                         }: WorkCardProps) {
    return (
        <article className={styles["work-card"]}>
            <button
                type="button"
                className={styles["work-card__play"]}
                aria-label={`Play ${title}`}
            >
                <span className={styles["work-card__play-dot"]} />
            </button>

            <div className={styles["work-card__body"]}>
                <p className={styles["work-card__client"]}>{client}</p>
                <h3 className={styles["work-card__title"]}>{title}</h3>
                <p className={styles["work-card__desc"]}>{description}</p>
                <p className={styles["work-card__meta"]}>
                    <span>{tag}</span>
                    <span>{duration}</span>
                </p>
            </div>

            <div className={styles["work-card__year"]}>{year}</div>
        </article>
    );
}

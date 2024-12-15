"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ItemList.module.css";

type Item = {
  id: number;
  name: string;
  color: string;
};

const items: Item[] = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Grapes", color: "green" },
  { id: 4, name: "Cherry", color: "red" },
  { id: 5, name: "Lime", color: "green" },
];

const ItemList: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [heights, setHeights] = useState<Record<number, number>>({});
  const [delayed, setDelayed] = useState(false); // New state for delay

  const refs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleFilter = (color: string) => {
    setFilter((prev) => (prev === color ? "" : color));
  };

  const isVisible = (color: string) => !filter || color === filter;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayed(true); // Enable delayed height transition after 5 seconds
    }, 2000);
    console.log("timeout", timeout);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const newHeights: Record<number, number> = {};
    Object.keys(refs.current).forEach((id) => {
      const itemRef = refs.current[+id];
      if (itemRef) {
        newHeights[+id] = itemRef.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [filter]);

  return (
    <div>
      <div className={styles.filters}>
        <button
          onClick={() => handleFilter("red")}
          className={filter === "red" ? styles.active : ""}
        >
          Red
        </button>
        <button
          onClick={() => handleFilter("green")}
          className={filter === "green" ? styles.active : ""}
        >
          Green
        </button>
        <button
          onClick={() => handleFilter("yellow")}
          className={filter === "yellow" ? styles.active : ""}
        >
          Yellow
        </button>
      </div>
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              refs.current[item.id] = el;
            }}
            className={`${styles.itemWrap} ${
              isVisible(item.color) ? styles.show : styles.hide
            }`}
            style={{
              height: delayed
                ? isVisible(item.color)
                  ? `${heights[item.id] || 0}px`
                  : "0px"
                : "", // Initially set height to auto
            }}
          >
            <div className={styles.item}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

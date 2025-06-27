import { useEffect, useState } from "react";

export default function CountUp({ start = 0, end }) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let current = start;
        const duration = 2000; // 1 second
        const stepTime = Math.abs(Math.floor(duration / (end - start)));

        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [start, end]);

    return <h1>{count}+</h1>;
}

import { useEffect, useState } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

export function CountdownTimer() {
    const [secondsLeft, setSecondsLeft] = useState(getInitialTimerValue);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const hh = Math.floor(secondsLeft / 3600);
    const mm = Math.floor((secondsLeft % 3600) / 60);
    const ss = secondsLeft % 60;

    return (
        <NumberFlowGroup>
            <div className="text-xl sm:text-2xl flex items-baseline font-semibold">
                <NumberFlow trend={-1} value={hh} format={{ minimumIntegerDigits: 2 }} suffix=" годин " />
                <NumberFlow
                    trend={-1}
                    value={mm}
                    digits={{ 1: { max: 5 } }}
                    format={{ minimumIntegerDigits: 2 }}
                    suffix=" хвилин "
                />
                <NumberFlow
                    trend={-1}
                    value={ss}
                    digits={{ 1: { max: 5 } }}
                    format={{ minimumIntegerDigits: 2 }}
                    suffix=" секунд "
                />
            </div>
        </NumberFlowGroup>
    );
}

function getInitialTimerValue() {
    return Math.round((24 + Math.random() * 24) * 3600);
}

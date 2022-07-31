import { FunctionComponent, useEffect, useState } from "react";

interface Properties {
    values: string[]; // The list of values to cycle through
    duration: number; // The duration to display each value
}

/**
 * Typer is a component which types out each of the provided
 * string values; displaying them for the provided duration
 * then deleting the value before typing the next value.
 *
 * @param values The string array of values to type out
 * @param duration The duration each value should stay for
 */
const Typer: FunctionComponent<Properties> = ({values, duration}) => {
    const [value, setValue] = useState(""); // State for the current value
    const [complete, setComplete] = useState(false); // State for whether typing is complete

    useEffect(() => {
        let deleting = false; // Determines whether the next update should delete a character
        let valueIndex = 0; // The index in the array of values that is the current value
        let currentLength = 0; // The length of the currently rendered value
        let timeout: NodeJS.Timeout;

        /**
         * This function handles updating the state for the typer
         * this decreases the value if we are deleting or increases
         * if we are typing. This function calls {@link setTimeout}
         * providing itself along with the delay for the next update
         */
        const executeUpdate = () => {
            setComplete(false) // Set the initial complete state

            const valueAtIndex: string = values[valueIndex]; // The value that is at the current index
            let delay: number; // The delay before update should be called

            if (deleting) {
                currentLength--; // Deleting reduces the length of the value
                if (currentLength == 0) { // If we have fully deleted the value
                    deleting = false; // The next update should be typing

                    // Increase the value index
                    if (valueIndex + 1 < values.length) {
                        valueIndex++
                    } else {
                        valueIndex = 0 // Wrap around to the first value
                    }
                    delay = 500; // 500ms delay before typing again
                } else {
                    delay = 150 - (Math.random() * 50);
                }
            } else {
                currentLength++; // Typing increases the length of the value
                if (currentLength == valueAtIndex.length) { // If we are at the end of the value
                    delay = duration; // Set the delay to the display duration
                    deleting = true; // Delete the text on the next update
                    setComplete(true)
                } else {
                    delay = 300 - (Math.random() * 100);
                }
            }

            const newValue = valueAtIndex.substring(0, currentLength);
            setValue(newValue); // Update the value state
            timeout = setTimeout(executeUpdate, delay); // Execute the next update after the delay
        }

        executeUpdate() // Execute the initial update

        // Function for disposing of the timeout
        return () => {
            clearTimeout(timeout)
        };
    }, [duration, values])

    return (
        <span className="typer" data-typing={!complete}>
            {value}
        </span>
    )
}

export default Typer;
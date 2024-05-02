let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
};

function transition(newState) {
    let options = states[currentState];
    if (options.includes(newState)) {
        currentState = newState;
        console.log(currentState);
    }
    else {
        for (let opt of options) {
            let newOptions = states[opt];
            if (newOptions.includes(newState)) {
                currentState = newState;
                console.log(currentState);
                return;
            }
        }
        throw new Error("Invalid state transition attempted - from " + currentState + " to " + newState);
    }
}

// function traverse(newState) {
//     while (currentState !== newState) {
//         let options = states[currentState];
//         if (options.includes(newState)) {
//             currentState = newState;
//             console.log(currentState);
//         }
//         else {
//             currentState = options[0];
//         }
//     }
// }

let currentState = "green";

transition("red");
// traverse("yield");
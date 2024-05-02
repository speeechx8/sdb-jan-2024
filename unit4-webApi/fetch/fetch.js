async function ourFetch(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function syncFun() {
    throw new Error("Oops!");
}

let computerPacket = `{
	"cpu": "i9 9900k",
    "gpu": "RTX 4080ti",
    "ram": {
        "totalSize": 16,
        "numSticks": 2,
        "ramName": "Corsair VENGEANCE RGB PRO DDR4"
    },
    "storage": [
        {
            "type": "SSD",
            "size": "256GB"
        },
        {
            "type": "SSHD",
            "size": "2TB"
        }
    ],
    "cooling": "fans",
    "psu": 1000,
    "caseSize": "medium"
}`

let computerObj = JSON.parse(computerPacket);

try {
    console.log(computerObj.cpu);
}
catch(error) {
    console.log(error.message);
}
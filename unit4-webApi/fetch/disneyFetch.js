async function info(url, num) {
    try {
        const res = await fetch(url);
        // in soviet russia everybody shares data
        const ourData = await res.json();
        // console.log(ourData.data[num]);
        // console.log(ourData.data[num].name);
        // console.log(ourData.data[num].imageUrl);

        return [ourData.data[num].name, ourData.data[num].imageUrl];
    }
    catch(error) {
        console.log(error);
    }
}
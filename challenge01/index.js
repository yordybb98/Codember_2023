function countItemInArray(item, array){

    const total = array.reduce((count, element)=> {
        if(element === item) count ++
        return count;
    }, 0)

    return total
}

async function challenge01() {
    try {
        const response = await fetch("https://codember.dev/data/message_01.txt");
        
        if (!response.ok) {
            throw new Error(`Request error: ${response.status}`);
        }

        const message = await response.text();

        // Splitting the words
        const words = message.toLocaleLowerCase().split(" ");
        
        //Removing Duplicates Keys
        uniqueSet = new Set(Object.values(words))
        uniqueWords = Array.from(uniqueSet)

        //Concatening every unique element with its counts
        let result = "";
        uniqueWords.forEach(element => {
            result = result.concat(element + countItemInArray(element, words)); 
        });
        console.log(result);
    } catch (error) {
        console.error("An error ocurrs when executing the function challenge01:", error);
    }
}

challenge01();


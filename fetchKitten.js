const fs = require('node:fs/promises');
const path = require('node:path');

const outputFileEntry = process.argv[2];
    if(outputFileEntry === undefined){
        throw new Error('enter file name');
    }

async function kitten(){
    const response = await fetch(`http://placekitten.com/200/300`,{
        method: 'GET',
        headers: {"x-text": "foo"}
    });
    const rawFile = new DataView(await response.arrayBuffer());
    const outputFile = path.join(__dirname, `${outputFileEntry}.jpeg`)
    await fs.writeFile(outputFile, rawFile)
}

kitten();
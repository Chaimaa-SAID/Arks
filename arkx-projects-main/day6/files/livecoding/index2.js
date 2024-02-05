const fs = require('fs').promises;
 async function writefile(filePath,content){
    console.log("hello");
    await fs.writeFile(filePath, content, 'utf-8');

    

}

async function readFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log("the content :",content);

}
writefile("file4","hello")
readFile("file1")
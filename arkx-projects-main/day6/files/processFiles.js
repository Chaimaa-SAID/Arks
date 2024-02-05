const readFileAsync = require('./readFileAsync');
const writeFileAsync = require('./writeFileAsync');

async function processFiles(filePaths) {
  try {
    for (const filePath of filePaths) {
      const content = await readFileAsync(filePath);

  
      const processedContent = `${new Date().toLocaleString()}\n${content}`;

      const newFilePath = `processed_${filePath}`;
      await writeFileAsync(newFilePath, processedContent);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = processFiles;

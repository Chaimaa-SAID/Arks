const fs = require('fs').promises;

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`File written successfully: ${filePath}`);
  } catch (error) {
    throw new Error(`Error writing file: ${error.message}`);
  }
}

module.exports = writeFileAsync;

const processFiles = require('./processFiles');

const filePaths = ['file1.txt', 'file2.txt']; 

async function main() {
  try {
    await processFiles(filePaths);
  } catch (error) {
    console.error(error.message);
  }
}

main();

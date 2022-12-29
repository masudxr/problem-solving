const readline = require('node:readline');
const util = require('node:util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

async function main() {
  const Bookname = await question('Please input Bookname:');

  console.log('=>', Bookname);

  const AuthorName = await question('Please input Authorname:');

  console.log('=>', AuthorName );
}

main()
  .then(() => rl.close())
  .catch((e) => console.log(e));
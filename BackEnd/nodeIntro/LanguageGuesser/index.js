//const franc = require('franc')
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');

const text = process.argv[2];
console.log(text)

const langDet = franc(text);
console.log(langDet)
if (langDet === 'und') {
    console.log('Texto muito curto');
} else {
    const myLang = langs.where("3", langDet);
    console.log(myLang);
    console.log(`Eu acho que eh ${myLang.name}!`);
}



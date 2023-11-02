#!/usr/bin/env node

import { ipfsIDSfind as ids_find } from 'ipfs-ids-find';

async function main (){

    let args = process.argv;

    args.shift();
    args.shift();

    console.log (args);

    const components = args.map(arg => Array.from(arg)).reduce((acc, cur) => acc.concat(cur));
    const result = await ids_find (components);
    console.log (result);
}

main ();

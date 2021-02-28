#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const execsync = require('child_process').exec;
const { getInstalledPath } =  require("./get-installed-path");

(async ()=>{
    console.log('installing playwright. please wait');
    execsync('npm install -g playwright', async ()=>{
        const pt = await getInstalledPath('browserbox-win')
        await exec(`START /wait ${pt}/browserbox.exe`);
    }).stdout.pipe(process.stdout);
})()
    

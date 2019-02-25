const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');
const ROOT = "./";

getInstallerConfig()
    .then((config) => {
        createWindowsInstaller(config)
            .then(() => {
                console.info("Successfully created installer for OCLM Assignment Backup !")
            }, (e) => {
                console.log(`Error: ${e.message}`)
            })
    }).catch((error) => {
        console.error(error.message || error);
        process.exit(1)
    });

function getInstallerConfig() {
    console.info('Creating windows installer for OCLM Assignment Backup ... ');
    return Promise.resolve({
        noMsi: true,
        name: 'OCLMAssignmentBackup',
        title: 'OCLMAssignmentBackup',
        exe: 'oclm-assignment-backup.exe',
        setupExe: 'OCLMAssignmentBackup.exe',
        authors: 'udofiawin@gmail.com',
        outputDirectory: `${ROOT}output`,
        setupIcon: `${ROOT}assets/icons/win/logo.ico`,
        appDirectory: `${ROOT}/oclm-assignment-backup`,
        loadingGif: `${ROOT}assets/animation/loader.gif`
    })
}
function incrementalBackups(lastBackupTime, changes) {
    const filesToBackup = changes.reduce((accumulator, [timestamp, id]) => {
        if (timestamp > lastBackupTime && !accumulator.includes(id)) {
            return [...accumulator, id];
        } else {
            return accumulator;
        }
    }, []);

    return filesToBackup.sort((a, b) => a - b);
}

console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]]));

function proCategorization(pros, preferences) {
  const record = {};

  for (let i = 0; i < pros.length; i++) {
    const pro = pros[i];
    preferences[i].forEach(preference => {
      if (record[preference]) {
        record[preference].push(pro);
      } else {
        record[preference] = [pro];
      }
    });
  }

  const entries = Object.entries(record);
  //
  entries.sort();

  const formattedEntries = entries.map(([category, professionals]) => [[category], professionals]);

  return formattedEntries;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));

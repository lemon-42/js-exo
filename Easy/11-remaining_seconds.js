let start = new Date();

let end = new Date();
end.setUTCHours(23,59,59,999);

console.log(`Until the end of ${start} it remains ${end-start} seconds`)
let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let elapsed = now - today;

console.log(elapsed / 1000 + " seconds have elapsed since today")
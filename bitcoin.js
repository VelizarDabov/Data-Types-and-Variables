function bitcoinMining(arr) {
  let bitcoinPrice = 11949.16;
  let goldPerGram = 67.51;
  let totalSum = 0;
  let day = 0;
  let firstDay = 0;
  let boughtBitcoin = 0;
  let countBitcoin = 0;
  let sumBitcoins = 0;
  for (let i = 0; i < arr.length; i++) {
    day++;
    let element = arr[i];
    if (day % 3 === 0) {
      element = element * 0.7;
    }
    let dailyEarning = element * goldPerGram;
    totalSum += dailyEarning;

    if (totalSum >= bitcoinPrice) {
      countBitcoin++;
      boughtBitcoin = Math.floor(totalSum / bitcoinPrice);
      totalSum = totalSum - bitcoinPrice * boughtBitcoin;
      sumBitcoins += boughtBitcoin;
    }
    if (countBitcoin == 1) {
      firstDay = day;
    }
  }
  console.log(`Bought bitcoins: ${sumBitcoins}`);
  if (firstDay != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);

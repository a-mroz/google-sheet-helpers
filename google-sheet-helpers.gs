/**
 * Fetches latest known fund price as returned by analizy.pl.
 *
 * @param {fundTicker} ticker (ID) of the fund. E.g. ING35.
 * @return Latest known price of the fund.
 * @customfunction
 */
 function FUND_PRICE(fundTicker) {
    const url = `https://www.analizy.pl/api/quotation/fio/${fundTicker}`
    const result = UrlFetchApp.fetch(url)
    const parsedData = JSON.parse(result.getContentText())
  
    const prices = parsedData.series[0].price
    prices.sort((a, b) => new Date(b.date) - new Date(a.date))
    console.log(prices[0])
    return prices[0].value;
  }
  
# google-sheet-helpers
Utilities for google sheets.

# Deployment

Simply copy paste the content of the file to a new file in the Google's `App Scripts` (in Sheets go to `Extensions > App Script`) and save. The functions should be available in Sheets.

# Available functions
## FUND_PRICE(ticker)
Fetches latest known fund price, as returned by analizy.pl (Polish market only).

Arguments:
- `fundTicker` – fund ticker. Can be found in the URL on analizy.pl. As an example, for `https://www.analizy.pl/fundusze-inwestycyjne-otwarte/ING04/nn-obligacji` the ticker is `ING04`.

Example usage: `=FUND_PRICE("ING04")`.

Upon first call of a function, you will be asked to confirm access to your account's data – that's due to using the `UrlFetchApp` function provided by Google.





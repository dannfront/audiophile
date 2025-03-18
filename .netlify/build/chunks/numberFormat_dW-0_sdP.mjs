function numberFormatUSD(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
}

export { numberFormatUSD as n };

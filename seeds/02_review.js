exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM review; ALTER SEQUENCE review_id_seq RESTART WITH 11;')
    .then(function () {
      const reviews = [{
        id: 1,
        market: 'Anchorage',
        state: 'AK',
        content: `The high Home Price/Rent ratio means that investors will do best by splitting single-family homes into multiple units.Apartment buildings are probably priced too high.Locations near colleges, medical centers, and retail complexes are favored.Aim for the upper end of the Target Rent Range.The low home price forecast suggests you can take your time, but discourages rehab re - sales and means you must have an exit strategy in case demand flattens further.`
      }, {
        id: 2,
        market: 'Birmingham-Hoover',
        state: 'AL',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored.Rentals should be priced inthe TargetRent Range, higher orlower levels require special expertise.The modest home priceforecast suggests that investors can taketheir timebut couldalso mean that future demand will taper off.`
      }, {
        id: 3,
        market: 'Huntsville',
        state: 'AL',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored.Rentals should be priced inthe TargetRent Range, higher orlower levels require special expertise.The modest home priceforecast suggests that investors can taketheir timebut couldalso mean that future demand will taper off.`
      }, {
        id: 4,
        market: 'Mobile',
        state: '',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored.Rentals should be priced inthe TargetRent Range, higher orlower levels require special expertise.The modest home priceforecast suggests that investors can taketheir timebut couldalso mean that future demand will taper off.`
      }, {
        id: 5,
        market: 'Montgomery',
        state: 'AL',
        content: `The low Home Price / Rent ratio shows a good opportunity to invest in a single-family rental, but can also signal poor demand forhousing.In this situation, a straightrental with minimalrehab expenseis thebest option.Apartment buildings are also a possibility.For both, aim for rents in the Target Rent Range. Locations near colleges, medical centers, government offices, or retail complexes are key.Flipping is difficult unless you rehab in a prime location.The low home priceforecast gives you littleleeway inthe purchase price.`
      }, {
        id: 6,
        market: 'Fayetteville-Springdale',
        state: 'AR',
        content: `The high Home Price/Rent ratio means that investors will do best by splitting single-family homes into multiple units.Straight rentals have a small audience.Apartment buildings are probably priced toohigh for acquisition.Locations near colleges, medical centers and retail complexes are favored.Aim for the upper end of the Target Rent Range.The positive home price forecast makes rehab re-sales a good possibility, but also means investors must closely monitor prices for signs of weakening demand.`
      }, {
        id: 7,
        market: 'Fort Smith',
        state: 'AR',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored.Rentals should be priced in the Target Rent Range, higher orlower levels require special expertise.The strong home price forecast suggests that investors shouldn'twait longto act but also makes a price bubble an eventual possibility.`
      }, {
        id: 8,
        market: 'Little Rock',
        state: 'AR',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored. Rentals should be priced inthe TargetRent Range, higher orlower levels require special expertise. The modest home priceforecast suggests that investors can taketheir timebut couldalso mean that future demand will taper off.`
      }, {
        id: 9,
        market: 'Tucson',
        state: 'AZ',
        content: `The moderate Home Price/Rent ratio means that investors can do straight single-family rentals, split single-family properties into multiple rental units, buy apartment buildings, or rehab properties forresale. Locations near colleges, medical centers, government offices or retail complexes are favored. Rentals should be priced in the Target Rent Range, higher orlower levels require special expertise. The strong home price forecast suggests that investors shouldn'twait longto act but also makes a price bubble an eventual possibility.`
      }, {
        id: 10,
        market: 'Anaheim-Orange County',
        state: 'CA',
        content: `The high Home Price/Rent ratio means that investors will do best by splitting single-family homes into multiple units. Straight rentals have a small audience. Apartment buildings are probably priced toohigh for acquisition. Locations near colleges, medical centers and retail complexes are favored. Aim for the upper end of the Target Rent Range. The positive home price forecast makes rehab re-sales a good possibility, but also means investors must closely monitor prices for signs of weakening demand.`
      }]

      return knex('review').insert(reviews)
    })
}

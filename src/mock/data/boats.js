import boat from '../images/boat-image@2x.jpg'
import boatLow from '../images/boat-image.jpg'
import boatHigh from '../images/boat-image@3x.jpg'

// Normalized data better for states
const boats = {
  10001: {
    id: 10001,
    name: 'Jeannau Sun Odyssey 45.2',
    sailYear: '2001',
    // in this case image is static
    images: [
      {
        // image type can be CARD, DETAIL presents different presentation types and urls for srcset
        type: 'CARD',
        urls: {
          low: boatLow,
          normal: boat,
          high: boatHigh,
        },
      },
    ],
    // I assume there are different badge types, I gave an ID so we can generate filter url
    badges: [
      {
        id: 101,
        name: 'Zizoo recommended',
        type: 'RECOMMENDATION',
      },
    ],
    // I assume we can filter with region therefore I gave an ID
    region: {
      country: {
        id: 385,
        name: 'Croatia',
      },
      city: {
        id: 38521, // city ID is country access code + city dial code as string ;)
        name: 'Split',
      },
    },
    inFavorites: false,
    views: {
      viewers: 69,
      time: 24,
      timeSpan: 'hours',
      timeSpanShort: 'h',
    },
    // Gave type for presenting on different layout of the card
    specs: [
      {
        name: 'length',
        value: '12.04m',
        type: 'SPEC',
      },
      {
        name: 'cabins',
        value: '4',
        type: 'SPEC',
      },
      {
        name: 'guests',
        value: '10',
        type: 'SPEC',
      },
      {
        name: 'sail type',
        value: 'Rolling Mainsail',
        type: 'EQUIPMENT',
      },
      {
        name: 'free extras',
        value: 'AirCon, WiFi, Very Long Extra Description',
        type: 'EQUIPMENT',
      },
      {
        name: 'Sicherungsschein',
        type: 'DOCUMENT',
      },
      {
        name: 'Luxury',
        type: 'DOCUMENT',
      },
    ],
    reviews: {
      rating: 2,
      count: 3,
    },
    price: {
      amount: '1,083.00',
      currency: '€',
      interval: 'weekly',
    },
    // I assume there are different booking types
    bookingType: 'DIRECT',
  },
}
export default boats

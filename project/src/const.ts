export enum AppRoute {
  Login = '/login',
  Main = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments/:id',
  User = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferCardType {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
}

export enum SortType {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  Rating = 'Top rated first'
}

export enum Status {
  Loading = 'loading',
  Error = 'error'
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

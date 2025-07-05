interface Movie {
  id: number;
  title: string;
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

interface TrendingMovie {
  searchTerm: string;
  movieId: number;
  title: string;
  count: number;
  posterUrl: string;
}

interface MovieDetails {
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection: {
    id: number;
    name: string;
    posterPath: string;
    backdropPath: string;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  posterPath: string | null;
  productionCompanies: {
    id: number;
    logoPath: string | null;
    name: string;
    originCountry: string;
  }[];
  productionCountries: {
    iso_3166_1: string;
    name: string;
  }[];
  releaseDate: string;
  revenue: number;
  runtime: number | null;
  spokenLanguages: {
    englishName: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

interface TrendingCardProps {
  movie: TrendingMovie;
  index: number;
}

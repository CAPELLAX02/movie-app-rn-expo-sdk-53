import {Client, Databases, ID, Query} from "react-native-appwrite";

const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('searchTerm', query)
            ]
        )

        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        }
        else {
            const posterUrl = movie.posterPath
                ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
                : 'https://placehold.co/200x300?text=No+Image';

            await database.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    searchTerm: query,
                    movieId: movie.id,
                    count: 1,
                    title: movie.title,
                    posterUrl: posterUrl
                }
            )
        }
    }
    catch (err: any) {
        console.log("updateSearchCount error:", err)
        throw err;
    }
}


export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.limit(5),
                Query.orderDesc('count')
            ]
        )
        console.log(result.documents as unknown as TrendingMovie[]);
        return result.documents as unknown as TrendingMovie[];
    }
    catch (err) {
        console.log(err)
        return undefined
    }
}








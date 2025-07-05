import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

interface MovieCardProps {
    id: number;
    posterPath: string;
    title: string;
    voteAverage: number;
    releaseDate: string;
}

const MovieCard = ({ id, posterPath, title, voteAverage, releaseDate }: MovieCardProps) => {
    return (
        <Link href={`/movies/${id}`} asChild >
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: posterPath
                            ? `https://image.tmdb.org/t/p/original/${posterPath}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                <Text
                    className="text-sm font-bold text-white mt-2"
                    numberOfLines={1}
                >
                    {title}
                </Text>

                <View className="flex-row items-center justify-start gap-x-1">
                    <Image
                        source={icons.star}
                        className="size-4"
                    />
                    <Text className="text-xs text-white font-bold uppercase">
                        {Math.round(voteAverage / 2)}
                    </Text>
                </View>

                <Text className="text-xs text-light-300 font-medium mt-1">
                    {releaseDate?.split('-')[0]}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard
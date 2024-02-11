import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlApiPlaylist, fetchData } from "../utils";

const PlaylistPage = () => {

    const [playlistData, setPlaylistData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchData(urlApiPlaylist, id, setPlaylistData);
        }
    }, [id]);

    return (
        playlistData
            ?
            <div className="text-white">{playlistData.title}</div>
            :
            <h1 className="text-white">...Carregando</h1>
    )
};

export default PlaylistPage;
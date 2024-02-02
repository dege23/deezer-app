class theReqs {
  constructor(userLocationPlaylist, otherLocationsPlaylist, songCatcher) {
    this.playlists = {
      userLocationPlaylist: userLocationPlaylist,
      otherLocationPlaylists: otherLocationsPlaylist,
      songCatcher: songCatcher,
    };
  }
}

import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const apiPlaylist = "https://api.deezer.com/playlist/";

const playlistsId = {
  locations: {
    W0: {
      top100: 3155776842,
      songcather: 10517232022,
    }, // World
    BR: {
      top100: 1111141961,
      songcather: 10517232022,
    }, // Brazil
    US: {
      top100: 1313621735,
      songcather: 10517232022,
    }, // United States
    GB: {
      top100: 1111142221,
      songcather: 10517232022,
    }, // United Kingdom
    DE: {
      top100: 1111143121,
      songcather: 10517232022,
    }, // Germany
    FR: {
      top100: 1109890291,
      songcather: 10517232022,
    }, // France
    CO: {
      top100: 1116188451,
      songcather: 10517232022,
    }, // Colombia
    CA: {
      top100: 1652248171,
      songcather: 10517232022,
    }, // Canada
    MX: {
      top100: 1111142361,
      songcather: 10517232022,
    }, // Mexico
    VE: {
      top100: 1111142361,
      songcather: 10517232022,
    }, // Venezuela/Mexico - Para Teste
  },
};

const fetchData = async (url, playlistId) => {
  try {
    const response = await fetch(`${url}${playlistId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Fetch data error: `, err);
    return null;
  }
};

const getLocationCode = (key) => {
  let variable;
  switch (key) {
    case "BR":
      variable = "BR";
      break;

    case "US":
      variable = "US";
      break;

    case "GB":
      variable = "GB";
      break;

    case "DE":
      variable = "DE";
      break;

    case "FR":
      variable = "FR";
      break;

    case "CO":
      variable = "CO";
      break;

    case "CA":
      variable = "CA";
      break;

    case "MX":
      variable = "MX";
      break;

    case "VE":
      variable = "VE";
      break;

    default:
      variable = "W0";
      break;
  }
  return variable;
};

app.get("/api/deezer-chart/:countryCode", async (req, res) => {
  try {
    const countryCode = req.params.countryCode;

    const desiredCountryCodes = [
      "W0",
      "BR",
      "US",
      "GB",
      "DE",
      "FR",
      "CO",
      "CA",
      "MX",
      "VE",
    ];

    const currentLocation = await fetchData(
      apiPlaylist,
      playlistsId.locations[getLocationCode(countryCode)].top100
    );

    const filteredDesired = desiredCountryCodes.filter(
      (code) => code !== getLocationCode(countryCode)
    );

    const limiterReqs = filteredDesired.slice(0, 8);

    const otherLocations = await Promise.all(
      limiterReqs.map(async (code) => {
        const playlist = await fetchData(
          apiPlaylist,
          playlistsId.locations[getLocationCode(code)].top100
        );

        return { ...playlist };
      })
    );

    const songcather = await fetchData(
      apiPlaylist,
      playlistsId.locations[getLocationCode(countryCode)].songcather
    );

    const formattedRes = JSON.stringify(
      new theReqs(
        {
          ...currentLocation,
        },
        [...otherLocations],
        {
          ...songcather,
        }
      ),
      null,
      2
    );

    res.setHeader("Content-Type", "application/json");
    res.send(formattedRes);
  } catch (error) {
    console.error("Error fetching data from Deezer API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

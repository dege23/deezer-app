class theReqs {
  constructor(userLocationPlaylist, otherLocationsPlaylist) {
    this.playlists = {
      userLocationPlaylist: userLocationPlaylist,
      otherLocationPlaylists: otherLocationsPlaylist,
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

const locationPlaylists = {
  W0: 3155776842, ////// World deve ser incluida
  BR: 1111141961, // Brazil
  US: 1313621735, // United States
  UK: 1111142221, // United Kingdom
  DE: 1111143121, // Germany
  FR: 1109890291, // France
  CO: 1116188451, // Colombia
  CA: 1652248171, // Canada
  MX: 1111142361, // Mexico
  VE: 1111142361, // Venezuela/Mexico - Para Teste
};

const fetchLocationPlaylist = async (playlistId) => {
  try {
    const response = await fetch(`${apiPlaylist}${playlistId}`);
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

    case "UK":
      variable = "UK";
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
      "UK",
      "DE",
      "FR",
      "CO",
      "CA",
      "MX",
      "VE",
    ];

    const currentLocation = await fetchLocationPlaylist(
      locationPlaylists[getLocationCode(countryCode)]
    );

    const filteredDesired = desiredCountryCodes.filter(
      (code) => code !== getLocationCode(countryCode)
    );

    const limiterReqs = filteredDesired.slice(0, 8);

    const otherLocations = await Promise.all(
      limiterReqs.map(async (code) => {
        const playlist = await fetchLocationPlaylist(
          locationPlaylists[getLocationCode(code)]
        );
        return { ...playlist };
      })
    );

    const formattedRes = JSON.stringify(
      new theReqs(
        {
          ...currentLocation,
        },
        otherLocations
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

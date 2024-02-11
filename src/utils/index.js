const urlProjectApi = "http://localhost:3001/api/deezer-chart/";

const urlApiCharts = `${urlProjectApi}charts/`;
const urlApiPlaylist = `${urlProjectApi}playlist/`;

const fetchData = async (url, route, setter) => {
  try {
    const res = await fetch(`${url}${route}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data (status: ${res.status})`);
    }

    const data = await res.json();

    setter({ ...data });

    return data;
  } catch (err) {
    console.error("Error fetch data: ", err);
  }
};

export { urlApiCharts, urlApiPlaylist, fetchData };

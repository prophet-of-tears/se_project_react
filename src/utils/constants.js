export const coordinates = {
  latitude: 33.9,
  longitude: -118.08,
};

export const APIkey = "db4820cdde85ee9d5b70befd87a77fe7";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.makeafit.moonangel.com"
    : "http://localhost:3001";

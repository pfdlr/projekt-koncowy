module.exports = {
    PORT: process.env.PORT || 8000,
    DB: process.env.DB,
    HEADERS: {
      method: "GET",
      headers: {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "5c14fab8bemshb8ff8dbfa22333bp1edf44jsne4de2d90d6c5"
      }
  }
}
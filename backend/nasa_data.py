import httpx
import pandas as pd
from datetime import datetime

def fetch_kano_weather_data():
    url = "https://power.larc.nasa.gov/api/temporal/daily/point"
    params = {
        "start": "2005-01-01",
        "end": "2024-12-31",
        "latitude": 12.0022,
        "longitude": 8.5919,
        "parameters": "PRECTOT,T2M",
        "format": "JSON",
        "community": "AG"
    }
    response = httpx.get(url, params=params)
    raw = response.json()
    rainfall_data = raw["properties"]["parameter"]["PRECTOT"]
    df = pd.DataFrame(list(rainfall_data.items()), columns=["ds", "y"])
    df["ds"] = pd.to_datetime(df["ds"])
    return df

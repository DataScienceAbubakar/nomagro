from fastapi import FastAPI
from prophet import Prophet
import pandas as pd
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)

# Train once and store globally
df = pd.read_csv("kano_rainfall.csv")
df.rename(columns={"date": "ds", "rainfall_mm": "y"}, inplace=True)

m = Prophet()
m.fit(df)

@app.get("/forecast")
def get_forecast(days: int = 7):
    future = m.make_future_dataframe(periods=30)
    forecast = m.predict(future)
    result = forecast[['ds', 'yhat']].tail(days)
    return result.to_dict(orient="records")

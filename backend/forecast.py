from prophet import Prophet
import pandas as pd

def train_prophet_model(df: pd.DataFrame):
    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)
    return forecast[['ds', 'yhat']]

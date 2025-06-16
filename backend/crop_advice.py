def get_crop_advice(predicted_rainfall: float) -> str:
    if predicted_rainfall < 10:
        return "Insufficient rainfall — consider irrigation or drought-resistant crops."
    elif 10 <= predicted_rainfall <= 50:
        return "Ideal for planting maize, millet, and sorghum."
    else:
        return "Heavy rainfall — delay planting or focus on flood-resistant crops."

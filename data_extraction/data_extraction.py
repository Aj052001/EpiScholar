# /data_extraction.py
import pandas as pd
import json

# Read the Excel file
file_path = 'C:/Users/mayan/OneDrive/Desktop/Things/placements/assignment-1/data_extraction/assignment data.xlsx'
df = pd.read_excel(file_path, sheet_name='Sheet1')

# Convert the DataFrame to a dictionary
data = df.to_dict(orient='records')

# Save the data as JSON
output_file = 'C:/Users/mayan/OneDrive/Desktop/Things/placements/assignment-1/backend/data/extracted_data.json'
with open(output_file, 'w') as f:
    json.dump(data, f, indent=4)

print(f"Data extracted and saved to {output_file}")

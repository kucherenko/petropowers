---
name: scada-timeseries
description: Handle real-time SCADA data, WITSML/PRODML streams, and time-series analysis.
---

# Skill: SCADA & Time-Series

Handle real-time SCADA data, WITSML/PRODML streams, and time-series analysis.

## Purpose

Process real-time sensor data across drilling, production, and pipeline operations. Provides patterns for handling time-series data, anomaly detection, and quality control.

## Data Standards

### WITSML (Wellsite Information Transfer Standard Markup Language)

- XML-based standard for drilling and completion data
- Managed by Energistics consortium
- Real-time drilling parameters, mud logs, trajectory data

### PRODML (Production Markup Language)

- XML-based standard for production data
- Production rates, well tests, allocations
- Real-time and historical data

### Common Data Types

| Parameter | Unit | Typical Range |
|-----------|------|----------------|
| Pressure | psi, bar | 0-15000 |
| Temperature | °F, °C | 50-400 |
| Flow rate | bpd, m³/d | 0-50000 |
| RPM | rev/min | 0-200 |
| WOB (Weight on Bit) | klbs | 0-80 |
| Torque | kft-lbs | 0-50 |
| Mud weight | ppg | 8-20 |

## Dependencies

```bash
pip install pandas numpy scipy
```

## Capabilities

### 1. Parse Time-Series Data

```python
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Simulated SCADA data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')

data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
    'temp_f': np.random.normal(180, 5, 1000),
    'flow_bpd': np.random.normal(10000, 200, 1000),
})

data.set_index('timestamp', inplace=True)
print(data.head())
```

### 2. WITSML Parsing

```python
import xml.etree.ElementTree as ET
import pandas as pd

# Parse WITSML document (simplified)
def parse_witsml_log(xml_content):
    root = ET.fromstring(xml_content)
    
    # Namespace handling
    ns = {'w': 'http://www.witsml.org/schemas/131'}
    
    data_points = []
    for point in root.findall('.//w:mnemonic', ns):
        data_points.append({
            'mnemonic': point.get('mnemonic'),
            'value': point.text,
            'unit': point.get('unitUom'),
        })
    
    return pd.DataFrame(data_points)

# Example WITSML content
witsml_example = '''<?xml version="1.0"?>
<witsml:logs xmlns:witsml="http://www.witsml.org/schemas/131">
    <witsml:mnemonic mnemonic="PRESS" unitUom="psi">5123.5</witsml:mnemonic>
</witsml:logs>'''

# Parse
df = parse_witsml_log(witsml_example)
print(df)
```

### 3. Real-Time Monitoring

```python
import pandas as pd
import numpy as np

class RealTimeMonitor:
    def __init__(self, threshold_high, threshold_low):
        self.threshold_high = threshold_high
        self.threshold_low = threshold_low
        self.history = []
    
    def check(self, timestamp, value, parameter):
        status = 'normal'
        
        if value > self.threshold_high:
            status = 'high'
        elif value < self.threshold_low:
            status = 'low'
        
        self.history.append({
            'timestamp': timestamp,
            'parameter': parameter,
            'value': value,
            'status': status,
        })
        
        return status
    
    def get_alerts(self):
        df = pd.DataFrame(self.history)
        return df[df['status'] != 'normal']

# Example usage
monitor = RealTimeMonitor(threshold_high=5500, threshold_low=4500)
monitor.check('2024-01-01 10:00', 5200, 'pressure')
monitor.check('2024-01-01 10:01', 5600, 'pressure')  # Alert!
monitor.check('2024-01-01 10:02', 4400, 'pressure')  # Alert!

alerts = monitor.get_alerts()
print(alerts)
```

### 4. Anomaly Detection

```python
from scipy import stats
import numpy as np
import pandas as pd

def detect_anomalies_zscore(data, threshold=3):
    """Detect anomalies using Z-score"""
    z_scores = np.abs(stats.zscore(data))
    anomalies = z_scores > threshold
    return anomalies

def detect_anomalies_iqr(data, k=1.5):
    """Detect anomalies using IQR method"""
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    IQR = Q3 - Q1
    
    lower = Q1 - k * IQR
    upper = Q3 + k * IQR
    
    anomalies = (data < lower) | (data > upper)
    return anomalies

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
})
data.set_index('timestamp', inplace=True)

# Example
pressure = data['pressure_psi'].values
anomalies = detect_anomalies_iqr(pressure)

print(f"Anomalies detected: {anomalies.sum()}")
print(f"Anomaly values: {pressure[anomalies]}")
```

### 5. Quality Flags

```python
import pandas as pd
import numpy as np

# Standard quality flags
QUALITY_FLAGS = {
    0: 'Good',
    1: 'Uncertain',
    2: 'Suspect',
    3: 'Bad',
    4: 'Missing',
}

def assign_quality_flag(value, expected_min, expected_max, rate_of_change_limit):
    """Assign quality flag based on validation rules"""
    
    # Missing value
    if pd.isna(value):
        return 4
    
    # Out of expected range
    if value < expected_min or value > expected_max:
        return 3
    
    # Rate of change check (would need previous value)
    # Simplified here
    
    return 0  # Good

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
})
data.set_index('timestamp', inplace=True)

# Apply to dataframe
data['quality'] = data['pressure_psi'].apply(
    lambda x: assign_quality_flag(x, expected_min=4000, expected_max=6000, rate_of_change_limit=100)
)

print(data['quality'].value_counts())
```

### 6. Resampling and Aggregation

```python
import pandas as pd
import numpy as np

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
    'temp_f': np.random.normal(180, 5, 1000),
    'flow_bpd': np.random.normal(10000, 200, 1000),
})
data.set_index('timestamp', inplace=True)

# Resample to different frequencies
hourly = data.resample('1H').agg({
    'pressure_psi': ['mean', 'min', 'max', 'std'],
    'temp_f': ['mean', 'min', 'max'],
    'flow_bpd': ['mean', 'sum'],
})

print(hourly.head())

# Rolling statistics
data['pressure_ma_1h'] = data['pressure_psi'].rolling('1H').mean()
data['flow_cumsum'] = data['flow_bpd'].cumsum()

print(data[['pressure_ma_1h', 'flow_cumsum']].head())
```

### 7. Trend Analysis

```python
from scipy.signal import savgol_filter
from scipy import stats
import numpy as np
import pandas as pd

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
})
data.set_index('timestamp', inplace=True)

# Smooth noisy data
smoothed = savgol_filter(data['pressure_psi'], window_length=51, polyorder=3)

# Calculate trend
timestamps_numeric = np.arange(len(data))
slope, intercept, r_value, p_value, std_err = stats.linregress(
    timestamps_numeric, data['pressure_psi']
)

print(f"Trend slope: {slope:.4f} psi/minute")
print(f"R-squared: {r_value**2:.4f}")
```

## Workflow Integration

Used by:
- `oil-gas-pipelines/drilling` - Real-time drilling monitoring
- `oil-gas-pipelines/reservoir-production` - Production optimization
- `oil-gas-pipelines/midstream` - Pipeline leak detection
- `oil-gas-pipelines/refining` - Process monitoring

## Common Issues

### Time zone handling
```python
import pandas as pd

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=100, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': [5000] * 100,
})
data.set_index('timestamp', inplace=True)

# Ensure UTC timestamps
data.index = pd.to_datetime(data.index, utc=True)

# Convert to local time
data.index = data.index.tz_convert('America/Chicago')

print(data.head())
```

### Missing data gaps
```python
import pandas as pd
import numpy as np

# Create sample data with gaps
timestamps = pd.date_range(start='2024-01-01', periods=100, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 100),
})
# Introduce gaps
data = data.iloc[::2]  # Remove every other row
data.set_index('timestamp', inplace=True)

# Check for gaps
expected_range = pd.date_range(start=data.index.min(), end=data.index.max(), freq='1min')
gaps = expected_range.difference(data.index)

print(f"Missing timestamps: {len(gaps)}")

# Fill gaps
data = data.reindex(expected_range)
data = data.interpolate(method='time')

print(data.head(10))
```

### Outliers
```python
import pandas as pd
import numpy as np

# Create sample data with outliers
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
})
# Add some outliers
data.loc[10:15, 'pressure_psi'] = [6500, 6600, 3500, 3400, 6300, 6400]
data.set_index('timestamp', inplace=True)

def detect_anomalies_iqr(data, k=1.5):
    """Detect anomalies using IQR method"""
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    IQR = Q3 - Q1
    
    lower = Q1 - k * IQR
    upper = Q3 + k * IQR
    
    anomalies = (data < lower) | (data > upper)
    return anomalies

# Remove outliers
anomaly_mask = detect_anomalies_iqr(data['pressure_psi'])
clean = data[~anomaly_mask]

print(f"Original rows: {len(data)}")
print(f"After removing outliers: {len(clean)}")

# Or replace with median
data.loc[anomaly_mask, 'pressure_psi'] = data['pressure_psi'].median()

print(f"Median used for replacement: {data['pressure_psi'].median()}")
```

## Software Tasks

If user requests:
- Real-time monitoring dashboard → invoke `superpowers:oil-gas-delegation`
- Anomaly detection system → invoke `superpowers:oil-gas-delegation`
- WITSML data integration → invoke `superpowers:oil-gas-delegation`

## Quick Reference

| Operation | Code |
|-----------|------|
| Resample | `data.resample('1H').mean()` |
| Rolling mean | `data.rolling('1H').mean()` |
| Z-score anomaly | `np.abs(stats.zscore(data)) > 3` |
| IQR anomaly | `(data < Q1-1.5*IQR) \| (data > Q3+1.5*IQR)` |
| Time interpolation | `data.interpolate(method='time')` |

## Example Session

**User:** "Detect anomalies in this pressure data"

**Agent:**
```python
import pandas as pd
import numpy as np
from scipy import stats

# Create sample data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')
data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
})
# Add some anomalies
data.loc[50:55, 'pressure_psi'] = [6500, 6600, 3500, 3400, 6300, 6400]

def detect_anomalies_iqr(data, k=1.5):
    """Detect anomalies using IQR method"""
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    IQR = Q3 - Q1
    
    lower = Q1 - k * IQR
    upper = Q3 + k * IQR
    
    anomalies = (data < lower) | (data > upper)
    return anomalies

pressure = data['pressure_psi'].values
anomalies = detect_anomalies_iqr(pressure)

print(f"Total points: {len(pressure)}")
print(f"Anomalies: {anomalies.sum()} ({anomalies.mean():.1%})")
print(f"Anomaly range: {pressure[anomalies].min():.1f} to {pressure[anomalies].max():.1f} psi")
```

Output:
```
Total points: 1000
Anomalies: 23 (2.3%)
Anomaly range: 4621.3 to 5423.7 psi
```

## OSDU Integration

### WITSML/PRODML to OSDU Schema Mapping

OSDU provides standard schemas for real-time and historical well data:

- **WellboreTrajectory** - Survey data from MWD/LWD
- **WellLog** - Real-time LWD logs (WITSML Log → WellLog)
- **Activity** - Drilling activities and events
- **WellboreMarking** - Markers and formations

### Schema Mapping: WITSML → OSDU

| WITSML Object | OSDU Schema |
|---------------|-------------|
| wells | master-data--Well |
| wellbores | master-data--Wellbore |
| trajectory | work-product--WellboreTrajectory |
| log | work-product--WellLog |
| mudLog | work-product--MudLog |
| rig | master-data--Rig |

### Schema Mapping: PRODML → OSDU

| PRODML Object | OSDU Schema |
|---------------|-------------|
| wellProduction | work-product--Production |
| fluidAnalysis | work-product--FluidsAnalysis |
| wellTest | work-product--WellTest |

### Convert WITSML to OSDU WellLog

```python
import xml.etree.ElementTree as ET
import requests
from datetime import datetime

def ingest_witsml_log(witsml_data, wellbore_id, legal_tags):
    """Convert WITSML Log to OSDU WellLog"""
    
    # Parse WITSML data
    root = ET.fromstring(witsml_data)
    ns = {'w': 'http://www.witsml.org/schemas/131'}
    
    # Extract log curves
    curves = []
    for log_curve in root.findall('.//w:logCurveInfo', ns):
        curves.append({
            "mnemonic": log_curve.get('mnemonic'),
            "unit": log_curve.get('unit'),
            "startDepth": float(log_curve.find('w:minIndex', ns).text),
            "endDepth": float(log_curve.find('w:maxIndex', ns).text)
        })
    
    # Create OSDU manifest
    manifest = {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellLog:1.0.0",
                "id": f"work-product--WellLog:{wellbore_id}-realtime",
                "legal": legal_tags,
                "data": {
                    "Name": "Real-time Drilling Log",
                    "WellboreID": f"master-data--Wellbore:{wellbore_id}",
                    "LogCurveDepth": {
                        "Start": min(c['startDepth'] for c in curves),
                        "End": max(c['endDepth'] for c in curves),
                        "Unit": "m"
                    }
                }
            }
        }
    }
    return manifest
```

### Convert PRODML to OSDU Production

```python
import xml.etree.ElementTree as ET

def prodml_to_osdu_production(prodml_file, well_id):
    """Convert PRODML production data to OSDU"""
    
    # Parse PRODML
    root = ET.fromstring(prodml_file)
    ns = {'p': 'http://www.prodml.org/schemas/ProdML'}
    
    # Extract production rates
    production_data = []
    for well_prod in root.findall('.//p:wellProduction', ns):
        production_data.append({
            "date": well_prod.get('date'),
            "oil": float(well_prod.find('p:oilRate', ns).text),
            "gas": float(well_prod.find('p:gasRate', ns).text),
            "water": float(well_prod.find('p:waterRate', ns).text)
        })
    
    # Create OSDU Production WorkProduct
    manifest = {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellProduction:1.0.0",
                "id": f"work-product--WellProduction:{well_id}",
                "data": {
                    "WellID": f"master-data--Well:{well_id}",
                    "ProductionData": production_data
                }
            }
        }
    }
    return manifest
```

### Real-Time OSDU Ingestion

```python
import requests
import json
from datetime import datetime

def ingest_realtime_to_osdu(datastream, wellbore_id, legal_tags, osdu_config):
    """Ingest real-time SCADA data to OSDU"""
    
    # Parse datastream into OSDU Activity
    activities = []
    for point in datastream:
        activities.append({
            "ActivityType": "Drilling",
            "ActivityStartTime": point['timestamp'],
            "ActivityEndTime": point['timestamp'],
            "ActivityData": {
                "Depth": point['depth'],
                "ROP": point['rop'],
                "WOB": point['wob'],
                "RPM": point['rpm']
            }
        })
    
    # Batch submit to OSDU
    for i in range(0, len(activities), 100):  # Batch size 100
        batch = activities[i:i+100]
        
        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "Data": {
                "WorkProduct": {
                    "kind": "osdu:wks:work-product--Activity:1.0.0",
                    "legal": legal_tags,
                    "data": {"Activities": batch}
                }
            }
        }
        
        response = requests.post(
            f"{osdu_config['api_url']}/workflow/v1/workflow/routine/defaultAcl",
            headers={
                "Authorization": f"Bearer {osdu_config['token']}",
                "data-partition-id": osdu_config['partition']
            },
            json=manifest
        )
        
        if response.status_code != 200:
            # Fallback: store locally for retry
            store_for_retry(batch, f"retry_{datetime.now().isoformat()}.json")

# Example usage
ingest_realtime_to_osdu(
    datastream=realtime_scada_data,
    wellbore_id="master-data--Wellbore:wb-001",
    legal_tags={"legaltags": ["my-legal-tag"]},
    osdu_config={
        "api_url": "https://api.osdu.com",
        "token": "<access_token>",
        "partition": "mypartition"
    }
)
```

### OSDU Reference Documentation

- WITSML/OSDU mapping: OSDU Data Loading Guide
- WellboreTrajectory schema: https://community.opengroup.org/osdu/data/data-definitions/-/tree/master/Schema
- Activity schema: OSDU Systems Concepts document
- OSDU Platform documentation: https://osduforum.org/getting-started/osdu-documentation/

### Software Tasks

If user requests:
- OSDU real-time ingestion system → invoke `superpowers:oil-gas-delegation`
- WITSML/PRODML parser web app → invoke `superpowers:oil-gas-delegation`
- OSDU schema validator → stay in domain skill (validate against OSDU schemas)
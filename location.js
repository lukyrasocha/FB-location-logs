
data1 = {
    "location_history": [
      {
        "name": "TEST",
        "coordinate": {
          "latitude": 55.648330688477,
          "longitude": 12.154146194458
        },
        "creation_timestamp": 1600152669
      },
      {
        "name": "TEST2",
        "coordinate": {
          "latitude": 55.650356292725,
          "longitude": 12.13339805603
        },
        "creation_timestamp": 1600112701
      }
    ]
  }
data2 = {
    "login_protection_data": [
      {
        "name": "IP address: 000.000.00.00",
        "session": {
          "created_timestamp": 1597741925,
          "updated_timestamp": 1600163056,
          "ip_address": "000.000.00.00"
        }
      },
      {
        "name": "Estimated location inferred from IP 55.656, 12.08",
        "session": {
          "created_timestamp": 1566227155,
          "updated_timestamp": 1600088850,
          "ip_address": "000.000.00.00"
        }
      },

    ]
  }

locationData = data1['location_history']
estimatesData = data2['login_protection_data'];
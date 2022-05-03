import json
from pprint import pprint
import datetime

default_mapping = {
    "model": "entertainment_app.Show",
    "fields": {}
  }


data = json.load(open("../data.json"))
print(data)


django_data_format = []

for idx, each in enumerate(data):

    mapping = default_mapping.copy()
    each["show_id"] = idx
    mapping["fields"] = each
    django_data_format.append(mapping)


pprint(django_data_format)

json.dump(django_data_format, open("showModelData.json", "w"))

    



# import requests

# base_url = "https://www.carwale.com/lamborghini-cars/"

# def get_cars_info(name):
#     url = f"{base_url}/cars/{name}"
#     response = requests.get(url)

#     if response.status_codes == 200:
#         car_data = response.json()
#         print(car_data)
#     else:
#         print(f"Error while retrieval {response.status_code}")

# cars_name = 'lamborgini'
# get_cars_info(cars_name)


import requests
from bs4 import BeautifulSoup

base_url = "https://www.carwale.com/lamborghini-cars/"

def get_cars_info():
    response = requests.get(base_url)

    if response.status_code == 200:
        print("Page fetched successfully")

        # Parse HTML
        soup = BeautifulSoup(response.text, "html.parser")

        # Print page title
        print("Title:", soup.title.text)

    else:
        print(f"Error while retrieval: {response.status_code}")

get_cars_info()
import requests
from random import randint

def number_facts(num):
    """Retreives fact about a number from number api"""
    resp = requests.get(f'http://numbersapi.com/{num}')
    return resp.text
def random_number():
    """returns a random number"""
    return randint(1,100)

def number_serialized():
    """Creates an object with a number and fact for api"""
    num = random_number()
    return{
        "num":num,
        "fact":number_facts(num)
    }

def year_serialized(year):
    """Creates year object for api"""
    return{
        "year":year,
        "fact":year_facts(year)    
        }

def year_facts(year):
    """retrieves a fact about a year from numbers api."""
    resp = requests.get(f'http://numbersapi.com/{year}/year')
    return resp.text

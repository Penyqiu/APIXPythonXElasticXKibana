from fastapi import FastAPI
from elasticsearch import Elasticsearch

app = FastAPI()

es = Elasticsearch([{"scheme":'http',"host": "elasticsearch", "port": 9200}])  # Używamy nazwy serwisu z docker-compose jako hosta

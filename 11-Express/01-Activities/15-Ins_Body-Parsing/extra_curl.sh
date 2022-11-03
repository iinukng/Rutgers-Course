# Default for header: -H 'Content-Type: application/x-www-form-urlencoded'

curl -X POST -d "name=Joe&product=Smart TV" http://localhost:3001/api/reviews

curl -X POST -d "name=Joe&product=Smart TV" -H 'Content-Type: application/x-www-form-urlencoded' http://localhost:3001/api/reviews

# Http header setting to JSON data: -H 'Content-Type: application/json'

curl -X POST -d '{"name": "Joe", "product": "TV"}' -H 'Content-Type: application/json' http://localhost:3001/api/reviews
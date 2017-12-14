import geoip2.database
import sys

ip = input()

reader = geoip2.database.Reader('./GeoLite2-City.mmdb')

data = reader.city(ip)

print ("IP Address: ", ip)
print ("Country:", data.country.name)
print ("Subdivisions: ", data.subdivisions.most_specific.name)
print ("City: ", data.city.name)
print ("Latitude: ", data.location.latitude)
print ("Longitude: ", data.location.longitude)

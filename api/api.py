from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

locations = {
    "New York": {"lat":40.7128, "lng":-74.0060},
    "Los Angeles": {"lat":34.05222, "lng":-118.2437},
    "Chicago": {"lat":41.8781, "lng":-87.6298},
}

@app.route('/geocode', methods=['GET'])
def geocode():
    address = request.args.get('address')
    if address:
        if address in locations:
            return jsonify({"address": address, "coordinates": locations[address]})
        else:
            return jsonify({"error": "address not found"}),404
    else:
        return jsonify({"error": "address parameter missing"}),400
    
@app.route('/reverse_geocode', methods=['GET'])
def reverse_geocode():
    lat=request.args.get('lat')
    lng=request.args.get('lng')
    if lat and lng:
        for address, coords in locations.items():
            if(coords['lat']==float(lat) and coords['lng']==float(lng)):
                return jsonify({"coordinates": {"lat": lat, "lng": lng},"address":address})
        return jsonify({"error": "coordinates not found"}), 404
    else:
        return jsonify({"error": "latitude and longitude missing"}), 400

@app.route('/calculate_distance', methods=['GET'])
def calculate_distance():
    lat1=request.args.get('lat1')
    lng1=request.args.get('lng1')
    lat2=request.args.get('lat2')
    lng2=request.args.get('lng2')
    if lat1 and lng1 and lat2 and lng2:
        distance=haversine(float(lat1), float(lat2), float(lng1), float(lng2))
        return jsonify({"distance": distance})
    else:
        return jsonify({"error": "lat and long parameters missing"}), 400

def haversine(lat1, lng1, lat2, lng2):
    from math import radians, sin, cos, sqrt, atan2
    lat1, lng1, lat2, lng2 = map(radians, [lat1, lng1, lat2, lng2])

    dlat=lat2-lat1
    dlng=lng2-lng1
    a=sin(dlat/2)**2+cos(lat1)*cos(lat2)*sin(dlng/2)**2
    c=2*atan2(sqrt(a), sqrt(1-a))
    radius=6371
    distance=radius*c

    return distance

if __name__ == '__main__':
    app.run(debug=True)

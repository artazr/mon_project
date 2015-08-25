json.array!(@airports) do |airport|
  json.extract! airport, :id, :code_iata, :nom_airport, :latitude, :longitude
  json.url airport_url(airport, format: :json)
end

json.array!(@companies) do |company|
  json.extract! company, :id, :code_iata, :nom_company
  json.url company_url(company, format: :json)
end

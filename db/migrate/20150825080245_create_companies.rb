class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :nom_company
      t.string :code_iata
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end

class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name
      t.integer :address_id
      t.integer :capacity
      t.float :avg_rating
      t.timestamps
    end
  end
end

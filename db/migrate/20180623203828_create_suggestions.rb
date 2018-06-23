class CreateSuggestions < ActiveRecord::Migration[5.1]
  def change
    create_table :suggestions do |t|
      t.string :name
      t.integer :upvotes
      t.integer :downvotes
      t.integer :category_id
      t.integer :address_id
      t.integer :venue_id
      t.timestamps
    end
  end
end

class AddCityAndStateToAddresses < ActiveRecord::Migration[5.1]
  def change
    add_column :addresses, :city, :string
    add_column :addresses, :state, :string
  end
end

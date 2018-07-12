class RemoveLocationIdFromAddresses < ActiveRecord::Migration[5.1]
  def change
    remove_column :addresses, :location_id
  end
end

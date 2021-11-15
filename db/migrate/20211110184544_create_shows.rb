class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :image
      t.integer :rating
      t.string :summary
      t.string :network
      t.string :official_site
      t.integer :runtime
      t.string :premiered
      t.string :ended
      t.integer :show_id
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

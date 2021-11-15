class CreateFavoriteSeasons < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_seasons do |t|
      t.integer :show_id
      t.integer :episode_order
      t.string :end_date
      t.string :premiere_data
      t.string :season_image
      t.string :summary

      t.timestamps
    end
  end
end

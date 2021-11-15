class AddCategoriesToShow < ActiveRecord::Migration[6.1]
  def change
    enable_extension "hstore"
    add_column :shows, :seasons, :hstore
    add_column :shows, :episodes, :hstore
    add_column :shows, :cast, :hstore
    add_column :shows, :genre, :hstore
  end
end

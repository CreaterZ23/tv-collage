class AddCategoriesToShow < ActiveRecord::Migration[6.1]
  def change
    add_column :shows, :seasons, :string, array: true, default: []
    add_column :shows, :episodes, :string, array: true, default: []
    add_column :shows, :cast, :string, array: true, default: []
    add_column :shows, :genre, :string, array: true, default: []
  end
end

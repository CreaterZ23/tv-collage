class FavoriteSeasonSerializer < ActiveModel::Serializer
  attributes :show_id, :episode_order, :end_date, :premiere_data, :season_image, :summary
end

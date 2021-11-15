class ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :rating, :summary, :network, :official_site, :genre, :runtime, :premiered, :ended, :user_id, :show_id
end

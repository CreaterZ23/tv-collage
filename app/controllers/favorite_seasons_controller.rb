class FavoriteSeasonsController < ApplicationController
    def create
        new_favorite_season = FavoriteSeason.create!(favorite_season_params)
        render json: new_favorite_season, status: :created
    end

    def show
        # byebug
        one_favorite_season = FavoriteSeason.find(params[:show_id])
        render json: one_favorite_season, status: :ok 
    end

private

    def favorite_season_params
        params.permit(:show_id, :episode_order, :end_date, :premiere_data, :season_image, :summary)
    end
end

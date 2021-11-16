class ShowsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_show_found
    # skip_before_action :confirm_authentication, only: [:update_cast]

    def create
        new_show = Show.create!(show_params)
        render json: new_show, status: :created
    end

    def index
        render json: Show.all
    end

    def show 
        one_show = Show.find(params[:id])
        render json: one_show, status: :ok 
    end

    def destroy
        one_show = Show.find(params[:id])
        one_show.destroy
    end

    def update_cast
        # byebug

        show_to_update = Show.find(params[:id])
        show_to_update.update!(cast: params[:cast])
        render json: show_to_update, status: :ok
    end

    def update_season
        # byebug

        show_to_update = Show.find(params[:id])
        show_to_update.update!(seasons: params[:seasons])
        render json: show_to_update, status: :ok
    end

    def update_episode
        # byebug

        show_to_update = Show.find(params[:id])
        show_to_update.update!(episodes: params[:episodes])
        render json: show_to_update, status: :ok
    end



private

    # def cast_params
    #     params.permit(:name, :image, :actor, :actor_image, :gender, :id)
    # end

    def show_params
        params.permit(:name, :image, :rating, :summary, :network, :official_site, :seasons, :episodes, :cast, :genre, :runtime, :premiered, :ended, :user_id, :show_id, :seasons, :episodes, :cast)
    end

    def no_show_found
        render json: {error: "Show not found"}, status: :not_found
    end

end

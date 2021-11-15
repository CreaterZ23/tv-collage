Rails.application.routes.draw do
  resources :favorite_seasons
  resources :reviews
  resources :shows
  resources :users 
  post '/login', to: 'session#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'session#destroy'
  get '/auth', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"

  put '/shows/:id/update_cast', to: 'shows#update_cast'

  put '/shows/:id/update_season', to: 'shows#update_season'

  put '/shows/:id/update_episode', to: 'shows#update_episode'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

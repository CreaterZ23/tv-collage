Rails.application.routes.draw do
  resources :reviews
  resources :shows
  resources :users 
  post '/login', to: 'session#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'session#destroy'
  get '/auth', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"

  patch '/update_cast', to: 'shows#update_cast'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do

  get 'bizs/index'

  get 'bizs/show'

  get 'bizs/create'

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

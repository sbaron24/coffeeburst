Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :coffees, only: [:new, :create, :show] do
    resources :profiles, only: [:new]
  end

  namespace :api do
    namespace :v1 do
      post 'coffees/search', to: 'coffees#search'
      resources :coffees, only: [] do
        resources :profiles, only: [:create]
      end
    end
  end
end

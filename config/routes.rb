Rails.application.routes.draw do
  resources :venues, only: [:index, :update] do
    resources :suggestions, only: [:index, :create, :update]
    resources :reviews, only: [:index, :create]
  end
  resources :categories, only: [:index]
end

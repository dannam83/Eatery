class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],params[:user][:password])

    if user
      login(user)
    else
      render :json => {
        :errors => "Incorrect email or password" }, :status => 422
    end
  end

  def destroy
    if current_user
      logout
    else
      render :json => { :errors => "not logged in" }, :status => 404
    end
  end

end

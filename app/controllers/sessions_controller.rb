class SessionsController < ApplicationController
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
    logout
  end

end

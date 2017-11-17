class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],params[:user][:password])

    if user
      login(user)
      render :json => {fname: user.fname, lname: user.lname, id: user.id, img_url: user.image.url}
    else
      render :json => {
        errors: "Incorrect username and/or password." }, :status => 422
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

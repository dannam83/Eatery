class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    # how to make error for email address already being used
    if @user.save
      login(@user)
      render :json => {fname: @user.fname, lname: @user.lname}
    else
      render :json => {
        :errors => @user.errors.full_messages }, :status => 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :lname, :fname, :zipcode)
  end

end

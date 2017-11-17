class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.image = File.open('app/assets/images/chef_logo.png')
      login(@user)
      render :json => {fname: @user.fname, lname: @user.lname, id: @user.id, img_url: @user.image.url}
    elsif @user.fname == nil || @user.fname == ""
      render :json => { errors:
        "Please enter your first name."
      },
      :status => 422
    elsif @user.lname == nil || @user.lname == ""
      render :json => { errors:
        "Please enter your last name."
      },
      :status => 422
    elsif @user.email == ""
      render :json => { errors:
        "Please enter your email."
      },
      :status => 422
    elsif User.email_used?(@user.email)
      render :json => { errors:
        "Email already being used. Please enter another email address."
      },
      :status => 422
    elsif @user.password == ""
      render :json => {
        errors: "Please enter a password."
      },
      :status => 422
    elsif @user.password.length < 6
      render :json => { errors:
        "Password must be at least 6 characters long."
      },
      :status => 422
    else
      render :json => { errors:
        "Hmmm...there seems to be an issue with your request. Try again later."
      },
      :status => 422
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

class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(params[:id])
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: {
        :errors => @user.errors.full_messages }, :status => 422
    end
  end

  def destroy
    review = current_user.reviews.find(params[:id])
    review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :biz_id)
  end

end

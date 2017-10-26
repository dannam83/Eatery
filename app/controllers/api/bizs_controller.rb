class Api::BizsController < ApplicationController
  def index
    @bizs = Biz.all
    render :index
  end

  def show
    @biz = Biz.find_by(params[:id])
    render :show
  end

  def create
    @biz = Biz.new(biz_params)
    @biz.save
  end
end

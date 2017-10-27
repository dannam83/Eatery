class Api::BizsController < ApplicationController
  def index
    @bizs = params[:bounds] ? Biz.in_bounds(params[:bounds]) : Biz.all
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

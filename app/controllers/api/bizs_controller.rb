class BizsController < ApplicationController
  def index
    @bizs = Biz.all
  end

  def show
    @biz = Biz.find_by(params[:id])
  end

  def create
    @biz = Biz.new(biz_params)
    @biz.save
  end
end

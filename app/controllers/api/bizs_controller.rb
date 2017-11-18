class Api::BizsController < ApplicationController
  def index
    filter = nil
    filter = params[:filter] if params[:filter]
    filter = filter[:search] if params[:filter]
    @bizs = params[:bounds] ? Biz.in_bounds(params[:bounds]) : Biz.all
    @bizs = @bizs.select{ |biz| biz.name_match_filter(filter)} if filter
    cat_matches = Description.matching_bizs(filter) if filter
    @bizs = @bizs.concat(cat_matches) if filter
    render :index
  end

  def show
    @biz = Biz.find(params[:id])
    render :show
  end

  def create
    @biz = Biz.new(biz_params)
    @biz.save
  end

end

class Api::BizsController < ApplicationController
  def index
    filter = nil
    @bizs = params[:bounds] ? Biz.in_bounds(params[:bounds]) : Biz.all

    if params[:filter]
      filter = params[:filter][:search]
      @bizs = search_entered(@bizs, filter) if filter
      render :index
    elsif params[:search]
      filter = params[:search]
      filter = filter[:search] unless filter == ""
      matches = search_typing(@bizs, filter) if filter
      render :json => {matches: matches}
    else
      @bizs = @bizs.shuffle[0...10]
      render :index
    end
  end

  def search_entered(bizs, filter)
    bizs = bizs.select{ |biz| biz.name_match_filter(filter)}
    biz_cat_matches = Description.matching_bizs(filter)
    bizs = bizs.concat(biz_cat_matches)
    bizs = bizs[0...10] if bizs.length > 10
    bizs
  end

  def search_typing(bizs, filter)
    bizs = bizs.select{ |biz| biz.name_match_filter(filter)}
    bizs = bizs.map{|biz| biz.name}
    cat_matches = Description.matching_cats(filter)
    matches = cat_matches.concat(bizs)
    matches = matches[0...10] if matches.length > 10
    matches
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

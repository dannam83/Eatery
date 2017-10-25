require 'test_helper'

class BizsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bizs_index_url
    assert_response :success
  end

  test "should get show" do
    get bizs_show_url
    assert_response :success
  end

  test "should get create" do
    get bizs_create_url
    assert_response :success
  end

end

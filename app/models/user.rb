# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  fname              :string           not null
#  lname              :string           not null
#  img_url            :string
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  zipcode            :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

# require 'bcrypt'

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, default_url: "chef_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.email_used?(email)
    !!User.find_by(email: email)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

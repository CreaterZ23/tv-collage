class User < ApplicationRecord
    has_many :shows
    has_many :reviews, through: :shows
    has_many :reviews

    has_secure_password
end

class PosttextsController < ApplicationController
    def index
        @user = current_user
    end
end

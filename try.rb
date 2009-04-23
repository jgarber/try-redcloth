require 'rubygems'
require 'ramaze'
require 'redcloth'

class MainController < Ramaze::Controller
  engine :Haml
  
  def index
    if request.post?
      respond RedCloth.new(request[:text]).to_html
    end
  end

end

Ramaze.start
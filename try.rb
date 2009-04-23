require 'rubygems'
require 'sinatra'
require 'redcloth'

get '/' do
  haml :index
end

post '/' do
  RedCloth.new(params[:text]).to_html
end
